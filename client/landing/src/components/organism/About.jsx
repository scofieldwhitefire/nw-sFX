import { Static } from "../../assets/images";

const About = () => {
  return (
    <>
      {/* <!-- ===============>> About section start here <<================= --> */}
      <section className="about about--style1 ">
        <div className="container">
          <div className="about__wrapper">
            <div className="row gx-5  gy-4 gy-sm-0  align-items-center">
              <div className="col-lg-6">
                <div
                  className="about__thumb pe-lg-5"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <div className="about__thumb-inner">
                    <div className="about__thumb-image floating-content">
                      <img
                        className="dark"
                        src={Static.about1}
                        alt="about-image"
                      />
                      <div className="floating-content__top-left">
                        <div className="floating-content__item">
                          <h3>
                            <span
                              className="purecounter"
                              data-purecounter-start="0"
                              data-purecounter-end="6"
                            >
                              6
                            </span>{" "}
                            Years
                          </h3>
                          <p>Trading Experience</p>
                        </div>
                      </div>
                      <div className="floating-content__bottom-right">
                        <div className="floating-content__item">
                          <h3>
                            <span
                              className="purecounter"
                              data-purecounter-start="0"
                              data-purecounter-end="25"
                            >
                              3.5M
                            </span>
                            M<sup>+</sup>
                          </h3>
                          <p>Satisfied Customers</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="about__content"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <div className="about__content-inner">
                    <h2>
                      Meet <span>SafewayFX</span>
                    </h2>

                    <p className="mb-0">
                      Looking for a highest returns on your investments,
                      trading, mining or loan? <i>SafewayFX</i> is the automatic
                      online investments, trading and mining platform just for you,
                      <i>SafewayFX</i> team are professional traders and investors focused
                      on Bitcoin, Bitcoin Cash, Ethereum, and other
                      crypto currencies over multiple Exchanges and
                      markets. Thanks to the extraordinary diversification of
                      our investments, we are able to deliver steady income for
                      our investors. Headquartered in the United States Of
                      America founded in <strong>2017</strong>, <i>SafewayFX</i> has become the
                      fastest growing trading company in the States. Our name is
                      synonymous with effective and profitable trading solutions
                      where our investors need little to no trading experience
                      at all. With <i>SafewayFX</i>, Simply choose within one of our
                      investment plans, make a deposit and sit back while our
                      experts go to work. You can withdraw profits any time and
                      schedule withdrawals quickly and easily through our
                      website.
                      {/* If you have been looking for an easy to use
                      investment platform, choose SafewayFX now and let our
                      professionals help you choose an investment plan that
                      meets your needs today! */}
                    </p>
                    <a
                      href="about.html"
                      className="sfx-btn sfx-btn--border sfx-btn--primary"
                    >
                      get started
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===============>> About section start here <<================= --> */}
    </>
  );
};

export default About;
