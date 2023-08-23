import { Logo } from "../../assets/images/logo";
import { Link } from "../../config/libs";

const Nav = ({ header }) => {
  return (
    <>
      {/* <!-- ===============>> Header section start here <<================= --> */}
      <header className={`header-section ${header}`}>
        <div className="header-bottom">
          <div className="container">
            <div className="header-wrapper">
              <div className="logo">
                <Link to="/">
                  <img className="dark" src={Logo.LogoLight} alt="logo" />
                </Link>
              </div>
              <div className="menu-area">
                <ul className="menu menu--style1">
                  <li>
                    <Link to="#0">Services </Link>
                    <ul className="submenu">
                      <li>
                        <Link to="/investment">Investment</Link>
                      </li>
                      <li>
                        <Link to="/loan">Loan</Link>
                      </li>
                      <li>
                        <Link to="/mining">Mining</Link>
                      </li>
                      <li>
                        <Link to="/trading">Trading</Link>
                      </li>
                      <li>
                        <Link to="/jackpot">Jackpot</Link>
                      </li>
                    </ul>
                  </li>
                  {/* <li>
                    <Link to="#0">Pricing </Link>
                  </li> */}
                  <li>
                    <Link to="/faqs">FAQs</Link>
                  </li>
                  <li>
                    <Link to="/calculator">Calculator</Link>
                  </li>
                  <li>
                    <Link to="/about">About</Link>
                  </li>
                  <li>
                    <Link to="/contact-us">Contact Us</Link>
                  </li>
                </ul>
              </div>
              <div className="header-action">
                <div className="menu-area">
                  <div className="header-btn">
                    <Link to="signup.html" className="sfx-btn sfx-btn--2">
                      <span>Login</span>
                    </Link>
                    <Link
                      to="signup.html"
                      className="sfx-btn sfx-btn--border sfx-btn--primary"
                    >
                      <span>Register</span>
                    </Link>
                  </div>
                  <div className="header-btn"></div>

                  {/* <!-- toggle icons --> */}
                  <div className="header-bar d-lg-none header-bar--style1">
                    <span></span>
                    <span></span>
                    <span></span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      {/* <!-- ===============>> Header section end here <<================= --> */}
    </>
  );
};

export default Nav;
