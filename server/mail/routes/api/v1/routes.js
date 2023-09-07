const router = require("express").Router();

const axios = require("axios");
const { randomUUID } = require("crypto");
const generateString = require("../../../config");
const { DateTime } = require("luxon");
const { verified } = require("../../../models");
const { parse } = require("path");
const { Mailer } = require("../../../mail");

// SELF FUNCTIONS
const DT = () => DateTime.local().setZone("America/Los_Angeles");

router.post("/send-email", async (req, res) => {
  let send = !!0,
    verify = !!1,
    valid = !!0;
  const { tag, email, username, first_name, last_name } = req.body;

  //  validate email
  const isVerified = await verified.findOne({ email });
  isVerified && ((send = !!1), (verify = !!0));
  if (verify) {
    const { data, status } = await axios.get(
      `https://emailvalidation.abstractapi.com/v1/?api_key=${process.env.VALIDATE_API}&email=${email}`
    );
    const realEmail = data.deliverability;
    const score = data.quality_score;
    if (realEmail === "DELIVERABLE" && parseFloat(score) > 0.89) valid = !!1;
    if (valid) {
      new verified({ email }).save();
      send = !!1;
    }
  }
  // send email
  if (send) {
    let subject,
      replyTo = "",
      link,
      sender = { name: "SafewayFX", address: "no-reply@safewayfx.com" };

    // mail data
    let data = {
      name: `${first_name} ${last_name}`,
      to: email,
      username,
      subject,
      replyTo,
    };

    if (tag === "verify") {
      const { uuid, token } = req.body;

      subject = "Verify your Email.";
      replyTo = "";
      const link = `${
        process.env.MODE !== "development"
          ? "https://auth.safewayfx.com/"
          : "http://localhost:5174/"
      }verify/${uuid}/${token}`;
      data = { ...data, subject, link };
    } else if (tag === "failedAttempt") {
      const { tries } = req.body;
      subject = "Failed Login Attempt - [SafewayFX]";
      data = { ...data, subject, tries };
    } else if (tag === "accountBlocked") {
      subject = "Account Blocked - [SafewayFX]";
      data = { ...data, subject };
    } else if (tag === "loginNotification") {
      const { date,
        time,
        zoneName,
        ip,
        vpn,
        location,
        dName,
        sysOS,
        browser,
      } = req.body
      subject = "Login Alert - [SafewayFX]'";
      data = {
        ...data,
        subject,
        date,
        time,
        zoneName,
        ip,
        vpn,
        location,
        dName,
        sysOS,
        browser,
      };
    }

    await Mailer(sender, tag, data);
    res.status(200).send("sent");
  } else {
    res.status(200).send("ok");
  }
});

module.exports = router;
