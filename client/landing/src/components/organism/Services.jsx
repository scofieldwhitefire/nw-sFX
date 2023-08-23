import { Static } from "../../assets/images";

const Services = () => {
  return (
    <>
      {/* <!-- ===============>> Service section start here <<================= --> */}
      <section className="service padding-top padding-bottom">
        <div className="section-header section-header--max50">
          <h2 className="mb-15 mt-minus-5">
            <span>services </span>We offer
          </h2>
          <p>
            We offer the best services around - from installations to repairs,
            maintenance, and more!
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
                        <a className="stretched-link" href="service-details.html">
                          Strategy Consulting
                        </a>
                      </h5>
                      <p className="mb-0">
                        A social assistant that's flexible can accommodate your
                        schedule and needs, making life easier.
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
                        <a className="stretched-link" href="service-details.html">
                          Financial Advisory
                        </a>
                      </h5>
                      <p className="mb-0">
                        Modules transform smart trading by automating processes
                        and improving decision-making.
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
                        <a className="stretched-link" href="service-details.html">
                          Management
                        </a>
                      </h5>
                      <p className="mb-0">
                        There, it's me, your friendly neighborhood reporter's
                        news analyst processes and improving
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
                        <a className="stretched-link" href="service-details.html">
                          Supply Optimization
                        </a>
                      </h5>
                      <p className="mb-0">
                        Hey, have you checked out that new cryptocurrency
                        platform? It's pretty cool and easy to use!
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
                        <a className="stretched-link" href="service-details.html">
                          HR consulting
                        </a>
                      </h5>
                      <p className="mb-0">
                        Hey guys, just a quick update on exchange orders. There
                        have been some changes currency!
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
                        <a className="stretched-link" href="service-details.html">
                          Marketing consulting
                        </a>
                      </h5>
                      <p className="mb-0">
                        Hey! Just wanted to let you know that the price
                        notification module processes is now live!
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
