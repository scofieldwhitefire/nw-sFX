import { BellIconSVG, EnvelopIconSVG } from "../atom/icons";

const Nav = () => {
  return (
    <>
      <div className="position-relative">
        {/* <!--Nav Start--> */}
        <nav className="nav navbar navbar-expand-lg navbar-light iq-navbar border-bottom pb-lg-3 pt-lg-3">
          <div className="container-fluid navbar-inner">
            <a href="index.html" className="navbar-brand"></a>
            <div
              className="sidebar-toggle"
              data-toggle="sidebar"
              data-active="true"
            >
              <i className="icon">
                <svg width="20px" height="20px" viewBox="0 0 24 24">
                  <path
                    fill="currentColor"
                    d="M4,11V13H16L10.5,18.5L11.92,19.92L19.84,12L11.92,4.08L10.5,5.5L16,11H4Z"
                  />
                </svg>
              </i>
            </div>
            <h4 className="title">Dashboard</h4>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon">
                <span className="navbar-toggler-bar bar1 mt-2"></span>
                <span className="navbar-toggler-bar bar2"></span>
                <span className="navbar-toggler-bar bar3"></span>
              </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav ms-auto navbar-list mb-2 mb-lg-0 align-items-center">
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link"
                    id="notification-drop"
                    data-bs-toggle="dropdown"
                  >
                    <BellIconSVG />
                    <span className="bg-danger dots"></span>
                  </a>
                  <div
                    className="sub-drop dropdown-menu iq-noti dropdown-menu-end p-0"
                    aria-labelledby="notification-drop"
                  >
                    <div className="card shadow-none m-0">
                      <div className="card-header d-flex justify-content-between">
                        <div className="header-title">
                          <p className="fs-6">New notifications.</p>
                        </div>
                        <div className="header-title">
                          <p className="fs-6">Mark all</p>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <a href="#" className="iq-sub-card">
                          <div className="d-flex">
                            <img
                              src="../assets/images/utilities/05.png"
                              className="img-fluid avatar avatar-30 avatar-rounded"
                              alt="img51"
                            />
                            <div className="ms-3 w-100">
                              <h6 className="mb-0">
                                Successful transaction of 0.01 BTC
                              </h6>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">15 mins ago</p>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="d-flex align-items-center">
                            <div className="">
                              <img
                                src="../assets/images/utilities/03.png"
                                className="img-fluid avatar avatar-30 avatar-rounded"
                                alt="img52"
                              />
                            </div>
                            <div className="ms-3 w-100">
                              <h6 className="mb-0">4 of Pending Transactions!</h6>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">30 mins ago</p>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="d-flex align-items-center">
                            <img
                              src="../assets/images/utilities/04.png"
                              className="img-fluid avatar avatar-30 avatar-rounded"
                              alt="img53"
                            />
                            <div className="ms-3 w-100">
                              <h6 className="mb-0">Cancelled order of 2000 ICO</h6>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">55 mins ago</p>
                              </div>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="d-flex align-items-center">
                            <img
                              src="../assets/images/utilities/05.png"
                              className="img-fluid avatar avatar-30 avatar-rounded"
                              alt="img54"
                            />
                            <div className="w-100 ms-3">
                              <h6 className="mb-0">
                                Great speed notify of 1.34 LTC
                              </h6>
                              <div className="d-flex justify-content-between align-items-center">
                                <p className="mb-0">14 Mar</p>
                              </div>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link"
                    id="mail-drop"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <EnvelopIconSVG />
                    <span className="bg-primary count-mail"></span>
                  </a>
                  <div
                    className="sub-drop dropdown-menu dropdown-menu-end p-0"
                    aria-labelledby="mail-drop"
                  >
                    <div className="card shadow-none m-0">
                      <div className="card-header d-flex justify-content-between py-3">
                        <div className="header-title">
                          <p className="mb-0 text-white">Our Latest News</p>
                        </div>
                      </div>
                      <div className="card-body p-0">
                        <a href="#" className="iq-sub-card">
                          <div className="d-flex">
                            <div className="">
                              <img
                                src="../assets/images/coins/02.png"
                                className="img-fluid avatar avatar-50 avatar-rounded"
                                alt="img55"
                              />
                            </div>
                            <div className="w-100 ms-3">
                              <h6 className="mb-0">Bitcoin</h6>
                              <small className="float-left font-size-12">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="d-flex">
                            <div className="">
                              <img
                                src="../assets/images/coins/03.png"
                                className="img-fluid avatar avatar-50 avatar-rounded"
                                alt="img56"
                              />
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0">Ethereum</h6>
                              <small className="float-left font-size-12">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </small>
                            </div>
                          </div>
                        </a>
                        <a href="#" className="iq-sub-card">
                          <div className="d-flex">
                            <div className="">
                              <img
                                src="../assets/images/coins/06.png"
                                className="img-fluid avatar avatar-50 avatar-rounded"
                                alt="img57"
                              />
                            </div>
                            <div className="ms-3">
                              <h6 className="mb-0">Litecoin</h6>
                              <small className="float-left font-size-12">
                                Lorem Ipsum is simply dummy text of the printing
                                and typesetting industry.
                              </small>
                            </div>
                          </div>
                        </a>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link py-0 d-flex align-items-center"
                    href="#"
                    id="navbarDropdown"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    <img
                      src="../assets/images/avatars/01.png"
                      alt="User-Profile"
                      className="img-fluid avatar avatar-50 avatar-rounded"
                    />
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="navbarDropdown"
                  >
                    <li className="border-0">
                      <a className="dropdown-item" href="app/user-profile.html">
                        Profile
                      </a>
                    </li>
                    <li className="border-0">
                      <a
                        className="dropdown-item"
                        href="app/user-privacy-setting.html"
                      >
                        Privacy Setting
                      </a>
                    </li>
                    <li className="border-0">
                      <hr className="m-0 dropdown-divider" />
                    </li>
                    <li className="border-0">
                      <a className="dropdown-item" href="auth/sign-in.html">
                        Logout
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        {/* <!--Nav End--> */}
      </div>
    </>
  );
};

export default Nav;
