const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

const useragent = require("express-useragent");

dotenv.config();
const PORT = process.env.PORT;
const ALLOWED_ORIGIN = process.env.ALLOWED_ORIGIN;
const API_VERSION = process.env.API_VERSION;

// Routes
const routes = require(`./routes/api/${API_VERSION}/routes`);

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("DB Connection Successfully"))
  .catch((err) => {
    console.error(err);
  });

app.use(
  cors({
    origin: ALLOWED_ORIGIN.split(","),
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: !!1,
  })
);

app.use(cookieParser());
app.use(express.json());

app.use(useragent.express());

// app.use(function (req, res, next) {
//   if (!req.session?.useragent) {
//     let userAgentIs = (useragent) => {
//       let r = [];
//       for (let i in useragent) if (useragent[i] === true) r.push(i);
//       return r;
//     };
//     req.session.useragent = {
//       browser: req.useragent.browser,
//       version: req.useragent.version,
//       os: req.useragent.os,
//       platform: req.useragent.platform,
//       geoIp: req.useragent.geoIp, // needs support from nginx proxy
//       source: req.useragent.source,
//       is: userAgentIs(req.useragent),
//     };
//   }
//   return next();
// });

app.use(`/api/${API_VERSION}`, routes);

app.listen(PORT, () => {
  console.log(
    `${process.env.SERVER_NAME} server ${process.env.SERVER_ID} is active and running on PORT=${PORT}`
  );
});
