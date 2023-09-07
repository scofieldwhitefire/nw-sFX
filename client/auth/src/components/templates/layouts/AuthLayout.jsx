import { Outlet, useLocation } from "react-router-dom";
import Loader from "../../molecule/Loader";

import "../../../assets/css/App.css";
import { useEffect } from "react";

const js = [
  { path: "js", file: "express-useragent.min.js" },
  { path: "js", file: "login.js" },
];

const AuthLayout = () => {
  const location = useLocation();

  const AddScript = (x, y) => {
    if (!document.querySelector(`[src="/assets/${x}/${y}"]`)) {
      const script = document.createElement("script");
      script.src = `/assets/${x}/${y}`;
      script.async = !1;
      // document.body.appendChild(script);
      document.getElementById("scripts").appendChild(script);
    }
  };

  useEffect(() => {
    if (location.pathname === "/" || location.pathname === "") {
      document.getElementById("scripts").innerHTML = "";
      for (let i = 0; i < js.length; i++) {
        AddScript(js[i].path, js[i].file);
      }
    }
  }, [location.pathname]);
  return (
    <>
      <Loader />
      <div>
        <div className="wrapper">
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default AuthLayout;
