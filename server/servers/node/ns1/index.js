const express = require("express");
const app = express();
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

dotenv.config();
const PORT = process.env.PORT;
const API_VERSION  = process.env.API_VERSION;

// Routes
const routes = require(`./routes/api/${API_VERSION}/routes`);

app.use(cookieParser());
app.use(express.json());

app.use(`/api/${API_VERSION}`, routes);

app.listen(PORT, () => {
  console.log(
    `Node server ${process.env.SERVER_ID} is active and running on PORT=${PORT}`
  );
});
