import { Outlet, useLocation } from "react-router-dom";
import Loader from "../../molecule/Loader";

import "../../../assets/css/App.css";
import SideBar from "../../organism/SideBar";
import { useEffect } from "react";
import Nav from "../../organism/Nav";
import Footer from "../../organism/Footer";

const js = [
  { path: "js", file: "libs.min.js" },
  { path: "js", file: "external.min.js" },
  { path: "js", file: "widgetcharts.js" },
  { path: "js", file: "gsap.min.js" },
  { path: "js", file: "ScrollTrigger.min.js" },
  { path: "js", file: "fslightbox.js" },
  { path: "js", file: "vector-chart.js" },
  { path: "js", file: "dashboard.js" },
  { path: "js", file: "safewayfx.js" },
  { path: "js", file: "apexcharts.js" },
  { path: "js", file: "gsap.js" },
];

const DashboardLayout = () => {
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
    document.getElementById("scripts").innerHTML = "";
    for (let i = 0; i < js.length; i++) {
      AddScript(js[i].path, js[i].file);
    }
  }, [location.pathname]);

  return (
    <>
      <Loader />
      <SideBar />
      <main className="main-content">
        <Nav />
        <div className="container-fluid content-inner pb-0">
          <Outlet />
        </div>
        <Footer />
      </main>
    </>
  );
};

export default DashboardLayout;
