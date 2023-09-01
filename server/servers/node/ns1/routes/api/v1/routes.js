const router = require("express").Router();

router.post("/contact", async (req, res) => {
    console.log(req.body)
//   try {
//     const { data, status } = await axios.get(`${urls.ps1}v1/get-pricing`);
//     res.status(status).json(data);
//   } catch (err) {
//     let error;
//     let stat = 500;
//     const code = err.code;
//     if (code === "ECONNREFUSED") {
//       error = "UNABLE TO CONNECT TO: {Get Pricing Server}. View Log File";
//     } else if (code === "ERR_BAD_REQUEST") {
//       error = err.response.data;
//       stat = err.response.status;
//     } else {
//       error =
//         "Get Pricing Server is experiencing Downtime or An error occurred with your request. View Log File";
//     }
//     res.status(stat).json(error);
//   }
});

module.exports = router;