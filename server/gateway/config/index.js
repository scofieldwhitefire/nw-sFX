const axios = require("axios");
const CryptoJS = require("crypto-js");
const { DateTime: DT } = require("luxon");

const Axios = axios;

const Secure = (t) => {
  const a = CryptoJS.AES.decrypt(t, process.env.SECRET_KEY);
  const b = a.toString(CryptoJS.enc.Utf8);
  let res = b.split("#");
  const l = b.split("#");
  res = DT.fromISO(res[0], { zone: "America/Indiana/Petersburg" });
  const now = DT.local().setZone("America/Indiana/Petersburg");
  const u = now.plus({ minutes: 1 });
  const d = now.minus({ minutes: 1 });
  res = res >= d && res <= u ? !!1 : !!0;
  if (l[1] !== process.env.SECURE_KEY) res = !!0;
  return res;
};

module.exports = Secure;
