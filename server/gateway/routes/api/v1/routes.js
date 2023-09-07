const router = require("express").Router();

// const { Axios } = require("../../../config");
const axios = require("axios");
const urls = require("../../../config/urls");
const Secure = require("../../../config");

router.get("/get-pricing", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  try {
    const { data, status } = await axios.get(`${urls.ps1}v1/get-pricing`);
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Get Pricing Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST") {
      error = err.response.data;
      stat = err.response.status;
    } else {
      error =
        "Get Pricing Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

router.post("/get-subplans", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  const { plan } = req.body;
  const body = { plan };

  try {
    const { data, status } = await axios.post(
      `${urls.ps1}v1/get-subplans`,
      body
    );
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Get SubPlans Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST") {
      error = err.response.data;
      stat = err.response.status;
    } else {
      error =
        "Get SubPlans Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

router.get("/get-testimonial", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  try {
    const { data, status } = await axios.get(`${urls.ps1}v1/get-testimonial`);
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Get Testimonial Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST") {
      error = err.response.data;
      stat = err.response.status;
    } else {
      error =
        "Get Testimonial Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

router.get("/get-faqs", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  try {
    const { data, status } = await axios.post(`${urls.ps1}v1/get-faqs`, {
      len: req.query.len,
    });
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Get FAQ Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST") {
      error = err.response.data;
      stat = err.response.status;
    } else {
      error =
        "Get FAQ Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

router.get("/get-blog", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  try {
    const { data, status } = await axios.post(`${urls.ps1}v1/get-blog`, {
      len: req.query.len,
    });
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Get Blogs Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST") {
      error = err.response.data;
      stat = err.response.status;
    } else {
      error =
        "Get Blogs Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

router.post("/get-all-blog", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  const { len } = req.body;
  const body = { len };
  try {
    const { data, status } = await axios.post(
      `${urls.ps1}v1/get-all-blog`,
      body
    );
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Get Blogs Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST") {
      error = err.response.data;
      stat = err.response.status;
    } else {
      error =
        "Get Blogs Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

router.post("/contact", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  const { name, email, message } = req.body;
  const body = { name, email, message };

  try {
    const { data, status } = await axios.post(`${urls.ns1}v1/contact`, body);
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Contact Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST") {
      error = err.response.data;
      stat = err.response.status;
    } else {
      error =
        "Contact Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

router.post("/calculate", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  const { plan, subPlan, amt } = req.body;
  const body = { plan, subPlan, amt };

  try {
    const { data, status } = await axios.post(`${urls.ps1}v1/calculator`, body);
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Calculator Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST") {
      error = err.response.data;
      stat = err.response.status;
    } else {
      error =
        "Calculator Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

// REGISTER
router.post("/register", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  const { username, email, firstName, lastName, gender, phoneNo, password } =
    req.body;
  const body = {
    username,
    email,
    firstName,
    lastName,
    gender,
    phoneNo,
    password,
  };
  try {
    let { data, status } = await axios.post(`${urls.auth}v1/register`, body);
    // data
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    console.log(err);
    if (code === "ECONNREFUSED") {
      // error = "UNABLE TO CONNECT TO: {Auth Server}. View Log File";
      error = "Unable to complete your request at the moment.";
    } else if (code === "ERR_BAD_REQUEST" || code === "ERR_BAD_RESPONSE") {
      error =
        "We couldn't create an account for you now, we apologize for the inconvenience caused, SafewayFX team has been alerted and the error is been worked on. Please try again in a few minutes";
      stat = err.response.status;
    } else {
      error =
        "Auth Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

//LOGIN
router.post("/login", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }

  const { login, password, ip, userAgent } = req.body;
  const body = {
    login,
    password,
    ip,
    userAgent,
  };
  try {
    let { data, status } = await axios.post(`${urls.auth}v1/login`, body);
    // data
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Auth Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST" || code === "ERR_BAD_RESPONSE") {
      if (err.response.status == 401) {
        error = err.response.data;
      } else {
        error =
          "We couldn't log you in now, we apologize for the inconvenience caused, SafewayFX team has been alerted and the error is been worked on. Please try again in a few minutes";
      }
      stat = err.response.status;
    } else {
      error =
        "Auth Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

router.post("/create-new-address", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  try {
    let { data, status } = await axios.post(
      `${urls.crypto}v1/create-new-address`
    );
    // data
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Crypto Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST" || code === "ERR_BAD_RESPONSE") {
      error = err.response.data;
      stat = err.response.status;
    } else {
      error =
        "Crypto Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

router.post("/email-verify", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  const { uuid, token } = req.body;
  const body = { uuid, token };
  try {
    let { data, status } = await axios.post(
      `${urls.auth}v1/email-verify`,
      body
    );
    // data
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Email Verify Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST" || code === "ERR_BAD_RESPONSE") {
      error = err.response.data;
      stat = err.response.status;
    } else {
      error =
        "Email Verify Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

router.post("/send-email", async (req, res) => {
  // let ri
  // try {
  //   ri = req.headers.authorization.split(" ");
  // } catch (err) {
  //   return res.status(511).send("NETWORK AUTHENTICATION REQUIRED");
  // }
  // const s = Secure(ri[1]);
  // if (!s) {
  //   res.status(406).send("REQUEST NOT ACCEPTABLE");
  //   return 0;
  // }
  const { email, tag } = req.body;
  const body = { email, tag };
  try {
    let { data, status } = await axios.post(`${urls.auth}v1/send-email`, body);
    // data
    res.status(status).json(data);
  } catch (err) {
    let error;
    let stat = 500;
    const code = err.code;
    if (code === "ECONNREFUSED") {
      error = "UNABLE TO CONNECT TO: {Send Email Server}. View Log File";
    } else if (code === "ERR_BAD_REQUEST" || code === "ERR_BAD_RESPONSE") {
      error = err.response.data;
      stat = err.response.status;
    } else {
      error =
        "Send Email Server is experiencing Downtime or An error occurred with your request. View Log File";
    }
    res.status(stat).json(error);
  }
});

module.exports = router;
