import { Outlet, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Preloader from "../../molecules/Preloader";
import Switcher from "../../molecules/Switcher";
import Footer from "../../organism/Footer";
import GoUp from "../../molecules/GoUp";
import Nav from "../../organism/Nav";

const js = [
  { path: "js", file: "bootstrap.bundle.min.js" },
  { path: "js", file: "all.min.js" },
  { path: "js", file: "swiper-bundle.min.js" },
  { path: "js", file: "aos.js" },
  { path: "js", file: "fslightbox.js" },
  { path: "js", file: "purecounter_vanilla.js" },
  { path: "js", file: "custom.js" },
];

const HomeLayout = () => {
  const [header, setHeader] = useState("bg-color-3");
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

  
  const init = () => {
    location.pathname === "/" && setHeader("header-section--style2");
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    document.getElementById("scripts").innerHTML = "";
    for (let i = 0; i < js.length; i++) {
      AddScript(js[i].path, js[i].file);
    }
  }, [location.pathname]);

  return (
    <>
      <Preloader />
      <Switcher />
      <Nav header={header} />
      <Outlet />
      <Footer />
      <GoUp />
    </>
  );
};

export default HomeLayout;
