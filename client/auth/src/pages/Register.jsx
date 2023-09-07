import { useEffect, useState } from "react";
import RegImg0 from "../assets/images/RegImg0";
import RegImg1 from "../assets/images/RegImg1";
import RegImg2 from "../assets/images/RegImg2";
import RegImg3 from "../assets/images/RegImg3";
import RegImg4 from "../assets/images/RegImg4";
import RegImg5 from "../assets/images/RegImg5";
import { Link, TC, Title, Toast } from "../config/libs";
import { LANDING_URL } from "../config";
import { useDispatch, useSelector } from "react-redux";
import { register } from "../features/auth";
import { useNavigate } from "react-router-dom";
import Helmet from "../components/atom/Helmet";

const initData = {
  username: "",
  email: "",
  firstName: "",
  lastName: "",
  gender: "",
  phoneNo: "",
  password: "",
  pwd: "",
};

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { details, regLoading } = useSelector((state) => state.auth);

  const [data, setData] = useState(initData);
  const [txt, setTxt] = useState("Show passwords");
  const [reveal, setReveal] = useState(!!0);
  const [ip, setIp] = useState("");
  const [calling, setCalling] = useState("");
  const [dots, setDots] = useState("");

  let { username, email, firstName, lastName, gender, phoneNo, password, pwd } =
    data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const revealPwd = () => {
    if (reveal) {
      setTxt("Show passwords");
      setReveal(!!0);
    } else {
      setTxt("Hide passwords");
      setReveal(!!1);
    }
  };

  const onSubmit = async (e) => {
    e.preventDefault();

    const notAllowed = [
      "admin",
      "root",
      "user",
      "username",
      "email",
      "name",
      "users",
      "usernames",
      "roots",
      "admins",
      "emails",
      "names",
    ];
    Toast();

    let err = [];
    username = username.toLowerCase();
    email = email.toLowerCase();
    firstName = firstName.toLowerCase();
    lastName = lastName.toLowerCase();
    const rpwd = password.toLowerCase();

    const intReg = /^\d+$/;
    const strReg = /^[A-Za-z]*$/;
    const intStrReg = /^[A-Za-z0-9]*$/;
    const sys = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
    const emailRegex =
      /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    // console.log(`${calling}`);
    // console.log(`${calling.substring(1)}${phoneNo}`);
    let run = !!0,
      runU = !!1,
      runE = !!1,
      yesU = !!0,
      yesE = !!0;

    for (let j = 0; j < notAllowed.length; j++) {
      if (username.includes(notAllowed[j])) {
        runU = !!0;
        yesU = !!1;
        console.log(username, notAllowed[j])
      }
    }
    yesU &&
      err.push("Username contains words that are not allowed on SafewayFX.");
    for (let k = 0; k < notAllowed.length; k++) {
      if (email.includes(notAllowed[k])) {
        runU = !!0;
        yesE = !!1;
      }
    }
    yesE && err.push(`${email} can't be allowed on SafewayFX.`);

    if (runU) {
      if (intReg.test(username.charAt(0))) {
        err.push("Username can't start with a number.");
      }
      if (sys.test(username.charAt(0))) {
        err.push("Username can't start with a symbol.");
      }
      if (sys.test(username)) {
        err.push("Username can't contain symbols.");
      }
    }
    if (runE) {
      if (!email.match(emailRegex)) {
        err.push("Invalid email.");
      }
    }
    if (!strReg.test(firstName)) {
      err.push("First name shouldn't contain numbers.");
    }
    if (!strReg.test(lastName)) {
      err.push("Last name shouldn't contain numbers.");
    }

    if (runU && runE) {
      if (rpwd.includes(username)) {
        err.push(
          "For security reasons your password can't contain your username."
        );
        run = !!0;
      }
      const a = email.split("@");
      if (rpwd.includes(a[0])) {
        err.push(
          "For security reasons your password can't contain your email."
        );
        run = !!0;
      }
    }
    if (run) {
      if (password !== pwd) {
        err.push("Both passwords don't match!");
      }
    }
    if (err.length) {
      for (let i = 0; i < err.length; i++) {
        Toast("error", err[i]);
      }
      return 0;
    }

    if (!err.length) {
      Toast("promise", "Creating your account, Please wait...");
      Dots();
      const res = await dispatch(
        register({
          username,
          email,
          firstName,
          lastName,
          gender,
          phoneNo,
          password,
        })
      );
      console.log(res);
      if (res.meta.requestStatus === "rejected") {
        Toast();
        Toast("error", res.payload?.detail);
      } else {
        Toast();
        const msg = res.payload?.message;

        Toast("success", `Account created successfully, ${msg}`);
        localStorage.setItem("email", email);
        setTimeout(() => {
          navigate("/verify");
        }, 4500);
      }
    }
  };

  const Dots = () => {
    while (regLoading) {
      let x = 1;
      const y = setInterval(() => {
        setDots(".".repeat(x));
        x++;
        if (x === 3) {
          clearInterval(y);
        }
      }, 100);
    }
  };

  const getIP = async () => {
    fetch("https://api.ipify.org/?format=json")
      .then((res) => res.json())
      .then((data) => {
        const { ip } = data;
        setIp(ip);
      })
      .catch((err) => console.error(err));
  };

  const getIPInfo = () => {
    fetch(`https://ipapi.co/${ip}/json`)
      .then((res) => res.json())
      .then((data) => {
        const { country_calling_code } = data;
        setCalling(country_calling_code);
        setData({ ...data, phoneNo: country_calling_code });
      })
      .catch((err) => console.error(err));
  };

  // useEffect(() => {
  //   getIP();
  // }, []);

  // useEffect(() => {
  //   getIPInfo();
  // }, [ip]);

  return (
    <>
      <TC />
      <Helmet title={"Register"} />
      <div className="auth-bg">
        <section className="login-content">
          <div className="row m-0 align-items-center vh-100">
            <div className="col-lg-6 res-hide">
              <div className="sign-up-img2">
                <svg
                  width="700"
                  viewBox="0 0 942 1000"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                >
                  <g id="Sign-up">
                    <rect
                      id="GoldBricks-1"
                      x="60"
                      y="362"
                      width="307"
                      height="258"
                      fill="url(#pattern0)"
                    />
                    <rect
                      id="Coin2"
                      x="89"
                      y="116.379"
                      width="73.7405"
                      height="73.7405"
                      transform="rotate(-68.0172 89 116.379)"
                      fill="url(#pattern1)"
                    />
                    <rect
                      id="Coin5"
                      x="771"
                      y="899.908"
                      width="82.328"
                      height="82.328"
                      transform="rotate(-36.4464 771 899.908)"
                      fill="url(#pattern2)"
                    />
                    <rect
                      x="641.066"
                      y="9.67188"
                      width="74.8494"
                      height="74.8494"
                      transform="rotate(44.7853 641.066 9.67188)"
                      fill="url(#pattern3)"
                    />
                    <rect
                      id="Coin3"
                      x="228.104"
                      y="772"
                      width="111.825"
                      height="111.825"
                      transform="rotate(50.353 228.104 772)"
                      fill="url(#pattern4)"
                    />
                    <rect
                      id="Coin6"
                      x="530.004"
                      y="751.656"
                      width="59.6182"
                      height="59.6182"
                      transform="rotate(50.353 530.004 751.656)"
                      fill="url(#pattern5)"
                    />
                    <rect
                      id="Coin4"
                      x="449.061"
                      y="840"
                      width="113.6"
                      height="113.6"
                      transform="rotate(34.3264 449.061 940)"
                      fill="url(#pattern6)"
                    />
                    <rect
                      x="385"
                      y="221"
                      width="557"
                      height="559"
                      fill="url(#pattern7)"
                    />
                  </g>
                  <defs>
                    <pattern
                      id="pattern0"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image0"
                        transform="translate(0 -0.0949612) scale(0.0005)"
                      />
                    </pattern>
                    <pattern
                      id="pattern1"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image1" transform="scale(0.0005)" />
                    </pattern>
                    <pattern
                      id="pattern2"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image2" transform="scale(0.0005)" />
                    </pattern>
                    <pattern
                      id="pattern3"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image3" transform="scale(0.0005)" />
                    </pattern>
                    <pattern
                      id="pattern4"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image4" transform="scale(0.0005)" />
                    </pattern>
                    <pattern
                      id="pattern5"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image4" transform="scale(0.0005)" />
                    </pattern>
                    <pattern
                      id="pattern6"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use xlinkHref="#image3" transform="scale(0.0005)" />
                    </pattern>
                    <pattern
                      id="pattern7"
                      patternContentUnits="objectBoundingBox"
                      width="1"
                      height="1"
                    >
                      <use
                        xlinkHref="#image5"
                        transform="translate(-0.00179533) scale(0.000501795)"
                      />
                    </pattern>
                    <RegImg0 />
                    <RegImg1 />
                    <RegImg2 />
                    <RegImg3 />
                    <RegImg4 />
                    <RegImg5 />
                  </defs>
                </svg>
              </div>
            </div>
            <div className="col-md-12 col-lg-6">
              <div className="row justify-content-center">
                <div className="col-md-8">
                  <div className="card d-flex justify-content-center mb-0">
                    <div className="card-body">
                      <div className="auth-form">
                        <h2 className="text-center mb-4">Register</h2>
                        <form onSubmit={onSubmit}>
                          <p>
                            Hey there! Ready to join the party? We just need a
                            few details from you to get started. Let's do this!
                          </p>
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="username"
                                  name="username"
                                  placeholder="username"
                                  value={username}
                                  onChange={onChange}
                                />
                                <label htmlFor="username">Username</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-3">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="email"
                                  name="email"
                                  placeholder="name@example.com"
                                  value={email}
                                  onChange={onChange}
                                />
                                <label htmlFor="email">Email</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="firstName"
                                  name="firstName"
                                  placeholder="firstName"
                                  value={firstName}
                                  onChange={onChange}
                                />
                                <label htmlFor="firstName">First Name</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastName"
                                  name="lastName"
                                  placeholder="lastName"
                                  value={lastName}
                                  onChange={onChange}
                                />
                                <label htmlFor="lastName">Last Name</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-3">
                                <select
                                  className="form-control"
                                  id="gender"
                                  name="gender"
                                  placeholder="name@example.com"
                                  value={gender}
                                  onChange={onChange}
                                >
                                  <option disabled={!!1} value={""}>
                                    Select Gender
                                  </option>
                                  <option value={"male"}>Male</option>
                                  <option value={"female"}>Female</option>
                                </select>
                                <label htmlFor="gender">Gender</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-3">
                                <input
                                  type="number"
                                  className="form-control phn"
                                  id="phoneNo"
                                  name="phoneNo"
                                  placeholder="phoneNo"
                                  value={phoneNo}
                                  onChange={onChange}
                                />
                                <label htmlFor="phoneNo">Phone no</label>
                              </div>
                            </div>
                          </div>
                          <div className="row mb-4">
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-2">
                                <input
                                  type={reveal ? "text" : "password"}
                                  className="form-control"
                                  id="password"
                                  name="password"
                                  placeholder="Password"
                                  value={password}
                                  onChange={onChange}
                                />
                                <label htmlFor="password">Password</label>
                                {password !== "" || pwd !== "" ? (
                                  <small
                                    onClick={revealPwd}
                                    style={{
                                      position: "absolute",
                                      left: "1px",
                                      marginTop: "2px",
                                      cursor: "pointer",
                                    }}
                                    className="text-left"
                                  >
                                    {txt}
                                  </small>
                                ) : (
                                  ""
                                )}
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-2">
                                <input
                                  type={reveal ? "text" : "password"}
                                  className="form-control"
                                  id="pwd"
                                  name="pwd"
                                  placeholder="Confirm Password"
                                  value={pwd}
                                  onChange={onChange}
                                />
                                <label htmlFor="pwd">Confirm-password</label>
                              </div>
                            </div>
                          </div>
                          <div
                            className="form-check d-flex justify-content-center  mb-2"
                            style={{ paddingLeft: "0px" }}
                          >
                            {/* <input
                              type="checkbox"
                              className="form-check-input"
                              id="agree"
                            /> */}
                            <label className="form-check-label" htmlFor="agree">
                              By registering you agree with SafewayFX{" "}
                              <Link to={`${LANDING_URL}terms`}>Terms</Link> &{" "}
                              <Link to={`${LANDING_URL}policy`}>Policy</Link>.
                            </label>
                          </div>
                          <div className="text-center">
                            {!regLoading ? (
                              <button
                                disabled={
                                  username === "" ||
                                  username.length < 4 ||
                                  email === "" ||
                                  email.length < 3 ||
                                  firstName === "" ||
                                  firstName.length < 2 ||
                                  lastName === "" ||
                                  lastName.length < 2 ||
                                  gender === "" ||
                                  phoneNo === "" ||
                                  phoneNo.length < 10 ||
                                  password === "" ||
                                  password.length < 6 ||
                                  password.length > 16 ||
                                  pwd === "" ||
                                  pwd.length < 6
                                }
                                type="submit"
                                className="btn btn-primary"
                              >
                                Register
                              </button>
                            ) : (
                              <button
                                type="button"
                                disabled
                                className="btn btn-primary"
                              >
                                creating account{dots}
                              </button>
                            )}
                          </div>
                          {/* <div className="text-center mt-3">
                            <p>or sign in with others account?</p>
                          </div>
                          <div className="d-flex justify-content-center">
                            <ul className="list-group list-group-horizontal list-group-flush">
                              <li className="list-group-item border-0 bg-transparent">
                                <a href="#">
                                  <img
                                    src="../../assets/images/brands/01.png"
                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                    alt="fb"
                                  />
                                </a>
                              </li>
                              <li className="list-group-item border-0 bg-transparent">
                                <a href="#">
                                  <img
                                    src="../../assets/images/brands/02.png"
                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                    alt="gm"
                                  />
                                </a>
                              </li>
                              <li className="list-group-item border-0 bg-transparent">
                                <a href="#">
                                  <img
                                    src="../../assets/images/brands/03.png"
                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                    alt="im"
                                  />
                                </a>
                              </li>
                              <li className="list-group-item border-0 bg-transparent">
                                <a href="#">
                                  <img
                                    src="../../assets/images/brands/04.png"
                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                    alt="li"
                                  />
                                </a>
                              </li>
                            </ul>
                          </div> */}
                        </form>
                        <div className="new-account mt-3 text-center">
                          <p>
                            Already have an Account{" "}
                            <Link className="text-primary" to="/">
                              Login
                            </Link>
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Register;
