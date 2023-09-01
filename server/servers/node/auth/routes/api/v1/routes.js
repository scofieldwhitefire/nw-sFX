const router = require("express").Router();
const CryptoJS = require("crypto-js");
const jwt = require("jsonwebtoken");
const users = require("../../../models/users");

//REGISTER
router.post("/register", async (req, res) => {
  const newUser = new users({
    username: req.body.username,
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
    const {
      username,
      email,
      first_name,
      last_name,
      gender,
      phone_no,
      isAdmin,
      isVerified,
      isActive,
      isDisabled,
    } = await newUser.save();
    const user = {
      username,
      email,
      first_name,
      last_name,
      gender,
      phone_no,
      isAdmin,
      isVerified,
      isActive,
      isDisabled,
    };
    res.status(201).json(user);
  } catch (err) {
    res.status(500).json(err);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  try {
    const login = req.body.login;
    let isEmail = !!0;
    if (login.includes("@")) isEmail = !!1;
    const user = isEmail
      ? await users.findOne({ email: login })
      : await users.findOne({ username: login });
    console.log(user);
    !user && res.status(401).json("Wrong password or username! [U]");

    const bytes = CryptoJS.AES.decrypt(user.password, process.env.SECRET_KEY);
    const originalPassword = bytes.toString(CryptoJS.enc.Utf8);

    originalPassword !== req.body.password &&
      res.status(401).json("Wrong password or username![P]");

    const accessToken = jwt.sign(
      { id: user._id, isAdmin: user.isAdmin },
      process.env.SECRET_KEY,
      { expiresIn: "5d" }
    );

    const { password, ...info } = user._doc;

    res.status(200).json({ ...info, accessToken });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
