import { Static } from "../../assets/images";
import PageHeader from "../../components/molecules/PageHeader";
import ServiceSideBar from "../../components/molecules/ServiceSideBar";
import Helmet from "../../components/atom/Helmet";

const Trading = () => {
  return (
    <>
      <Helmet title={"Trading"} />
      <PageHeader title="Trading" page="Trading" />
      {/* <!-- ===============>> Service section start here <<================= --> */}
      <div className="service-details padding-top padding-bottom section-bg-color">
        <div className="container">
          <div className="service-details__wrapper">
            <div className="row flex-lg-row-reverse g-5">
              <div className="col-lg-8">
                <div className="service-details__item">
                  <div className="service-details__item-inner ">
                    <div
                      className="service-details__thumb mb-40"
                      data-aos="fade-up"
                      data-aos-duration="800"
                    >
                      <div className="service-details__thumb-inner">
                        <img src={Static.investment} alt="Loan-Image" />
                      </div>
                    </div>
                    <div
                      className="service-details__content"
                      data-aos="fade-up"
                      data-aos-duration="900"
                    >
                      <h3 className="mb-15">
                        <span
                          className="stretched-link"
                          style={{ color: "#00D094" }}
                        >
                          Embark on the Exciting Journey of Crypto Trading:
                          Navigate the Digital Markets with Confidence.
                        </span>
                      </h3>
                      <p className="mb-0">
                        Are you captivated by the fast-paced world of
                        cryptocurrencies and want to explore trading
                        opportunities? Delve into the dynamic realm of crypto
                        trading and learn how to navigate these markets with
                        knowledge and precision.
                      </p>
                    </div>
                    <div
                      className="service-details__content"
                      data-aos="fade-up"
                      data-aos-duration="900"
                    >
                      <h3 className="mb-15 mt-4">
                        <span
                          className="stretched-link"
                          style={{ color: "#00D094" }}
                        >
                          Why Engage in Crypto Trading:
                        </span>
                      </h3>
                      <div className="mb-15">
                        <ol type="1">
                          <li className="mb-3">
                            <b>Market Volatility: </b> Cryptocurrency markets
                            are known for their rapid price movements, providing
                            ample opportunities for traders to profit from price
                            fluctuations.
                          </li>
                          <li className="mb-3">
                            <b>24/7 Accessibility:</b> Unlike traditional
                            financial markets that have set trading hours,
                            crypto markets operate around the clock, allowing
                            traders to engage at their convenience.
                          </li>
                          <li className="mb-3">
                            <b>Innovative Assets:</b> Participate in trading
                            some of the most innovative digital assets that
                            leverage blockchain technology to reshape industries
                            and economies.
                          </li>
                          <li className="mb-3">
                            <b>Technical Analysis: </b> Develop and apply
                            technical analysis strategies to identify trends,
                            patterns, and potential entry and exit points in the
                            crypto market.
                          </li>
                        </ol>
                      </div>
                    </div>
                    <div
                      className="service-details__content"
                      data-aos="fade-up"
                      data-aos-duration="900"
                    >
                      <h3 className="mb-15 mt-4">
                        <span
                          className="stretched-link"
                          style={{ color: "#00D094" }}
                        >
                          Why Choose Us?
                        </span>
                      </h3>
                      <div className="mb-15">
                        <ol type="1">
                          <li className="mb-3">
                            <b>Security:</b> Your collateral is securely stored,
                            and our platform follows industry best practices for
                            data protection.
                          </li>
                          <li className="mb-3">
                            <b>Reputation:</b> We are a trusted and established
                            nam in the crypto lending industry.
                          </li>
                          <li className="mb-3">
                            <b>Transparent Terms:</b> We believe in open
                            communication, ensuring you have a clear
                            understanding of your obligations and benefits.
                          </li>
                        </ol>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ServiceSideBar />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===============>> Service section start here <<================= --> */}
    </>
  );
};

export default Trading;
