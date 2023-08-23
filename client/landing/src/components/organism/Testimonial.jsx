import { Static } from "../../assets/images";

const Testimonial = () => {
  return (
    <>
      {/* <!-- ===============>> Testimonial section start here <<================= --> */}
      <section className="testimonial padding-top padding-bottom-style2 bg-color">
        <div className="container">
          <div className="section-header d-md-flex align-items-center justify-content-between">
            <div className="section-header__content">
              <h2 className="mb-15">
                connect with <span>our Clients </span>
              </h2>
              <p className="mb-0">
                We love connecting with our clients to hear about their
                experiences and how we can improve.
              </p>
            </div>
            <div className="section-header__action">
              <div className="swiper-nav">
                <button className="swiper-nav__btn testimonial__slider-prev">
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className="swiper-nav__btn testimonial__slider-next active">
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="testimonial__wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="testimonial__slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="testimonial__item testimonial__item--style1">
                    <div className="testimonial__item-inner">
                      <div className="testimonial__item-content">
                        <p className="mb-0">
                          The above testimonial is about Martha Chumo, who
                          taught herself to code in one summer. This testimonial
                          example works because it allows prospective customers
                          to see themselves in Codeacademy’s current customer
                          base.
                        </p>
                        <div className="testimonial__footer">
                          <div className="testimonial__author">
                            <div className="testimonial__author-thumb">
                              <img src={Static.testimonial1} alt="author" />
                            </div>
                            <div className="testimonial__author-designation">
                              <h6>Mobarok Hossain</h6>
                              <span>Trade Master</span>
                            </div>
                          </div>
                          <div className="testimonial__quote">
                            <span>
                              <i className="fa-solid fa-quote-right"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial__item testimonial__item--style1">
                    <div className="testimonial__item-inner">
                      <div className="testimonial__item-content">
                        <p className="mb-0">
                          In the above testimonial, a customer named Jeanine
                          shares her experience with Briogeo’s products. While
                          the post is scattered with too many product mentions,
                          it takes full advantage of its real estate by allowing
                          the writer to tell
                        </p>
                        <div className="testimonial__footer">
                          <div className="testimonial__author">
                            <div className="testimonial__author-thumb">
                              <img src={Static.testimonial2} alt="author" />
                            </div>
                            <div className="testimonial__author-designation">
                              <h6>Guy Hawkins</h6>
                              <span>Trade Boss</span>
                            </div>
                          </div>
                          <div className="testimonial__quote">
                            <span>
                              <i className="fa-solid fa-quote-right"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="testimonial__item testimonial__item--style1">
                    <div className="testimonial__item-inner">
                      <div className="testimonial__item-content">
                        <p className="mb-0">
                          The above testimonial is about Martha Chumo, who
                          taught herself to code in one summer. This testimonial
                          example works because it allows prospective customers
                          to see themselves in Codeacademy’s current customer
                          base.
                        </p>
                        <div className="testimonial__footer">
                          <div className="testimonial__author">
                            <div className="testimonial__author-thumb">
                              <img src={Static.testimonial6} alt="author" />
                            </div>
                            <div className="testimonial__author-designation">
                              <h6>Belal Hossain</h6>
                              <span>Trade Genius</span>
                            </div>
                          </div>
                          <div className="testimonial__quote">
                            <span>
                              <i className="fa-solid fa-quote-right"></i>
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===============>> Testimonial section start here <<================= --> */}
    </>
  );
};

export default Testimonial;
