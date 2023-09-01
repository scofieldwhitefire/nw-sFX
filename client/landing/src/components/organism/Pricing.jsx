import { useDispatch, useSelector } from "react-redux";
import { Static } from "../../assets/images";
import { currency } from "../../config/libs";
import { useEffect, useState } from "react";
import { getPricing } from "../../features/requests";

const raw = {
  name: "",
  min_profit: 0,
  duration: "",
  min: 0,
  max: 0,
};

const Pricing = () => {
  const dispatch = useDispatch();
  const { pricing, loading } = useSelector((state) => state.requests);
  const [gold, setGold] = useState(raw);
  const [plat, setPlat] = useState(raw);
  const [dia, setDia] = useState(raw);

  const init = async () => {
    await dispatch(getPricing());
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    if (pricing.length) {
      setGold(pricing[0]);
      setPlat(pricing[1]);
      setDia(pricing[2]);
    }
  }, [pricing]);
  return (
    <>
      {/* <!-- ===============>> Pricing section start here <<================= --> */}
      <section className="pricing padding-top padding-bottom">
        <div className="section-header section-header--max50">
          <h2 className="mb-15 mt-minus-5">
            Our <span>price </span>plan
          </h2>
          <p>
            We offer the best features around - from investment to trading,
            mining, and more!
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
                        <h6 className="mb-15">{gold.name}</h6>
                        <h3 className="mb-25">
                          {currency(gold.min_profit, "d")}{" "}
                          <span>Min Profit</span>
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
                            Earning Daily ({gold.duration})
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Min Invest {currency(gold.min, "d")}
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Max Invest {currency(gold.max, "d")}
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
                        <h6 className="mb-15">{plat.name}</h6>
                        <h3 className="mb-25">
                          {currency(plat.min_profit, "d")}
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
                            Earning Daily ({plat.duration})
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Min Invest {currency(plat.min, "d")}
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Max Invest {currency(plat.max, "d")}
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
                        <h6 className="mb-15">{dia.name}</h6>
                        <h3 className="mb-25">
                          {currency(dia.min_profit, 'd')}
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
                            Earning Daily ({dia.duration})
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Min Invest {currency(dia.min, 'd')}
                          </li>
                          <li className="pricing__list-item">
                            <span>
                              <img
                                src={Static.check}
                                alt="check"
                                className="dark"
                              />
                            </span>
                            Max Invest {currency(dia.max, 'd')}
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
