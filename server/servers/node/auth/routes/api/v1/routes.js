const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const {
  User,
  Address,
  Verify,
  AccountType: AT,
  ShowOnAdmin: soa,
  CreationMonth: CM,
  RefCode: RC,
  Pin,
  FailedLogin: FL,
  IpLoginDetail: ipd,
  Session,
} = require("../../../models");
const axios = require("axios");
const { randomUUID } = require("crypto");
const generateString = require("../../../config");
const { DateTime } = require("luxon");
const urls = require("../../../config/urls");
const { default: mongoose } = require("mongoose");

// SELF FUNCTIONS
const DT = () => DateTime.local().setZone("America/Los_Angeles");

const Mailer = async (tag, details) => {
  const body = { tag, ...details };
  const { data, status } = await axios.post(
    `${urls.mailer}v1/send-email`,
    body
  );
  return { data, status };
};

const checkDB = (x) => {
  const c = mongoose.connection.collections;
  let cF = false;

  for (let i in c) {
    if (i === x) {
      cF = true;
    }
  }

  return cF;
};

//REGISTER
router.post("/register", async (req, res) => {
  const rc = req.body.refCode;
  const ref_code = rc ? rc : generateString(8, "AZn");
  const newUser = new User({
    username: req.body.username,
    ref_code,
    email: req.body.email,
    first_name: req.body.firstName,
    last_name: req.body.lastName,
    gender: req.body.gender,
    phone_no: req.body.phoneNo,
    password: CryptoJS.AES.encrypt(
      req.body.password,
      process.env.SECRET_KEY
    ).toString(),
  });
  try {
    await newUser.save();
    // try {
    //   const re = await axios.post(
    //     `http://localhost:8703/api/v1/create-new-address`
    //   );
    //   let { address } = re.data;
    //   if (process.env.MODE === "development") address = randomUUID();
    //   const nwAddress = new Address({ user: newUser, address });
    //   nwAddress.save();
    // } catch (err) {
    console.log(err);
    // }
    const uuid = randomUUID();
    const token = generateString(9, "all");
    const expires = DT().plus({ hours: 1 }).plus({ minutes: 35 });
    new Verify({ user: newUser, uuid, token, expires }).save();
    new AT({ user: newUser }).save();
    new soa({
      user: newUser,
      ref_code,
    }).save();
    const month = DT().toFormat("MMM").toLowerCase();
    new CM({ user: newUser, month }).save();
    new RC({ user: newUser, ref_code }).save();
    // new Pin({})

    res.status(201).json({ message: "Now verify your account to get started" });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  const userAgent = req.useragent;
  try {
    const login = req.body.login;

    const { ip, userAgent } = req.body;
    let isEmail = !!0;

    // convert email to username
    if (login.includes("@")) isEmail = !!1;

    // check if username exists
    const user = isEmail
      ? await User.findOne({ email: login })
      : await User.findOne({ username: login });

    if (!user) {
      res.status(401).json("Invalid login credentials");
    } else {
      // check for blocked, disabled, suspended
      const fa = await FL.findOne({ "user.username": user.username });
      const check_blocked = fa ? fa.blocked : null;
      const check_disabled = fa ? fa.disabled : null;
      const check_sus = fa ? fa.suspended : null;

      // check if disabled
      if (check_disabled) {
        res.status(200).json({ message: "Your account has been DISABLED." });
        return 0;
      } else if (check_sus) {
        // check if suspended
        res.status(200).json({
          message:
            "Your account has been TEMPORARY SUSPENDED, Please contact Support.",
        });
        return 0;
      } else if (check_blocked) {
        // check if blocked
        const sent = fa.sent;
        !sent &&
          Mailer("accountBlocked", {
            email: user.email,
            first_name: user.first_name,
            last_name: user.last_name,
            username: user.username,
          });
        fa.updateOne({ user: user.email }, { $set: { sent: !!1 } });
        !fa && new FL({ user, attempt: 3, sent: !!1, blocked: !!1 }).save();
        res.status(200).json({
          message:
            "Your account has been TEMPORARY BLOCKED due to many failed login attempts.",
        });
        return 0;
      } else {
        //  check password
        const bytes = CryptoJS.AES.decrypt(
          user.password,
          process.env.SECRET_KEY
        );
        const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

        if (originalPassword !== req.body.password) {
          const cb = checkDB("failedlogins");
          if (fa) {
            // !fa&& await new FL({user})
            attempt = fa.attempt;
            isSend = fa.sent;
            if (attempt === 3) {
              await fa.updateOne({ blocked: !!1 });
              if (!isSend) {
                Mailer("accountBlocked", {
                  email: user.email,
                  first_name: user.first_name,
                  last_name: user.last_name,
                  username: user.username,
                });
                await fa.updateOne({ sent: !!1 });
              }
              fa
                ? await fa.updateOne({ sent: !!1 })
                : await new FL({ user, sent: !!1, blocked: !!1 }).save();
              user.updateOne({ isActive: !!0 });
              res.status(200).json({
                message:
                  "Your account has been temporary blocked, Check your mailbox for instructions or contact support, Thank You.",
              });
              return 0;
            } else if (attempt < 3) {
              await fa.updateOne({ attempt: fa.attempt + 1 });
              const tries = 3 - fa.attempt;
              Mailer("failedAttempt", {
                email: user.email,
                first_name: user.first_name,
                last_name: user.last_name,
                username: user.username,
                tries,
              });
              res.status(200).json({
                message: `Invalid Login, ${tries} attempt${
                  tries > 1 ? "s" : ""
                } left.`,
              });
              return 0;
            }
          } else {
            await new FL({ user }).save();
            Mailer("failedAttempt", {
              email: user.email,
              first_name: user.first_name,
              last_name: user.last_name,
              username: user.username,
              tries: 3,
            });
            res.status(200).json({
              message: `Invalid Login, 3 attempts left.`,
            });
            return 0;
          }
          res.status(401).json("Wrong password or username![P]");
        } else {
          if (!user.isActive && user.isDisabled) {
            res.status(200).json({
              message: "Your account has been permanently BLOCKED.",
            });
            return 0;
          } else if (!user.isActive) {
            res.status(200).json({
              message:
                "A ban has been placed on your account, Contact support for more help.",
            });
            return 0;
          } else {
            FL.findOneAndRemove({ "user.username": user.username });
            // create login access token (user logged in)
            const accessToken = jwt.sign(
              { id: user._id, isAdmin: user.isAdmin, username: user.username },
              process.env.SECRET_KEY,
              { expiresIn: "5d" }
            );

            // check session and deactivate last one
            // const ss = await Session.find({ user: user._id });
            // console.log(ss);

            // create active session for user
            const expires = DT().plus({ days: 5 });
            const session = await new Session({
              user: user._id,
              ip,
              token: accessToken,
              device: "",
              expires,
            }).save();

            let location,
              masked_pre = !!1;
            var d;

            var { data: d } = await axios.get(
              `https://ipqualityscore.com/api/json/ip/${process.env.QUALITY_CHECK_API}/${ip}`
            );
            // get info about the ip
            if (d.success) {
              location = `${d.city}, ${d.region}, ${d.country_code}`;
            } else {
              console.log({ ipCheckError: `check failed: ${d.message}` });
              masked_pre = !masked_pre;
              location = "";
            }

            // get info about timezone
            // try {
            const rTz = d.timezone;
            const tz = rTz.split("/");
            const { data: t } = await axios.get(
              `https://worldtimeapi.org/api/timezone/${tz[0]}/${tz[1]}.json`
            );
            const a = t.datetime.slice(0, 10);
            const b = t.datetime;
            const now = DT();
            const year = a.slice(0, 4);
            const mnth = a.slice(5, 7);
            const day = a.slice(8);
            const time = b.slice(11, 19);
            const newDate = `${day}/${mnth}/${year} ${time}`;
            // DT.fromISO(res[0], { zone: "America/Indiana/Petersburg" });
            const znow = DateTime.fromISO(b, { zone: rTz }).toString();
            // } catch (err) {
            //   console.log({ checkDatetimeError: err });
            // }

            // set ip details
            let vpn = !!0;
            console.log(d)
            if (masked_pre) {
              if (d.proxy || d.tor || d.vpn) vpn = !!1;
              new ipd({ user, ip, session, vpn }).save();
              const ipf = await ipd.findOne({ user });
            }

            // set device info
            // 0 Chrome
            // 1 116.0.0.0
            // 2 Windows 10.0
            // 3 Microsoft Windows
            // 4 Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/116.0.0.0 Safari/537.36
            // 5 isAuthoritative,isChrome,isDesktop,isWindows
            // try {
            const ua = userAgent.split("&");
            const os = ua[2];
            const uA = ua[4];
            const browser = ua[0];
            const browser_version = ua[1];
            const dName = ua[3];
            const oSys = `${os}`;
            const bDetail = `${browser} ${browser_version}`;
            const device = ua[5].split(",");
            // } catch (err) {
            //   console.log({ deviceInfoError: err });
            // }

            // create recent activities
            const status = `You logged in near ${location} on a ${dName}`;
            const iData = {
              user: user.username,
              user_id: user._id,
              activity_type: "login",
              time: DateTime.local().setZone(rTz),
              status,
            };
            const jData = {
              email: user.email,
              first_name: user.first_name,
              last_name: user.last_name,
              username: user.username,
              date: DateTime.local().setZone(rTz).toFormat("DDDD"),
              time: DateTime.local().setZone(rTz).toFormat("t"),
              zoneName: t.abbreviation,
              ip,
              vpn,
              location,
              dName,
              sysOs: oSys,
              browser: bDetail,
            };
            
            // create activity
            await axios.post(`${urls.ps1}v1/recent-activity`, iData);

            // send notification
            Mailer("loginNotification", jData);
            const fl = FL.findOne({ user });
            fl && fl.deleteOne();

            const { password, ...info } = user._doc;

            res.status(200).json({ ...info, accessToken });
          }
        }
      }
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/email-verify", async (req, res) => {
  try {
    const { uuid, token } = req.body;
    const uuidT = await Verify.findOne({ uuid });
    const tokenT = await Verify.findOne({ token });
    if (uuidT && tokenT) {
      console.log(uuidT.user);
      if (uuidT.user.isVerified) {
        res.status(200).send("verified");
      } else {
        const user = await User.updateOne(
          { email: uuidT.user.email },
          { $set: { isVerified: !!1 } }
        );
        await Verify.updateOne(
          { user: uuidT.user },
          { "user.isVerified": !!1 }
        );
        res.status(200).json({ uuid, token });
      }
    } else {
      res.status(404).send("E");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.delete("/email-verify", async (req, res) => {
  try {
    const { uuid, token } = req.body;
    const uuidT = await Verify.findOneAndRemove({ uuid, token });
    uuidT ? res.status(200).json({ uuid, token }) : res.status(404).send("E");
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

router.post("/send-email", async (req, res) => {
  try {
    let { email, tag } = req.body;
    const v = await Verify.findOne({ "user.email": email });
    if (v) {
      const { email, username, first_name, last_name } = v.user;
      const expires = DT().plus({ hours: 1 }).plus({ minutes: 35 });
      await v.updateOne({ expires });
      const { uuid, token } = v;
      const body = {
        tag,
        uuid,
        token,
        email,
        username,
        first_name,
        last_name,
      };
      const { data, status } = await axios.post(
        `${urls.mailer}v1/send-email`,
        body
      );
      res.status(status).send(data);
    } else {
      res.status(404).send("Unknown user");
    }
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
