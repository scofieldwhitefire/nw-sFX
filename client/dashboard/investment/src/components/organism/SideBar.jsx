import { useState } from "react";
import { Menus } from "../../const/menu";
import { Link, NavLink } from "../../config/libs";
import { CircleIconSVG, DropDownIconSVG, LeftIconSVG } from "../atom/icons";

const SideBar = () => {
  const [menu] = useState(Menus);
  return (
    <>
      <aside className="sidebar sidebar-default navs-rounded">
        <div className="sidebar-header d-flex align-items-center justify-content-start">
          <Link to="/" className="navbar-brand dis-none align-items-center">
            <img
              src="https://templates.iqonic.design/coinex-dashboard/dashboard/html/dist/assets/images/logo.svg"
              className="img-fluid"
              alt="logo"
            />
            {/* <h4 className="logo-title m-0">OINEX</h4> */}
          </Link>
          <div
            className="sidebar-toggle"
            data-toggle="sidebar"
            data-active="true"
          >
            <LeftIconSVG />
          </div>
        </div>
        <div className="sidebar-body p-0 data-scrollbar">
          <div className="navbar-collapse pe-3" id="sidebar">
            <ul className="navbar-nav iq-main-menu">
              {menu.map((x, i) =>
                x.hr ? (
                  <li key={`P${i}`}>
                    <hr className="hr-horizontal" />
                  </li>
                ) : (
                  <li key={`P${i}`} className="nav-item">
                    {!x.subMenu.hasSub ? (
                      <NavLink
                        className={`nav-link ${({ isActive }) =>
                          isActive ? "active" : ""}`}
                        aria-current="page"
                        to={x.link}
                      >
                        <x.icon />
                        <span className="item-name">{x.title}</span>
                      </NavLink>
                    ) : (
                      <>
                        <NavLink
                          className={`nav-link ${({ isActive }) =>
                            isActive ? "active" : ""}`}
                          data-bs-toggle="collapse"
                          to={x.link}
                          role="button"
                          aria-expanded="false"
                          aria-controls={`sidebar-${x.title.toLowerCase()}`}
                        >
                          <x.icon />
                          <span className="item-name">{x.title}</span>
                          <DropDownIconSVG />
                        </NavLink>
                        <ul
                          className="sub-nav collapse"
                          id={`sidebar-${x.title.toLowerCase()}`}
                          data-bs-parent="#sidebar"
                        >
                          {x.subMenu.menu.map((y, j) => (
                            <li key={`C${j}`} className="nav-item">
                              <NavLink
                                className={`nav-link ${({ isActive }) =>
                                  isActive ? "active" : ""}`}
                                to={`${x.link}${y.link}`}
                              >
                                <CircleIconSVG />
                                <i className="sidenav-mini-icon">
                                  {y.title.charAt(0)}
                                </i>
                                <span className="item-name">{y.title}</span>
                              </NavLink>
                            </li>
                          ))}
                        </ul>
                      </>
                    )}
                  </li>
                )
              )}
            </ul>
          </div>
          <div id="sidebar-footer" className="position-relative sidebar-footer">
            <div className="card mx-4">
              <div className="card-body">
                <div className="sidebarbottom-content">
                  <div className="image">
                    <img
                      src="../assets/images/coins/13.png"
                      alt="User-Profile"
                      className="img-fluid"
                    />
                  </div>
                  <p className="mb-0">Be more secure with Pro Feature</p>
                  <button type="button" className="btn btn-primary mt-3">
                    Upgrade Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </aside>
    </>
  );
};

export default SideBar;
