import { useState } from "react";
import { Static } from "../../assets/images";
import { Logo } from "../../assets/images/logo";
import Social from "../atom/Social";
import { Link } from "../../config/libs";

const Footer = () => {
  const [year] = useState(new Date().getFullYear());
  return (
    <>
      {/* <!-- ===============>> footer start here <<================= --> */}
      <footer className="footer brand-1">
        <div className="container">
          <div className="footer__wrapper">
            <div className="footer__top footer__top--style1">
              <div className="row gy-5 gx-4">
                <div className="col-md-6">
                  <div className="footer__about">
                    <Link to="/" className="footer__about-logo">
                      <img src={Logo.LogoDark} alt="Logo" />
                    </Link>
                    <p className="footer__about-moto ">
                      Welcome to our trading site! We offer the best, most
                      affordable services and features around. <b>Investment</b>
                      , <b>Trading</b>, <b>Mining</b>, <b>Loan</b>,
                      <b>Jackpot Games</b> today to get started.
                    </p>
                    <div className="footer__app">
                      <div className="footer__app-item footer__app-item--apple">
                        <div className="footer__app-inner">
                          <div className="footer__app-thumb">
                            <a
                              href="https://www.apple.com/app-store/"
                              target="_blank"
                              className="stretched-link"
                            >
                              <img src={Static.apple} alt="apple-icon" />
                            </a>
                          </div>
                          <div className="footer__app-content">
                            <span>Coming Soon on</span>
                            <p className="mb-0">App Store</p>
                          </div>
                        </div>
                      </div>
                      <div className="footer__app-item footer__app-item--playstore">
                        <div className="footer__app-inner">
                          <div className="footer__app-thumb">
                            <a
                              href="https://play.google.com/store"
                              target="_blank"
                              className="stretched-link"
                            >
                              <img src={Static.play} alt="playstore-icon" />
                            </a>
                          </div>
                          <div className="footer__app-content">
                            <span>COMING SOON ON</span>
                            <p className="mb-0">Google Play</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>Quick links</h6>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item">
                          <a href="about.html">Blog</a>
                        </li>
                        <li className="footer__linklist-item">
                          <a href="team.html">Careers</a>
                        </li>
                        <li className="footer__linklist-item">
                          <a href="service.html">Testimonials</a>
                        </li>
                        <li className="footer__linklist-item">
                          <a href="#">Profit Calculator</a>
                        </li>
                        <li className="footer__linklist-item">
                          <a href="service.html">Status</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-4 col-6">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>Support</h6>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item">
                          <a href="#">Terms & Conditions</a>
                        </li>
                        <li className="footer__linklist-item">
                          <a href="#">Privacy Policy</a>
                        </li>
                        <li className="footer__linklist-item">
                          <a href="#">Disclaimer</a>
                        </li>
                        <li className="footer__linklist-item">
                          <a href="#">Knowledge Base</a>
                        </li>
                        <li className="footer__linklist-item">
                          <a href="#">Support Center</a>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
                <div className="col-md-2 col-sm-4">
                  <div className="footer__links">
                    <div className="footer__links-tittle">
                      <h6>Info</h6>
                    </div>
                    <div className="footer__links-content">
                      <ul className="footer__linklist">
                        <li className="footer__linklist-item">
                          <a href="mailto:">help@safewayfx.com</a>
                        </li>
                        <li className="footer__linklist-item">
                          <a href="mailto:">support@safewayfx.com</a>
                        </li>
                        <li className="footer__linklist-item">
                          <a href="text:">+1 (323) 123 4567</a>
                        </li>
                        {/* <li className="footer__linklist-item">
                          <a href="#"></a>
                        </li>
                        <li className="footer__linklist-item">
                          <a href="#"></a>
                        </li> */}
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="footer__bottom">
              <div className="footer__end">
                <div className="footer__end-copyright">
                  <p className=" mb-0">
                    © {year} All Rights Reserved
                    <a
                      href="https://themeforest.net/user/thetork/portfolio"
                      target="_blank"
                    >
                      {" "}
                      The SafewayFX Networks
                    </a>
                  </p>
                </div>
                <Social style={'style22'} />
              </div>
            </div>
          </div>
        </div>
        <div className="footer__shape">
          <span className="footer__shape-item footer__shape-item--1">
            <img src={Static.footer1} alt="shape icon" />
          </span>
          <span className="footer__shape-item footer__shape-item--2">
            <span></span>
          </span>
        </div>
      </footer>
      {/* <!-- ===============>> footer end here <<================= --> */}
    </>
  );
};

export default Footer;
