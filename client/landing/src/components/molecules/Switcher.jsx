import { useEffect } from "react";
import { Static } from "../../assets/images";

const Switcher = () => {
  const init = () => {
    // =================== light and dark start ================== //

    const moon = document.getElementById("btnSwitch");
    const icon = document.querySelector("#btnSwitch img");
    moon.addEventListener("click", () => {
      const theme = document.documentElement.getAttribute("data-theme");
      document.documentElement.setAttribute(
        "data-theme",
        theme === "dark" ? "light" : "dark"
      );
      if (theme === "light") {
        icon.src = "assets/icon/sun.svg";
        moon.style.backgroundColor = "white";
      } else {
        icon.src = "assets/icon/moon.svg";
        moon.style.backgroundColor = "#00D094";
      }

      changeImage();
    });
    // =================== light and dark end ================== //

    // =================== Change image path start ================== //

    function changeImage() {
      var theme = document.querySelector("html").getAttribute("data-theme");
      if (theme === "dark") {
        var images = document.querySelectorAll("img.dark");

        for (var i = 0; i < images.length; i++) {
          var oldSrc = images[i].src;
          var oldIndex = oldSrc.lastIndexOf(".");
          var baseName = oldSrc.slice(0, oldIndex);
          var extension = oldSrc.slice(oldIndex);
          var newSrc = baseName + "-dark" + extension;
          images[i].src = newSrc;
        }
      } else {
        var images = document.querySelectorAll("img.dark");

        for (var i = 0; i < images.length; i++) {
          var oldSrc = images[i].src;
          var newSrc = oldSrc.replace("-dark.", ".");
          images[i].src = newSrc;
        }
      }
    }

    changeImage();

    // =================== Change image path end ================== //
  }

  useEffect(() => {
    init()
  }, [])
  return (
    <>
      {/* <!-- ===============>> light&dark switch start here <<================= --> */}
      <div className="lightdark-switch">
        <span className="dark-btn" id="btnSwitch">
          <img
            src={Static.Moon}
            alt="light-dark-switchbtn"
            className="swtich-icon"
          />
        </span>
      </div>
      {/* <!-- ===============>> light&dark switch start here <<================= --> */}
    </>
  );
};

export default Switcher;
