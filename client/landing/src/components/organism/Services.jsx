import { Static } from "../../assets/images";

const Services = () => {
  return (
    <>
      {/* <!-- ===============>> Service section start here <<================= --> */}
      <section className="service padding-top padding-bottom">
        <div className="section-header section-header--max50">
          <h2 className="mb-15 mt-minus-5">
            <span>features </span>We offer
          </h2>
          <p>
            We offer the best features around - from investment to trading,
            mining, and more!
          </p>
        </div>
        <div className="container">
          <div className="service__wrapper">
            <div className="row g-4 align-items-center">
              <div className="col-sm-6 col-md-6 col-lg-4">
                <div
                  className="service__item"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="service__item-inner text-center">
                    <div className="service__thumb mb-30">
                      <div className="service__thumb-inner">
                        <img
                          className="dark"
                          src={Static.service1}
                          alt="service-icon"
                        />
                      </div>
                    </div>
                    <div className="service__content">
                      <h5 className="mb-15">
                        <a
                          className="stretched-link"
                          href="service-details.html"
                        >
                          Strategy Consulting
                        </a>
                      </h5>
                      <p className="mb-0">
                        <i>SafewayFX</i> provide it customers with the best
                        trading strategy to help grow a higher profit return.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="service__item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service__item-inner text-center">
                    <div className="service__thumb mb-30">
                      <div className="service__thumb-inner">
                        <img
                          className="dark"
                          src={Static.service2}
                          alt="service-icon"
                        />
                      </div>
                    </div>
                    <div className="service__content">
                      <h5 className="mb-15">
                        <a
                          className="stretched-link"
                          href="service-details.html"
                        >
                          Company Growth
                        </a>
                      </h5>
                      <p className="mb-0">
                        Every organization walks towards a positive growth and{" "}
                        <i>SafewayFX</i> want to grow along with it's customers.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="service__item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="service__item-inner text-center">
                    <div className="service__thumb mb-30">
                      <div className="service__thumb-inner">
                        <img
                          className="dark"
                          src={Static.service3}
                          alt="service-icon"
                        />
                      </div>
                    </div>
                    <div className="service__content">
                      <h5 className="mb-15">
                        <a
                          className="stretched-link"
                          href="service-details.html"
                        >
                          Reputation
                        </a>
                      </h5>
                      <p className="mb-0">
                        We're a registered and certified company, Providing its
                        investment services to its members all around the globe.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="service__item"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div className="service__item-inner text-center">
                    <div className="service__thumb mb-30">
                      <div className="service__thumb-inner">
                        <img
                          className="dark"
                          src={Static.service4}
                          alt="service-icon"
                        />
                      </div>
                    </div>
                    <div className="service__content">
                      <h5 className="mb-15">
                        <a
                          className="stretched-link"
                          href="service-details.html"
                        >
                          Best Support
                        </a>
                      </h5>
                      <p className="mb-0">
                        We have provided a stable and reliable customer service
                        to tend to all of your needs <b>24/7</b>.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="service__item"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div className="service__item-inner text-center">
                    <div className="service__thumb mb-30">
                      <div className="service__thumb-inner">
                        <img
                          className="dark"
                          src={Static.service5}
                          alt="service-icon"
                        />
                      </div>
                    </div>
                    <div className="service__content">
                      <h5 className="mb-15">
                        <a
                          className="stretched-link"
                          href="service-details.html"
                        >
                          Innovation
                        </a>
                      </h5>
                      <p className="mb-0">
                        We've teams of experts working around the clock to
                        improve trading standards to ensure the best trading
                        experience.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-sm-6 col-lg-4">
                <div
                  className="service__item"
                  data-aos="fade-up"
                  data-aos-duration="1200"
                >
                  <div className="service__item-inner text-center">
                    <div className="service__thumb mb-30">
                      <div className="service__thumb-inner">
                        <img
                          className="dark"
                          src={Static.service6}
                          alt="service-icon"
                        />
                      </div>
                    </div>
                    <div className="service__content">
                      <h5 className="mb-15">
                        <a
                          className="stretched-link"
                          href="service-details.html"
                        >
                          Customer Relationship
                        </a>
                      </h5>
                      <p className="mb-0">
                        We strive to have a very healthy and mutually beneficial
                        relationship with our customers to foster a happy
                        investment.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===============>> Service section start here <<================= --> */}
    </>
  );
};

export default Services;
