import { Static } from "../../assets/images";
import { currency } from "../../config/libs";

const Pricing = () => {
  return (
    <>
      {/* <!-- ===============>> Pricing section start here <<================= --> */}
      <section className="pricing padding-top padding-bottom">
        <div className="section-header section-header--max50">
          <h2 className="mb-15 mt-minus-5">
            Our <span>pricings </span>plan
          </h2>
          <p>
            We offer the best pricings around - from installations to repairs,
            maintenance, and more!
          </p>
        </div>
        <div className="container">
          <div className="pricing__wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-md-6 col-lg-4">
                <div
                  className="pricing__item"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="pricing__item-inner">
                    <div className="pricing__item-content">
                      {/* <!-- pricing top part --> */}
                      <div className="pricing__item-top">
                        <h6 className="mb-15">Gold</h6>
                        <h3 className="mb-25">
                          {currency(1750)} <span>Min Profit</span>
                        </h3>
                      </div>

                      {/* <!-- pricing middle part --> */}
                      <div className="pricing__item-middle">
                        <ul className="pricing__list">
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Earning Daily (7 Days)
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Min Invest {currency(50)}
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Max Invest {currency(400)}
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Principal Return
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Compound Available
                          </li>
                        </ul>
                      </div>

                      {/* <!-- pricing bottom part --> */}
                      <div className="pricing__item-bottom">
                        <a
                          href="signup.html"
                          className="sfx-btn sfx-btn--outline"
                        >
                          Choose Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="pricing__item "
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="pricing__item-inner active">
                    <div className="pricing__item-content">
                      {/* <!-- pricing top part --> */}
                      <div className="pricing__item-top">
                        <h6 className="mb-15">Platinum</h6>
                        <h3 className="mb-25">
                          {currency(1750)}
                          <span> Min Profit</span>
                        </h3>
                      </div>

                      {/* <!-- pricing middle part --> */}
                      <div className="pricing__item-middle">
                        <ul className="pricing__list">
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Earning Daily (15 Days)
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Min Invest {currency(500)}
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Max Invest {currency(45000)}
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Principal Return
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Compound Available
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            24/7 Support
                          </li>
                        </ul>
                      </div>

                      {/* <!-- pricing bottom part --> */}
                      <div className="pricing__item-bottom">
                        <a
                          href="signup.html"
                          className="sfx-btn sfx-btn--outline active"
                        >
                          Choose Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 col-lg-4">
                <div
                  className="pricing__item"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="pricing__item-inner">
                    <div className="pricing__item-content">
                      {/* <!-- pricing top part --> */}
                      <div className="pricing__item-top">
                        <h6 className="mb-15">Diamond</h6>
                        <h3 className="mb-25">
                          {currency(210000)}
                          <span> Min Profit</span>
                        </h3>
                      </div>

                      {/* <!-- pricing middle part --> */}
                      <div className="pricing__item-middle">
                        <ul className="pricing__list">
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Earning Daily (28 Days)
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Min Invest {currency(50000)}
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Max Invest {currency(650000)}
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            All Platinum Plan
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Travel Allowance
                          </li>
                        </ul>
                      </div>

                      {/* <!-- pricing bottom part --> */}
                      <div className="pricing__item-bottom">
                        <a
                          href="signup.html"
                          className="sfx-btn sfx-btn--outline"
                        >
                          Choose Plan
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="pricing__shape">
          <span className="pricing__shape-item pricing__shape-item--1">
            <span></span>
          </span>
          <span className="pricing__shape-item pricing__shape-item--2">
            <img src={Static.icon1} alt="shape-icon" />
          </span>
        </div>
      </section>
      {/* <!-- ===============>> Pricing section start here <<================= --> */}
    </>
  );
};

export default Pricing;
