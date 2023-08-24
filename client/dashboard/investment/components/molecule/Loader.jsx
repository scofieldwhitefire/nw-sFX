import { useEffect } from "react";

const Loader = () => {
  const init = () => {
    /*---------------------------------------------------------------------
              LoaderInit
    -----------------------------------------------------------------------*/

    const loaderInit = () => {
      const loader = document.querySelector(".loader");
      setTimeout(() => {
        loader.classList.add("animate__animated", "animate__fadeOut");
        setTimeout(() => {
          loader.classList.add("d-none");
        }, 500);
      }, 500);
    };

    loaderInit();
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {/* <!-- loader START --> */}
      <div id="loading">
        <div className="loader simple-loader">
          <div className="loader-body"></div>
        </div>
      </div>
      {/* <!-- loader END --> */}
    </>
  );
};

export default Loader;
