import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getTestimonial } from "../../features/requests";

const Testimonial = () => {
  const dispatch = useDispatch();
  const { testimonial, loading } = useSelector((state) => state.requests);

  const init = async () => {
    await dispatch(getTestimonial());
  };

  useEffect(() => {
    init();
  }, []);
  return (
    <>
      {/* <!-- ===============>> Testimonial section start here <<================= --> */}
      <section
        className="testimonial padding-top padding-bottom-style2 bg-color"
        id="testimonial_i_"
        data-has-testimonial={testimonial.length ? !!1 : !!0}
      >
        <div className="container">
          <div className="section-header d-md-flex align-items-center justify-content-between">
            <div className="section-header__content">
              <h2 className="mb-15">
                what <span>our Clients </span> says!
              </h2>
              <p className="mb-0">
                We love connecting with our clients to hear about their
                experiences and how we can improve.
              </p>
            </div>
            {testimonial.length > 2 && (
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
            )}
          </div>
          <div
            className="testimonial__wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="testimonial__slider swiper">
              <div className="swiper-wrapper">
                {testimonial.length
                  ? testimonial.map((x) => (
                      <div key={x.uuid} className="swiper-slide">
                        <div className="testimonial__item testimonial__item--style1">
                          <div className="testimonial__item-inner">
                            <div className="testimonial__item-content">
                              <p className="mb-0">{x.message}...</p>
                              <div className="testimonial__footer">
                                <div className="testimonial__author">
                                  <div className="testimonial__author-thumb">
                                    <img
                                      src={x.photo}
                                      alt={`testimonial by ${x.name}`}
                                    />
                                  </div>
                                  <div className="testimonial__author-designation">
                                    <h6>{x.name}</h6>
                                    <span>{x.job}</span>
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
                    ))
                  : "No item found"}
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
