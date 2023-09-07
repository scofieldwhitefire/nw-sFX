const router = require("express").Router();

const axios = require("axios");

const block_url = "https://www.blockonomics.co/api/";

const Axios = axios.create({
  baseURL: block_url,
});

router.post("/create-new-address", async (req, res) => {
  Axios.defaults.headers.common["Content-Type"] = "application/json";
  Axios.defaults.headers.common[
    "Authorization"
  ] = `Bearer ${process.env.BLOCKONOMICES_KEY}}`;

  try {
    const re = await Axios.post(
      `new_address${process.env.MODE === "development" ? "?reset=1" : ""}`
    );
    const { address } = re.data;
    res.status(200).json({ address });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

module.exports = router;
