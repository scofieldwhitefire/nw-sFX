import { Static } from "../../assets/images";

const Blog = () => {
  return (
    <>
      {/* <!-- ===============>> Blog section start here <<================= --> */}
      <section className="blog padding-top padding-bottom">
        <div className="container">
          <div className="section-header d-md-flex align-items-center justify-content-between">
            <div className="section-header__content">
              <h2 className="mb-15">
                <span>articles</span> for pro traders
              </h2>
              <p className="mb-0">
                Hey there pro traders, check out these articles with tips to
                take your trading game to the next level!
              </p>
            </div>
            <div className="section-header__action">
              <div className="swiper-nav swiper-nav--style1">
                <button className="swiper-nav__btn blog__slider-prev">
                  <i className="fa-solid fa-angle-left"></i>
                </button>
                <button className="swiper-nav__btn blog__slider-next active">
                  <i className="fa-solid fa-angle-right"></i>
                </button>
              </div>
            </div>
          </div>
          <div
            className="blog__wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="blog__slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="blog__item blog__item--style2">
                    <div className="blog__item-inner">
                      <div className="blog__thumb">
                        <img src={Static.blog1} alt="blog Images" />
                      </div>

                      <div className="blog__content">
                        <div className="blog__meta">
                          <span className="blog__meta-tag blog__meta-tag--style1">
                            Forex trading
                          </span>
                        </div>
                        <h5 className="10">
                          
                          <a href="blog-details.html">
                            Swing Trading Definition
                          </a>
                        </h5>

                        <p className="mb-15">
                          Our platform is not only about trading—it's also a hub
                          for knowledge and learning. We provide resources.
                        </p>

                        <div className="blog__writer">
                          <div className="blog__writer-thumb">
                            <img
                              src={Static.author1}
                              alt="writer"
                            />
                          </div>
                          <div className="blog__writer-designation">
                            <h6 className="mb-0">Vasha Gueye</h6>
                            <span>20/6/2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog__item blog__item--style2">
                    <div className="blog__item-inner">
                      <div className="blog__thumb">
                        <img src={Static.blog2} alt="blog Images" />
                      </div>

                      <div className="blog__content">
                        <div className="blog__meta">
                          <span className="blog__meta-tag blog__meta-tag--style1">
                            Trading market
                          </span>
                        </div>
                        <h5 className="10">
                          
                          <a href="blog-details.html">hedge funds work?</a>
                        </h5>

                        <p className="mb-15">
                          To cater to your individual trading preferences, we
                          offer a variety of order types, including market.
                        </p>

                        <div className="blog__writer">
                          <div className="blog__writer-thumb">
                            <img
                              src={Static.author2}
                              alt="writer"
                            />
                          </div>
                          <div className="blog__writer-designation">
                            <h6 className="mb-0">Abhivibha Kanmani</h6>
                            <span>30/5/2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="blog__item blog__item--style2">
                    <div className="blog__item-inner">
                      <div className="blog__thumb">
                        <img src={Static.blog3} alt="blog Images" />
                      </div>

                      <div className="blog__content">
                        <div className="blog__meta space-x-2">
                          <span className="mx-1 blog__meta-tag blog__meta-tag--style1">
                            Investment
                          </span>
                          <span className="mx-1 blog__meta-tag blog__meta-tag--style1">
                            Trading
                          </span>
                        </div>
                        <h5 className="10">
                          <a href="blog-details.html">
                            Options Trading business?
                          </a>
                        </h5>

                        <p className="mb-15">
                          Security is our top priority, and we employ robust
                          measures to ensure the safety of your funds.
                        </p>

                        <div className="blog__writer">
                          <div className="blog__writer-thumb">
                            <img
                              src={Static.author3}
                              alt="writer"
                            />
                          </div>
                          <div className="blog__writer-designation">
                            <h6 className="mb-0">Hulya Aydin</h6>
                            <span>12/07/2023</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="text-center">
            <a
              href="blogs.html"
              className="sfx-btn sfx-btn--border sfx-btn--primary mt-40"
            >
              View more
            </a>
          </div>
        </div>
        <div className="blog__shape">
          <span className="blog__shape-item blog__shape-item--1">
            
            <span></span>
          </span>
        </div>
      </section>
      {/* <!-- ===============>> Blog section start here <<================= --> */}
    </>
  );
};

export default Blog;
