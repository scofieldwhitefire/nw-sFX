import { Static } from "../../assets/images";

const CtaOne = () => {
  return (
    <>
      {/* <!-- ===============>> cta section start here <<================= --> */}
      <section className="cta padding-top padding-bottom  bg-color">
        <div className="container">
          <div className="cta__wrapper">
            <div className="cta__newsletter justify-content-center">
              <div
                className="cta__newsletter-inner"
                data-aos="fade-up"
                data-aos-duration="1000"
              >
                <div className="cta__thumb">
                  <img src={Static.cta3} alt="cta-thumb" />
                </div>
                <div className="cta__subscribe">
                  <h2>
                    <span>Subscribe</span> our news
                  </h2>
                  <p>
                    Hey! Are you tired of missing out on our updates? Subscribe
                    to our news now and stay in the loop!
                  </p>
                  <form
                    className="cta-form cta-form--style2 form-subscribe"
                    action="#"
                  >
                    <div className="cta-form__inner d-sm-flex align-items-center">
                      <input
                        type="email"
                        className="form-control form-control--style2 mb-3 mb-sm-0"
                        placeholder="Email Address"
                      />
                      <button
                        className="sfx-btn  sfx-btn--large sfx-btn--secondary2"
                        type="submit"
                      >
                        Submit
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
            <div className="cta__shape">
              <span className="cta__shape-item cta__shape-item--1">
                <img src={Static.cta2} alt="shape icon" />
              </span>
              <span className="cta__shape-item cta__shape-item--2">
                <img src={Static.cta4} alt="shape icon" />
              </span>
              <span className="cta__shape-item cta__shape-item--3">
                <img src={Static.cta5} alt="shape icon" />
              </span>
            </div>
          </div>
        </div>
      </section>
      {/* <!-- ===============>> cta section start here <<================= --> */}
    </>
  );
};

export default CtaOne;
