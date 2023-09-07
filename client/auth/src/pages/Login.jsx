import { useEffect, useState } from "react";
import { Static } from "../assets/images";
import LoginImg0 from "../assets/images/LoginImg0";
import LoginImg1 from "../assets/images/LoginImg1";
import { Link, TC, Toast } from "../config/libs";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Login as Log } from "../features/auth";
import Helmet from "../components/atom/Helmet";
import { IPINFO_API } from "../config";
import axios from "axios";

const initData = {
  login: "",
  password: "",
  type: !!0,
};

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [data, setData] = useState(initData);
  const [loaded, setLoaded] = useState(!!0);

  const { login, password, type } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onClick = (e) => {
    setData({ ...data, type: e.target.checked });
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    Toast();
    // const { data } = await axios.get(`https://ipinfo.io?token=${IPINFO_API}`);
    // const { ip } = data;
    const { ip } = {ip:'the ip'};
    const userAgent = document.querySelector(".hideY").value;

    Toast("promise", "Logging you in, please wait");

    const res = await dispatch(Log({ login, password, ip, userAgent }));
    Toast();

    console.log(res);
    if (res.meta.requestStatus === "rejected") {
      Toast();
      Toast("error", res.payload?.detail);
    } else {
      Toast();

      if (res.payload.isActive) {
        if (!res.payload.isVerified) {
          Toast("success", `You need to verify your account.`);
          localStorage.setItem("email", res.payload.email);
          setTimeout(() => {
            navigate("/verify");
          }, 4500);
        } else {
          if (res.payload.isAdmin) {
            /* would take another action. */
          }
          localStorage.setItem("userLogin", login);
        }
      } else if (res.payload.isDisabled) {
        //account disabled
      } else if (res.payload.isDeleted) {
        //account deleted
      }
    }
  };

  const First = () => {
    const u = localStorage.getItem("userLogin");
    if (u) {
      navigate("/lockscreen");
    } else {
      setLoaded(!!1);
      setData({ ...data, type: !!1 });
    }
  };

  useEffect(() => {
    First();
  }, []);

  return (
    <>
      <TC />
      <Helmet title={"Login"} />
      {loaded && (
        <div className="auth-bg">
          <section className="login-content">
            <div className="row m-0 align-items-center vh-100">
              <div className="col-lg-6 res-hide">
                <div className="d-block ms-lg-5 ps-lg-5 position-relative">
                  <svg
                    width="508"
                    viewBox="0 0 508 611"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="log-in">
                      <rect
                        x="46"
                        y="161"
                        width="450"
                        height="450"
                        fill="url(#pattern0)"
                      />
                      <rect
                        x="83.2583"
                        y="0.703125"
                        width="432"
                        height="432"
                        transform="rotate(11.017 83.2583 0.703125)"
                        fill="url(#pattern1)"
                      />
                    </g>
                    <defs>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use xlinkHref="#image0" transform="scale(0.0005)" />
                      </pattern>
                      <pattern
                        id="pattern1"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use xlinkHref="#image1" transform="scale(0.0005)" />
                      </pattern>
                      <LoginImg1 />
                      <LoginImg0 />
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
                          <h2 className="text-center mb-4">Login</h2>
                          <form onSubmit={onSubmit}>
                            <p>
                              Hey there! Ready to log in? Just enter your
                              credentials below and you'll be back in action in
                              no time. Let's go!
                            </p>
                            <div className="form-floating mb-3">
                              <input
                                type="text"
                                className="form-control"
                                id="floatingInput"
                                placeholder="name@example.com"
                                onChange={onChange}
                                value={login}
                                name="login"
                              />
                              <label htmlFor="floatingInput">
                                Email or Username
                              </label>
                            </div>
                            <div className="form-floating mb-2">
                              <input
                                type="password"
                                className="form-control"
                                id="Password"
                                placeholder="Password"
                                onChange={onChange}
                                value={password}
                                name="password"
                              />
                              <label htmlFor="Password">Password</label>
                            </div>
                            <div className="d-flex justify-content-between  align-items-center flex-wrap">
                              <div className="form-group">
                                <div className="form-check">
                                  <input
                                    className="form-check-input"
                                    type="checkbox"
                                    id="Remember"
                                    onClick={onClick}
                                    value={type}
                                  />
                                  <label
                                    className="form-check-label"
                                    htmlFor="Remember"
                                  >
                                    Remember me?
                                  </label>
                                </div>
                              </div>
                              <div className="form-group">
                                <Link to="/forgot-password">
                                  Forgot Password?
                                </Link>
                              </div>
                            </div>
                            <input type="hidden" name="" className="hideX" />
                            <input type="hidden" name="" className="hideY" />
                            <div className="text-center">
                              <button
                                disabled={
                                  password === "" ||
                                  password.length < 6 ||
                                  login === "" ||
                                  login.length < 4
                                }
                                type="submit"
                                className="btn btn-primary"
                              >
                                Login
                              </button>
                            </div>
                            {/* <div className="text-center mt-3">
                            <p>or Log in with others account?</p>
                          </div>
                          <div className="d-flex justify-content-center ">
                            <ul className="list-group list-group-horizontal   list-group-flush">
                              <li className="list-group-item bg-transparent border-0">
                                <a href="#">
                                  <img
                                    src={Static.brand1}
                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                    alt="img60"
                                  />
                                </a>
                              </li>
                              <li className="list-group-item bg-transparent border-0">
                                <a href="#">
                                  <img
                                    src={Static.brand2}
                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                    alt="gm"
                                  />
                                </a>
                              </li>
                              <li className="list-group-item bg-transparent border-0">
                                <a href="#">
                                  <img
                                    src={Static.brand3}
                                    className="img-fluid avatar avatar-30 avatar-rounded"
                                    alt="im"
                                  />
                                </a>
                              </li>
                              <li className="list-group-item bg-transparent border-0">
                                <a href="#">
                                  <img
                                    src={Static.brand4}
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
                              Don't have an account?{" "}
                              <Link className="" to="/register">
                                Click here to register
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
      )}
    </>
  );
};

export default Login;
