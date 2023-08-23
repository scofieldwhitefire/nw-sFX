import { Static } from "../../assets/images";
import PageHeader from "../../components/molecules/PageHeader";
import ServiceSideBar from "../../components/molecules/ServiceSideBar";
import Helmet from "../../components/atom/Helmet";

const Investment = () => {
  return (
    <>
      <Helmet title={"Investment"} />
      <PageHeader title="Investment" page="Investment" />
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
                          Discover the World of Crypto Investments: Diversify
                          Your Portfolio with Digital Assets
                        </span>
                      </h3>
                      <p className="mb-0">
                        Are you intrigued by the potential of cryptocurrencies
                        to reshape the financial landscape? Explore the exciting
                        world of crypto investments and discover opportunities
                        to diversify your investment portfolio.
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
                          Why Consider Crypto Investments:
                        </span>
                      </h3>
                      <div className="mb-15">
                        <ol type="1">
                          <li className="mb-3">
                            <b>High Growth Potential: </b> Cryptocurrencies have
                            demonstrated remarkable growth over the past decade,
                            attracting attention from both individual investors
                            and institutions.
                          </li>
                          <li className="mb-3">
                            <b>Diversification:</b> Including cryptocurrencies
                            in your investment portfolio can add a new dimension
                            of diversification, reducing your exposure to
                            traditional asset classes.
                          </li>
                          <li className="mb-3">
                            <b>Decentralization:</b> Cryptocurrencies operate on
                            decentralized networks, offering an alternative to
                            traditional financial systems and centralized
                            control.
                          </li>
                          <li className="mb-3">
                            <b>Innovation:</b> The underlying blockchain
                            technology of cryptocurrencies has the potential to
                            revolutionize various industries beyond just
                            finance.
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

export default Investment;
