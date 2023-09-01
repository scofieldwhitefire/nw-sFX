import { Static } from "../../assets/images";
import PageHeader from "../../components/molecules/PageHeader";
import ServiceSideBar from "../../components/molecules/ServiceSideBar";
import Helmet from "../../components/atom/Helmet";

const Loan = () => {
  return (
    <>
      <Helmet title={"Loan"} />
      <PageHeader title="Loan" page="Loan" />
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
                        <img src={Static.loan} alt="Loan-Image" />
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
                          Crypto Loan
                        </span>
                      </h3>
                      <p className="mb-0">
                        Are you looking to access liquidity without selling your
                        valuable cryptocurrency holdings? Consider a crypto
                        loan, a revolutionary financial service that allows you
                        to leverage your digital assets to secure loans in
                        traditional currency or stablecoins.
                      </p>
                    </div>
                    <div
                      className="service-details__faq mt-55"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="faq">
                        <div className="faq__wrapper">
                          <div
                            className="accordion accordion--style1"
                            id="faqAccordion1"
                          >
                            <div className="row">
                              <div className="col-12">
                                <div className="accordion__item ">
                                  <div className="accordion__header" id="faq1">
                                    <button
                                      className="accordion__button accordion__button--style2"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#faqBody1"
                                      aria-expanded="false"
                                      aria-controls="faqBody1"
                                    >
                                      <span className="accordion__button-content">
                                        How it works FAQs: Collateral
                                      </span>
                                      <span className="accordion__button-plusicon"></span>
                                    </button>
                                  </div>
                                  <div
                                    id="faqBody1"
                                    className="accordion-collapse collapse show"
                                    aria-labelledby="faq1"
                                    data-bs-parent="#faqAccordion1"
                                  >
                                    <div className="accordion__body">
                                      <p className="mb-15">
                                        Deposit your cryptocurrency holdings as
                                        collateral on our secure platform. We
                                        accept a range of cryptocurrencies,
                                        including Bitcoin, Ethereum, and more.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="accordion__item ">
                                  <div className="accordion__header" id="faq2">
                                    <button
                                      className="accordion__button accordion__button--style2 collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#faqBody2"
                                      aria-expanded="true"
                                      aria-controls="faqBody2"
                                    >
                                      <span className="accordion__button-content">
                                        How it works FAQs: Loan Approval
                                      </span>
                                      <span className="accordion__button-plusicon"></span>
                                    </button>
                                  </div>
                                  <div
                                    id="faqBody2"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="faq2"
                                    data-bs-parent="#faqAccordion1"
                                  >
                                    <div className="accordion__body">
                                      <p className="mb-15">
                                        Our transparent and efficient process
                                        evaluates your collateral and offers you
                                        a loan in traditional currency or
                                        stablecoins. The loan amount is
                                        determined by the loan-to-value (LTV)
                                        ratio, ensuring a fair and equitable
                                        arrangement.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="accordion__item ">
                                  <div className="accordion__header" id="faq3">
                                    <button
                                      className="accordion__button accordion__button--style2 collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#faqBody3"
                                      aria-expanded="false"
                                      aria-controls="faqBody3"
                                    >
                                      <span className="accordion__button-content">
                                        How it works FAQs: Flexible Terms
                                      </span>
                                      <span className="accordion__button-plusicon"></span>
                                    </button>
                                  </div>
                                  <div
                                    id="faqBody3"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="faq3"
                                    data-bs-parent="#faqAccordion1"
                                  >
                                    <div className="accordion__body">
                                      <p className="mb-15">
                                        Customize your loan terms, including
                                        interest rates, repayment schedule, and
                                        loan duration. We provide competitive
                                        interest rates that reflect the current
                                        market conditions.
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="accordion__item border-0">
                                  <div className="accordion__header" id="faq4">
                                    <button
                                      className="accordion__button accordion__button--style2 collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#faqBody4"
                                      aria-expanded="false"
                                      aria-controls="faqBody4"
                                    >
                                      <span className="accordion__button-content">
                                        How it works FAQs: Benefits
                                      </span>
                                      <span className="accordion__button-plusicon"></span>
                                    </button>
                                  </div>
                                  <div
                                    id="faqBody4"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="faq4"
                                    data-bs-parent="#faqAccordion1"
                                  >
                                    <div className="accordion__body">
                                      <p className="mb-15">
                                        <ul>
                                          <li>
                                            <b>Retain Ownership:</b> Keep
                                            ownership of your cryptocurrency
                                            assets while accessing the funds you
                                            need.
                                          </li>
                                          <li>
                                            <b>Avoid Tax Events:</b> By choosing
                                            a crypto loan, you can sidestep
                                            potential capital gains taxes that
                                            arise from selling your
                                            cryptocurrency.
                                          </li>
                                          <li>
                                            <b>Diversify Investments:</b> Put
                                            your crypto to work in various
                                            financial opportunities without
                                            sacrificing long-term potential.
                                          </li>
                                        </ul>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="accordion__item border-0">
                                  <div className="accordion__header" id="faq5">
                                    <button
                                      className="accordion__button accordion__button--style2 collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#faqBody5"
                                      aria-expanded="false"
                                      aria-controls="faqBody5"
                                    >
                                      <span className="accordion__button-content">
                                        How it works FAQs: Risk Management
                                      </span>
                                      <span className="accordion__button-plusicon"></span>
                                    </button>
                                  </div>
                                  <div
                                    id="faqBody5"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="faq5"
                                    data-bs-parent="#faqAccordion1"
                                  >
                                    <div className="accordion__body">
                                      <p className="mb-15">
                                        <ul>
                                          <li>
                                            <b>Liquidation Protection:</b> Our
                                            platform monitors the value of your
                                            collateral. If market volatility
                                            threatens your collateral's value,
                                            we offer a liquidation process to
                                            protect both parties' interests.
                                          </li>
                                        </ul>
                                      </p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                              <div className="col-12">
                                <div className="accordion__item border-0">
                                  <div className="accordion__header" id="faq6">
                                    <button
                                      className="accordion__button accordion__button--style2 collapsed"
                                      type="button"
                                      data-bs-toggle="collapse"
                                      data-bs-target="#faqBody6"
                                      aria-expanded="false"
                                      aria-controls="faqBody6"
                                    >
                                      <span className="accordion__button-content">
                                        How it works FAQs: Why Choose Us?
                                      </span>
                                      <span className="accordion__button-plusicon"></span>
                                    </button>
                                  </div>
                                  <div
                                    id="faqBody6"
                                    className="accordion-collapse collapse"
                                    aria-labelledby="faq6"
                                    data-bs-parent="#faqAccordion1"
                                  >
                                    <div className="accordion__body">
                                      <p className="mb-15">
                                        <ul>
                                          <li>
                                            <b>Security:</b> Your collateral is
                                            securely stored, and our platform
                                            follows industry best practices for
                                            data protection.
                                          </li>
                                          <li>
                                            <b>Reputation:</b> We are a trusted
                                            and established nam in the crypto
                                            lending industry.
                                          </li>
                                          <li>
                                            <b>Transparent Terms:</b> We believe
                                            in open communication, ensuring you
                                            have a clear understanding of your
                                            obligations and benefits.
                                          </li>
                                        </ul>
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
                    <div
                      className="service-details__content mt-5"
                      data-aos="fade-up"
                      data-aos-duration="900"
                    >
                      <h3 className="mb-15">
                        <span
                          className="stretched-link"
                          style={{ color: "#00D094", marginTop: "5px" }}
                        >
                          Get Started
                        </span>
                      </h3>
                      <p className="my-1">
                        Ready to access funds while holding onto your
                        cryptocurrency? Our simple and user-friendly platform
                        makes it easy. Explore our loan options, calculate
                        potential loan amounts, and begin your journey toward
                        unlocking the value of your digital assets.
                      </p>
                      <p className="my-1">
                        Please note that crypto loans involve risks, including
                        market volatility and regulatory uncertainties. It's
                        essential to thoroughly understand the terms and risks
                        before proceeding. Our dedicated support team is
                        available to address any inquiries you may have.
                      </p>
                    </div>
                    {/* <div className="service-details__team mt-50">
                      <h5 className="mb-25">Meet with our experts</h5>
                      <div
                        className="team"
                        data-aos="fade-up"
                        data-aos-duration="1200"
                      >
                        <div className="row g-5">
                          <div className="col-sm-6">
                            <div
                              className="team__item team__item--shape"
                              data-aos="fade-up"
                              data-aos-duration="800"
                            >
                              <div className="team__item-inner team__item-inner--shape2">
                                <div className="team__item-thumb team__item-thumb--style1">
                                  <img
                                    src="assets/images/team/other/1.png"
                                    alt="Team Image"
                                    className="dark"
                                  />
                                </div>
                                <div className="team__item-content team__item-content--style1">
                                  <div className="team__item-author team__item-author--style1">
                                    <div className="team__item-authorinfo">
                                      <h6 className="mb-1">
                                        <a
                                          href="team-details.html"
                                          className="stretched-link"
                                        >
                                          Tyler Jones
                                        </a>
                                      </h6>
                                      <p className="mb-0">Trader Boss</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                          <div className="col-sm-6">
                            <div
                              className="team__item team__item--shape"
                              data-aos="fade-up"
                              data-aos-duration="900"
                            >
                              <div className="team__item-inner team__item-inner--shape2">
                                <div className="team__item-thumb team__item-thumb--style1">
                                  <img
                                    src="assets/images/team/other/2.png"
                                    alt="Team Image"
                                    className="dark"
                                  />
                                </div>
                                <div className="team__item-content team__item-content--style1">
                                  <div className="team__item-author team__item-author--style1">
                                    <div className="team__item-authorinfo">
                                      <h6 className="mb-1">
                                        <a
                                          href="team-details.html"
                                          className="stretched-link"
                                        >
                                          Adam Smith
                                        </a>
                                      </h6>
                                      <p className="mb-0">Nimble Broker</p>
                                    </div>
                                  </div>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div> */}
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

export default Loan;
