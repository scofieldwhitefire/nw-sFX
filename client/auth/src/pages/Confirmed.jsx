import { useState } from "react";
import ConImg from "../assets/images/ConImg";
import { useLocation } from 'react-router-dom'

const Confirmed = () => {
    const loaction = useLocation()
    const [path] = useState(location.pathname)
  return (
    <>
      <div className="auth-bg">
        <section className="vh-100">
          <div className="container h-100">
            <div className="row h-100 align-items-center">
              <div className="col-lg-6">
                <div className="row justify-content-center">
                  <div className="col-md-10">
                    <div className="card d-flex justify-content-center mb-0">
                      <div className="card-body">
                        <div className="auth-form">
                          <div className="text-center">
                            <span>
                              <svg
                                width="50"
                                height="50"
                                viewBox="0 0 86 91"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M44.4591 8.17875C44.5206 6.49608 43.205 5.07083 41.5222 5.12862C33.9539 5.3885 26.5686 7.64158 20.1257 11.6843C12.8201 16.2684 7.06402 22.9415 3.60569 30.8362C0.147358 38.731 -0.853289 47.4822 0.733814 55.9525C2.32092 64.4228 6.42237 72.2203 12.5051 78.3316C18.5877 84.4429 26.3703 88.5853 34.8413 90.2203C43.3122 91.8553 52.0797 90.9074 60.0041 87.4997C67.9285 84.0921 74.6433 78.3823 79.2758 71.1125C83.36 64.7031 85.6591 57.3425 85.9649 49.7873C86.0331 48.1031 84.6141 46.7777 82.9292 46.8293C81.2442 46.8809 79.9333 48.2907 79.8453 49.9742C79.5143 56.3048 77.5522 62.4618 74.1259 67.8387C70.1511 74.0764 64.3895 78.9756 57.5901 81.8995C50.7907 84.8234 43.2679 85.6368 35.9995 84.2339C28.7312 82.8309 22.0534 79.2766 16.8343 74.033C11.6151 68.7893 8.09591 62.0987 6.73412 54.8309C5.37233 47.5631 6.23092 40.0542 9.19829 33.2802C12.1657 26.5063 17.1046 20.7805 23.3731 16.8472C28.7786 13.4554 34.9573 11.5317 41.3 11.2396C42.9818 11.1621 44.3975 9.86122 44.4591 8.17875Z"
                                  fill="#FF971D"
                                />
                                <path
                                  d="M40.0116 54.5643L76.8682 18.1495C78.1776 16.8557 80.2719 16.8169 81.6283 18.0614C83.0867 19.3993 83.124 21.687 81.7099 23.0717L40.0116 63.9056L21.8367 46.082C20.6246 44.8933 20.615 42.9441 21.8153 41.7435C22.9745 40.5842 24.8423 40.5472 26.0464 41.6598L40.0116 54.5643Z"
                                  fill="#FF971D"
                                />
                              </svg>
                            </span>
                            <h2 className="mt-3">Success!</h2>
                            <p className="mt-3">
                              A mail has been send to your email@domain.com.
                              Please check for an email from
                              <b> SafewayFX </b> and click on the included link to{" "}
                              {path === "/verify"
                                ? "verify your account."
                                : "reset your password."}
                            </p>
                            <div className="d-inline-block mt-3">
                              <a
                                href="../index.html"
                                className="btn btn-primary"
                              >
                                Back to Home
                              </a>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-12 col-lg-6 res-hide">
                <div className="d-block ms-lg-5 ps-lg-5">
                  <svg
                    width="575"
                    viewBox="0 0 575 679"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    xmlnsXlink="http://www.w3.org/1999/xlink"
                  >
                    <g id="Email">
                      <g filter="url(#filter0_di)">
                        <path
                          d="M23 418.719L287.012 271.395L551.796 418.845L287.084 573.888L23 418.719Z"
                          fill="#202022"
                        />
                        <path
                          d="M287.084 573.309L24.0059 418.73L287.012 271.967L550.788 418.856L287.084 573.309Z"
                          stroke="black"
                        />
                      </g>
                      <rect
                        id="Tick-1"
                        x="144"
                        y="205.861"
                        width="300"
                        height="299.799"
                        fill="url(#pattern0)"
                      />
                      <rect
                        id="Tick-2"
                        x="43"
                        y="177.881"
                        width="81"
                        height="80.9457"
                        fill="url(#pattern1)"
                      />
                      <rect
                        id="Tick-3"
                        x="471"
                        y="141.904"
                        width="81"
                        height="80.9457"
                        fill="url(#pattern2)"
                      />
                      <rect
                        id="Tick-4"
                        x="222"
                        width="81"
                        height="80.9457"
                        fill="url(#pattern3)"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_di"
                        x="0"
                        y="263.395"
                        width="574.796"
                        height="348.494"
                        filterUnits="userSpaceOnUse"
                        colorInterpolationFilters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="15" />
                        <feGaussianBlur stdDeviation="11.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 0 0.266667 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow"
                          result="shape"
                        />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset />
                        <feGaussianBlur stdDeviation="12" />
                        <feComposite
                          in2="hardAlpha"
                          operator="arithmetic"
                          k2="-1"
                          k3="1"
                        />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 1 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="shape"
                          result="effect2_innerShadow"
                        />
                      </filter>
                      <pattern
                        id="pattern0"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0"
                          transform="translate(0 -0.000335155) scale(0.0005)"
                        />
                      </pattern>
                      <pattern
                        id="pattern1"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0"
                          transform="translate(0 -0.000335164) scale(0.0005)"
                        />
                      </pattern>
                      <pattern
                        id="pattern2"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0"
                          transform="translate(0 -0.000335164) scale(0.0005)"
                        />
                      </pattern>
                      <pattern
                        id="pattern3"
                        patternContentUnits="objectBoundingBox"
                        width="1"
                        height="1"
                      >
                        <use
                          xlinkHref="#image0"
                          transform="translate(0 -0.000335164) scale(0.0005)"
                        />
                      </pattern>
                      <ConImg />
                    </defs>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </>
  );
};

export default Confirmed;
