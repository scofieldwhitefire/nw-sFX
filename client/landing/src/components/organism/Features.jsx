import { Static } from "../../assets/images";

const Features = () => {
  return (
    <>
      {/* <!-- ===============>> feature section start here <<================= --> */}
      <section className="feature feature--style1 padding-bottom padding-top bg-color">
        <div className="container">
          <div className="feature__wrapper">
            <div className="row g-5 align-items-center justify-content-between">
              <div className="col-md-6 col-lg-5">
                <div
                  className="feature__content"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <div className="feature__content-inner">
                    <div className="section-header">
                      <h2 className="mb-15 mt-minus-5">
                        <span>services </span>We offer
                      </h2>
                      <p className="mb-0">
                        Unlock the full potential of our product with our
                        amazing features and top-notch.
                      </p>
                    </div>

                    <div className="feature__nav">
                      <div
                        className="nav nav--feature flex-column nav-pills"
                        id="feat-pills-tab"
                        role="tablist"
                        aria-orientation="vertical"
                      >
                        <div
                          className="nav-link active"
                          id="feat-pills-three-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#feat-pills-three"
                          role="tab"
                          aria-controls="feat-pills-three"
                          aria-selected="false"
                        >
                          <div className="feature__item">
                            <div className="feature__item-inner">
                              <div className="feature__item-content">
                                <h6>
                                  investment made more flexible and easy for all
                                  investors
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="feat-pills-four-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#feat-pills-four"
                          role="tab"
                          aria-controls="feat-pills-four"
                          aria-selected="false"
                        >
                          <div className="feature__item">
                            <div className="feature__item-inner">
                              <div className="feature__item-content">
                                <h6>
                                  trade with little or no experience and earn
                                  profit
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="feat-pills-one-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#feat-pills-one"
                          role="tab"
                          aria-controls="feat-pills-one"
                          aria-selected="true"
                        >
                          <div className="feature__item">
                            <div className="feature__item-inner">
                              <div className="feature__item-content">
                                <h6>
                                  Lending money for investment of your new
                                  projects
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                        <div
                          className="nav-link"
                          id="feat-pills-two-tab"
                          data-bs-toggle="pill"
                          data-bs-target="#feat-pills-two"
                          role="tab"
                          aria-controls="feat-pills-two"
                          aria-selected="false"
                        >
                          <div className="feature__item">
                            <div className="feature__item-inner">
                              <div className="feature__item-content">
                                <h6>
                                  mining selected crypto currency, with
                                  sophisticated hardwares
                                </h6>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-6">
                <div
                  className="feature__thumb pt-5 pt-md-0"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <div className="feature__thumb-inner">
                    <div className="tab-content" id="feat-pills-tabContent">
                      <div
                        className="tab-pane fade show active"
                        id="feat-pills-one"
                        role="tabpanel"
                        aria-labelledby="feat-pills-one-tab"
                        tabIndex="0"
                      >
                        <div className="feature__image floating-content">
                          <img src={Static.feature2} alt="Feature image" />
                          <div
                            className="floating-content__top-right floating-content__top-right--style2"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                            <div className="floating-content__item floating-content__item--style2 text-center">
                              <img src={Static.feature5} alt="rating" />
                              <p className="style2">Interest Rate For Loan</p>
                            </div>
                          </div>
                          <div
                            className="floating-content__bottom-left floating-content__bottom-left--style2"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                            <div className="floating-content__item floating-content__item--style3  d-flex align-items-center">
                              <h3 className="style2">
                                $
                                <span
                                  className="purecounter"
                                  data-purecounter-start="0"
                                  data-purecounter-end="50"
                                >
                                  50
                                </span>
                                M
                              </h3>
                              <p className="ms-3 style2">Available for loan</p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="feat-pills-two"
                        role="tabpanel"
                        aria-labelledby="feat-pills-two-tab"
                        tabIndex="0"
                      >
                        <div className="feature__image floating-content">
                          <img src={Static.feature2} alt="Feature image" />
                          <div
                            className="floating-content__top-right floating-content__top-right--style2"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                            <div className="floating-content__item floating-content__item--style2 text-center">
                              <img src={Static.feature6} alt="rating" />
                              <p className="style2">Interest Rate For mining</p>
                            </div>
                          </div>
                          <div
                            className="floating-content__bottom-left floating-content__bottom-left--style2"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                            <div className="floating-content__item floating-content__item--style3  d-flex align-items-center">
                              <h3 className="style2">
                                $
                                <span
                                  className="purecounter"
                                  data-purecounter-start="0"
                                  data-purecounter-end="14"
                                >
                                  14
                                </span>
                                B
                              </h3>
                              <p className="ms-3 style2">
                                Mined in the Last 4 Years
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="feat-pills-three"
                        role="tabpanel"
                        aria-labelledby="feat-pills-three-tab"
                        tabIndex="0"
                      >
                        <div className="feature__image floating-content">
                          <img src={Static.feature1} alt="Feature image" />
                          <div
                            className="floating-content__top-right floating-content__top-right--style2"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                            <div className="floating-content__item floating-content__item--style2 text-center">
                              <img src={Static.feature8} alt="rating" />
                              <p className="style2">
                                on every minimum investment
                              </p>
                            </div>
                          </div>
                          <div
                            className="floating-content__bottom-left floating-content__bottom-left--style2"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                            <div className="floating-content__item floating-content__item--style3  d-flex align-items-center">
                              <h3 className="style2">
                                $
                                <span
                                  className="purecounter"
                                  data-purecounter-start="0"
                                  data-purecounter-end="70"
                                >
                                  70
                                </span>
                                B
                              </h3>
                              <p className="ms-3 style2">
                                Total Average Investment
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div
                        className="tab-pane fade"
                        id="feat-pills-four"
                        role="tabpanel"
                        aria-labelledby="feat-pills-four-tab"
                        tabIndex="0"
                      >
                        <div className="feature__image floating-content">
                          <img src={Static.feature1} alt="Feature image" />
                          <div
                            className="floating-content__top-right floating-content__top-right--style2"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                            <div className="floating-content__item floating-content__item--style2 text-center">
                              <img src={Static.feature8} alt="rating" />
                              <p className="style2">
                                Least Interest Rate For Trading
                              </p>
                            </div>
                          </div>
                          <div
                            className="floating-content__bottom-left floating-content__bottom-left--style2"
                            data-aos="fade-left"
                            data-aos-duration="1000"
                          >
                            <div className="floating-content__item floating-content__item--style3  d-flex align-items-center">
                              <h3 className="style2">
                                $
                                <span
                                  className="purecounter"
                                  data-purecounter-start="0"
                                  data-purecounter-end="28"
                                >
                                  100
                                </span>
                                M
                              </h3>
                              <p className="ms-3 style2">
                                Total Average Traded
                              </p>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="feature__shape">
          <span className="feature__shape-item feature__shape-item--1">
            <img src={Static.shape1} alt="shape-icon" />
          </span>
          <span className="feature__shape-item feature__shape-item--2">
            <span></span>
          </span>
        </div>
      </section>
      {/* <!-- ===============>> feature section end here <<================= --> */}
    </>
  );
};

export default Features;
