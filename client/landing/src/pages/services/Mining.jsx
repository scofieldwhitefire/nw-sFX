import { Static } from "../../assets/images";
import PageHeader from "../../components/molecules/PageHeader";
import ServiceSideBar from "../../components/molecules/ServiceSideBar";
import Helmet from "../../components/atom/Helmet";

const Mining = () => {
  return (
    <>
      <Helmet title={"Mining"} />
      <PageHeader title="Mining" page="Mining" />
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
                        <img src={Static.mining} alt="Loan-Image" />
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
                          Unveiling the World of Crypto Mining: Empower Yourself
                          with Blockchain Technology
                        </span>
                      </h3>
                      <p className="mb-0">
                        Are you curious about the inner workings of
                        cryptocurrencies and want to contribute to the
                        blockchain ecosystem? Discover the fascinating realm of
                        crypto mining and learn how you can participate in
                        securing and validating transactions.
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
                          Why Explore Crypto Mining:
                        </span>
                      </h3>
                      <div className="mb-15">
                        <ol type="1">
                          <li className="mb-3">
                            <b>Support the Network: </b> Crypto mining plays a
                            crucial role in maintaining the security and
                            integrity of blockchain networks by validating
                            transactions and adding them to the public ledger.
                          </li>
                          <li className="mb-3">
                            <b>Earning Potential:</b> Mining allows you to earn
                            cryptocurrencies as rewards for your participation
                            in securing the network and validating transactions.
                          </li>
                          <li className="mb-3">
                            <b>Hands-On Involvement:</b> Get hands-on experience
                            with blockchain technology and the decentralized
                            consensus mechanisms that power cryptocurrencies.
                          </li>
                          <li className="mb-3">
                            <b>Technical Learning: </b> Engage in the technical
                            aspects of mining hardware, software configurations,
                            and network protocols.
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

export default Mining;
