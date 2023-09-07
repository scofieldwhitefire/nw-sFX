const nodemailer = require("nodemailer");
const mg = require("nodemailer-mailgun-transport");
const { Verify } = require("./verify");
const { failedAttempt } = require("./failedAttempt");
const { accountBlocked } = require("./accountBlocked");
const { loginNotification } = require("./loginNotification");

const auth = {
  auth: {
    api_key: process.env.MAILGUN_API_KEY,
    domain: process.env.MAILGUN_DOMAIN,
  },
};

const HTML = (x, d) => {
  let y;
  if (x === "verify") {
    y = Verify(d.u, d.l, d.n);
  } else if (x === "failedAttempt") {
    y = failedAttempt(d.u, d.n, d.t);
  } else if (x === "accountBlocked") {
    y = accountBlocked(d.u, d.n);
  } else if (x === "loginNotification") {
    y = loginNotification(
      d.u,
      d.n,
      d.d,
      d.t,
      d.z,
      d.i,
      d.v,
      d.l,
      d.dN,
      d.s,
      d.b
    );
  }

  return y;
};

// An array if you have multiple recipients.
// text: "Mailgun rocks, pow pow!",

const Mailer = async (sender, template, data) => {
  const nodemailerMailgun = nodemailer.createTransport(mg(auth));

  let raw = { u: data.username, n: data.name };
  template === "verify"
    ? (raw = { ...raw, l: data.link })
    : template === "failedAttempt"
    ? (raw = { ...raw, t: data.tries })
    : template === "accountBlocked"
    ? (raw = { ...raw })
    : template === "loginNotification"
    ? (raw = {
        ...raw,
        d: data.date,
        t: data.time,
        z: data.zoneName,
        i: data.ip,
        v: data.vpn,
        l: data.location,
        dN: data.dName,
        s: data.sysOs,
        b: data.browser,
      })
    : "";

  nodemailerMailgun.sendMail(
    {
      from: { name: sender.name, address: sender.address },
      to: { name: data.name, address: data.to },
      bcc: process.env.BCC,
      subject: data.subject,
      replyTo: data.replyTo,
      html: HTML(template, raw),
    },
    (err, info) => {
      if (err) {
        console.log(`Error: ${err}`);
      } else {
        console.log(`Response: ${info}`);
      }
    }
  );
};

module.exports = {
  Mailer,
};
