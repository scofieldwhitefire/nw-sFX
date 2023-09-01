import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import Preloader from "../../components/molecules/Preloader";
import Switcher from "../../components/molecules/Switcher";
import Nav from "../../components/organism/Nav";
import Footer from "../../components/organism/Footer";
import GoUp from "../../components/molecules/GoUp";
import Helmet from "../../components/atom/Helmet";
import { Static } from "../../assets/images";
import { Link } from "../../config/libs";

const js = [
  { path: "js", file: "bootstrap.bundle.min.js" },
  { path: "js", file: "all.min.js" },
  { path: "js", file: "swiper-bundle.min.js" },
  { path: "js", file: "aos.js" },
  { path: "js", file: "fslightbox.js" },
  { path: "js", file: "purecounter_vanilla.js" },
  { path: "js", file: "custom.js" },
  { path: "js", file: "toTop.js" },
];

const E404 = () => {
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
      {/* <Preloader /> */}
      {/* <Switcher /> */}
      <Nav header={"bg-color-3"} />
      <Helmet title={"Page Not Found!"} />
      {/* <!-- ================> 404 section start here <================== --> */}
      <div className="error padding-top padding-bottom sec-bg-color2">
        <div className="container">
          <div className="error__wrapper">
            <div
              className="error__inner"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="error__thumb text-center">
                <img src={Static.e404} alt="E-404 image" />
              </div>
              <div className="error__content text-center">
                <h2>
                  <span>ooops!</span> page not found
                </h2>
                <p>
                  Oops! It looks like you're lost. The page you were looking for
                  couldn't be found. Don't worry, it happens to the best of us.
                </p>
                <Link
                  to="/"
                  reloadDocument
                  className="sfx-btn sfx-btn--border sfx-btn--primary"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ================> 404 section end here <================== --> */}
      <Footer />
      <GoUp />
    </>
  );
};

export default E404;
