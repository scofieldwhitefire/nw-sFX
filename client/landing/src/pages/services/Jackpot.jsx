import { Static } from "../../assets/images";
import PageHeader from "../../components/molecules/PageHeader";
import ServiceSideBar from "../../components/molecules/ServiceSideBar";
import Helmet from "../../components/atom/Helmet";

const Jackpot = () => {
  return (
    <>
      <Helmet title={"Jackpot"} />
      <PageHeader title="Jackpot" page="Jackpot" />
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
                        <img src={Static.jackpot} alt="Loan-Image" />
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
                          Experience the Thrill of Crypto Jackpot: Your Chance
                          to Win Big with Digital Currency
                        </span>
                      </h3>
                      <p className="mb-0">
                        Are you feeling lucky and ready for an exciting
                        adventure in the world of cryptocurrencies? Introducing
                        the Crypto Jackpot, a thrilling opportunity to test your
                        luck and potentially win big using digital currency.
                      </p>
                    </div>
                    <div
                      className="service-details__content"
                      data-aos="fade-up"
                      data-aos-duration="900"
                    >
                      <h3 className="my-15">
                        <span
                          className="stretched-link"
                          style={{ color: "#00D094" }}
                        >
                          What is the Crypto Jackpot:
                        </span>
                      </h3>
                      <p className="mb-0">
                        The Crypto Jackpot is a unique and exhilarating game of
                        chance that combines the excitement of traditional
                        jackpots with the innovative nature of cryptocurrencies.
                        Participants have the chance to win substantial amounts
                        of digital currency by purchasing tickets and taking
                        part in the draw.
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
                                        How it works FAQs: Ticket Purchase
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
                                        Purchase your Crypto Jackpot tickets
                                        using the supported cryptocurrencies.
                                        Each ticket represents an entry into the
                                        drawing for the grand prize.
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
                                        How it works FAQs: Draw Day
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
                                        On the designated draw day, a random
                                        selection will determine the winners of
                                        the Crypto Jackpot. The more tickets you
                                        have, the higher your chances of
                                        winning.
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
                                        How it works FAQs: Winning Rewards
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
                                        Winners will receive their winnings in
                                        the form of the advertised
                                        cryptocurrency. Prizes can vary based on
                                        the number of participants and the
                                        current value of the cryptocurrency.
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
                      className="service-details__content"
                      data-aos="fade-up"
                      data-aos-duration="900"
                    >
                      <h3 className="mb-15 mt-4">
                        <span
                          className="stretched-link"
                          style={{ color: "#00D094" }}
                        >
                          Why Join the Crypto Jackpot:
                        </span>
                      </h3>
                      <div className="mb-15">
                        <ol type="1">
                          <li className="mb-3">
                            <b>Exciting Opportunity: </b> Engage in the thrill
                            of the game and experience the rush of potentially
                            winning a substantial amount of digital currency.
                          </li>
                          <li className="mb-3">
                            <b>Easy Participation:</b> Purchasing tickets and
                            participating in the Crypto Jackpot is
                            straightforward and user-friendly, allowing everyone
                            to take part.
                          </li>
                          <li className="mb-3">
                            <b>Cryptocurrency Fun: </b> Combine the enjoyment of
                            gaming with the unique appeal of cryptocurrencies,
                            creating an innovative and entertaining experience.
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

export default Jackpot;
