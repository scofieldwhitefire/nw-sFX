import RegImg0 from "../assets/images/RegImg0";
import RegImg1 from "../assets/images/RegImg1";
import RegImg2 from "../assets/images/RegImg2";
import RegImg3 from "../assets/images/RegImg3";
import RegImg4 from "../assets/images/RegImg4";
import RegImg5 from "../assets/images/RegImg5";
import { Link } from "../config/libs";

const Register = () => {
  return (
    <>
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
                        <form>
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
                                  placeholder="username"
                                />
                                <label for="username">Username</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-3">
                                <input
                                  type="email"
                                  className="form-control"
                                  id="floatingInput"
                                  placeholder="name@example.com"
                                />
                                <label for="floatingInput">Email</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6">
                              <div className="form-floating">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastName"
                                  placeholder="firstName"
                                />
                                <label for="lastName">First Name</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="lastName2"
                                  placeholder="lastName"
                                />
                                <label for="lastName">Last Name</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-3">
                                <select
                                  className="form-control"
                                  id="floatingInput"
                                  placeholder="name@example.com"
                                >
                                  <option disabled>Select Gender</option>
                                  <option>Male</option>
                                  <option>Female</option>
                                </select>
                                <label for="floatingInput">Gender</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-3">
                                <input
                                  type="text"
                                  className="form-control"
                                  id="phoneno"
                                  placeholder="phoneno"
                                />
                                <label for="phoneno">Phone no</label>
                              </div>
                            </div>
                          </div>
                          <div className="row">
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-2">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="Password"
                                  placeholder="Password"
                                />
                                <label for="Password">Password</label>
                              </div>
                            </div>
                            <div className="col-md-6 mb-2">
                              <div className="form-floating mb-2">
                                <input
                                  type="password"
                                  className="form-control"
                                  id="confirmpassword"
                                  placeholder="confirmpassword"
                                />
                                <label for="confirmpassword">
                                  Confirm-password
                                </label>
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
                            <label className="form-check-label" for="agree">
                              By registering you agree with SafewayFX{" "}
                              <Link to="">Terms</Link> &{" "}
                              <Link to="">Policy</Link>.
                            </label>
                          </div>
                          <div className="text-center">
                            <button type="button" className="btn btn-primary">
                              Register
                            </button>
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
