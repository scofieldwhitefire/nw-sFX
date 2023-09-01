import { Static } from "../../assets/images";
import { LOGIN_URL } from "../../config";
import { AI, Image, Link } from "../../config/libs";
import Social from "../atom/Social";

const Hero = () => {
  return (
    <>
      {/* <!-- ===============>> Banner section start here <<================= --> */}
      <section className="banner banner--style1">
        <div className="banner__bg">
          <div className="banner__bg-element">
            <AI
              cldImg={Image("bg-1")}
              alt="section-bg-element"
              className="dark d-none d-lg-block"
            />
            <span className="bg-color d-lg-none"></span>
          </div>
        </div>
        <div className="container">
          <div className="banner__wrapper">
            <div className="row gy-5 gx-4">
              <div className="col-lg-6 col-md-7">
                <div
                  className="banner__content"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="banner__content-coin">
                    <AI cldImg={Image("3")} alt="coin icon" />
                  </div>
                  <h1 className="banner__content-heading">
                    Invest your money with <span>higher return</span>
                  </h1>
                  <p className="banner__content-moto">
                    Anyone can invest money with different currency to increase
                    their earnings with the help of <i>SafewayFX</i> expert's.
                  </p>
                  <div className="banner__btn-group btn-group">
                    <Link
                      to={LOGIN_URL}
                      className="sfx-btn sfx-btn--primary sfx-btn--arrow"
                    >
                      Get Started
                      <span>
                        <i className="fa-solid fa-arrow-right"></i>
                      </span>{" "}
                    </Link>

                    <a
                      href="https://www.youtube.com/watch?v=MHhIzIgFgJo&amp;ab_channel=NoCopyrightFootages"
                      className="sfx-btn sfx-btn--outline22"
                      data-fslightbox
                    >
                      <span className="style1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="24"
                          height="24"
                          viewBox="0 0 24 24"
                          fill="none"
                        >
                          <g clipPath="url(#clip0_1397_814)">
                            <path
                              d="M10.5547 7.03647C9.89015 6.59343 9 7.06982 9 7.86852V16.1315C9 16.9302 9.89015 17.4066 10.5547 16.9635L16.7519 12.8321C17.3457 12.4362 17.3457 11.5638 16.7519 11.1679L10.5547 7.03647Z"
                              stroke="#0A4FD5"
                              strokeWidth="1.5"
                              strokeLinecap="round"
                              strokeLinejoin="round"
                            />
                          </g>
                          <rect
                            x="-0.75"
                            y="0.75"
                            width="22.5"
                            height="22.5"
                            rx="11.25"
                            transform="matrix(-1 0 0 1 22.5 0)"
                            stroke="#0A4FD5"
                            strokeWidth="1.5"
                          />
                          <defs>
                            <clipPath id="clip0_1397_814">
                              <rect width="24" height="24" fill="white" />
                            </clipPath>
                          </defs>
                        </svg>
                      </span>{" "}
                      Watch Video
                    </a>
                  </div>
                  <div className="banner__content-social">
                    <p>Follow Us</p>
                    <Social style={"style1"} />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-5">
                <div
                  className="banner__thumb"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <AI cldImg={Image("1")} alt="banner-thumb" className="dark" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="banner__shape">
          <span className="banner__shape-item banner__shape-item--1">
            <img src={Static.img4} alt="shape icon" />
          </span>
        </div>
      </section>
      {/* <!-- ===============>> Banner section end here <<================= --> */}
    </>
  );
};

export default Hero;
