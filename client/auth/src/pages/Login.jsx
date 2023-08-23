import { Static } from "../assets/images";
import LoginImg0 from "../assets/images/LoginImg0";
import LoginImg1 from "../assets/images/LoginImg1";
import { Link } from "../config/libs"

const Login = () => {
  return (
    <>
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
                        <form>
                          <p>
                            Hey there! Ready to log in? Just enter your credentials below and you'll be back in action in
                            no time. Let's go!
                          </p>
                          <div className="form-floating mb-3">
                            <input
                              type="text"
                              className="form-control"
                              id="floatingInput"
                              placeholder="name@example.com"
                            />
                            <label htmlFor="floatingInput">Email or Username</label>
                          </div>
                          <div className="form-floating mb-2">
                            <input
                              type="password"
                              className="form-control"
                              id="Password"
                              placeholder="Password"
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
                          <div className="text-center">
                            <button type="button" className="btn btn-primary">
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
    </>
  );
};

export default Login;
