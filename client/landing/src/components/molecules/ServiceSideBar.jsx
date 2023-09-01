import { useState } from "react";
import { useLocation, useParams } from "react-router-dom";
import { Link } from "../../config/libs";
import Social from "../atom/Social";

const ServiceSideBar = ({ type = "services", func = null, p = null }) => {
  const location = useLocation();
  const params = useParams();
  const [path] = useState(location.pathname);
  const [id] = useState(params.id);

  return (
    <div className="col-lg-4 col-md-8  col-12">
      <div className="sidebar">
        <div className="row g-4">
          {/* <div className="col-12">
            <div
              className="sidebar__search"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <h6 className="mb-10">Search Here</h6>
              <div className="sidebar__search-body">
                <form className="" action="#">
                  <div className="input">
                    <input
                      type="text"
                      className="form-control"
                      placeholder="Search articles"
                    />
                    <button type="submit" className="search-btn">
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div> */}
          <div className="col-12">
            <div
              className="sidebar__categorie"
              data-aos="fade-up"
              data-aos-duration="1000"
            >
              <div className="sidebar__head">
                <h6>{type === "services" ? "Services" : "Categories"}</h6>
              </div>
              <div className="sidebar__categorie-body">
                <div className="sidebar__social-content">
                  {type === "services" ? (
                    <ul>
                      <li
                        className={`${path === "/investment" ? "active" : ""}`}
                      >
                        <Link to="/investment">Investment</Link>
                      </li>
                      <li className={`${path === "/loan" ? "active" : ""}`}>
                        <Link to="/loan">Loan</Link>
                      </li>
                      <li className={`${path === "/trading" ? "active" : ""}`}>
                        <Link to="/trading">Trading</Link>
                      </li>
                      <li className={`${path === "/mining" ? "active" : ""}`}>
                        <Link to="/mining">Mining</Link>
                      </li>
                      <li className={`${path === "/jackpot" ? "active" : ""}`}>
                        <Link to="/jackpot">Jackpot</Link>
                      </li>
                    </ul>
                  ) : (
                    <ul>
                      <li
                        onClick={() => func("General")}
                        className={`${p === "General" ? "active" : ""}`}
                        style={{ cursor: 'pointer'}}
                      >
                        <span>General FAQs</span>
                      </li>
                      <li
                        onClick={() => func("Investment")}
                        className={`${p === "Investment" ? "active" : ""}`}
                        style={{ cursor: 'pointer'}}
                      >
                        <span>Investment FAQs</span>
                      </li>
                      <li
                        onClick={() => func("Loan")}
                        className={`${p === "Loan" ? "active" : ""}`}
                        style={{ cursor: 'pointer'}}
                      >
                        <span>Loan FAQs</span>
                      </li>
                      <li
                        onClick={() => func("Trading")}
                        className={`${p === "Trading" ? "active" : ""}`}
                        style={{ cursor: 'pointer'}}
                      >
                        <span>Trading FAQs</span>
                      </li>
                      <li
                        onClick={() => func("Mining")}
                        className={`${p === "Mining" ? "active" : ""}`}
                        style={{ cursor: 'pointer'}}
                      >
                        <span>Mining FAQs</span>
                      </li>
                      <li
                        onClick={() => func("Jackpot")}
                        className={`${p === "Jackpot" ? "active" : ""}`}
                        style={{ cursor: 'pointer'}}
                      >
                        <span>Jackpot FAQs</span>
                      </li>
                    </ul>
                  )}
                </div>
              </div>
            </div>
          </div>
          <div className="col-12">
            <div
              className="sidebar__social"
              data-aos="fade-up"
              data-aos-duration="1200"
            >
              <div className="sidebar__head">
                <h6>Social Links</h6>
              </div>
              <div className="sidebar__social-body">
                <div className="sidebar__social-content">
                  <Social style={"style2"} others="mt-25" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceSideBar;
