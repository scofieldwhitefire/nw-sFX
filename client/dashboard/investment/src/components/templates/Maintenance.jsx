import MainImg0 from "../../assets/images/MainImg0";
import MainImg1 from "../../assets/images/MainImg1";
import MainImg2 from "../../assets/images/MainImg2";

const Maintenance = ({ fullPage = !!0 }) => {
  return (
    <>
      <div class={`${fullPage && "wrapper"}`}>
        <div class={`${fullPage && "container-fluid"} p-0`}>
          <div class={`${fullPage && "iq-maintenance"} text-center`}>
            <div class="maintenance-bottom maintenance-img pb-0">
              <svg
                width="900"
                viewBox="0 0 1337 636"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
              >
                <g id="Maintenance">
                  <rect
                    x="45.2969"
                    y="160.297"
                    width="450"
                    height="450"
                    fill="url(#pattern0)"
                  />
                  <rect
                    x="82.5557"
                    width="432"
                    height="432"
                    transform="rotate(11.017 82.5557 0)"
                    fill="url(#pattern1)"
                  />
                  <rect
                    x="780"
                    y="77"
                    width="557"
                    height="559"
                    fill="url(#pattern2)"
                  />
                </g>
                <defs>
                  <pattern
                    id="pattern0"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlinkHref="#image0" transform="scale(0.0005)" />
                  </pattern>
                  <pattern
                    id="pattern1"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use xlinkHref="#image1" transform="scale(0.0005)" />
                  </pattern>
                  <pattern
                    id="pattern2"
                    patternContentUnits="objectBoundingBox"
                    width="1"
                    height="1"
                  >
                    <use
                      xlinkHref="#image2"
                      transform="translate(-0.00179533) scale(0.000501795)"
                    />
                  </pattern>
                  <MainImg0 />
                  <MainImg1 />
                  <MainImg2 />
                </defs>
              </svg>
              <div class="">
                <div class="bottom-text general-zindex">
                  <h1 class="mb-2">
                    {fullPage
                      ? "Hang on! We are running some maintenance."
                      : "This page is under maintainance."}
                  </h1>
                  <p>
                    {fullPage
                      ? "It wouldn't take long till we get the error fixed. We would gp live in:"
                      : "Check back soon"}
                  </p>
                  {fullPage && (
                    <>
                      <ul
                        class="countdown d-flex justify-content-center align-items-center list-inline"
                        data-date="Feb 02 2022 20:20:22"
                      >
                        <li>
                          <span data-days>0</span>Days
                        </li>
                        <li>
                          <span data-hours>0</span>Hours
                        </li>
                        <li>
                          <span data-minutes>0</span>Minutes
                        </li>
                        <li>
                          <span data-seconds>0</span>Seconds
                        </li>
                      </ul>
                      <div class="w-50 maintainance-search">
                        <div class="form-group input-group">
                          <input
                            type="text"
                            class="form-control maintain"
                            placeholder="Enter your mail"
                          />
                          <a href="#" class="btn btn-primary ms-2">
                            Notify Me
                          </a>
                        </div>
                      </div>
                    </>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Maintenance;
