const express = require("express");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const cookieParser = require("cookie-parser");

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

app.use(`/api/${API_VERSION}`, routes);

app.listen(PORT, () => {
  console.log(
    `Auth server ${process.env.SERVER_ID} is active and running on PORT=${PORT}`
  );
});
