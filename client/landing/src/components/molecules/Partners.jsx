import { Static } from "../../assets/images";

const Partners = () => {
  return (
    <>
      {/* <!-- ===============>> partner section start here <<================= --> */}
      <div className="partner partner--gradient">
        <div className="container">
          <div className="partner__wrapper">
            <div className="partner__slider swiper">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <div className="partner__item">
                    <div className="partner__item-inner">
                      <img
                        src={Static.partner1}
                        alt="partner logo"
                        className="dark"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="partner__item">
                    <div className="partner__item-inner">
                      <img
                        src={Static.partner2}
                        alt="partner logo"
                        className="dark"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="partner__item">
                    <div className="partner__item-inner">
                      <img
                        src={Static.partner3}
                        alt="partner logo"
                        className="dark"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="partner__item">
                    <div className="partner__item-inner">
                      <img
                        src={Static.partner4}
                        alt="partner logo"
                        className="dark"
                      />
                    </div>
                  </div>
                </div>
                <div className="swiper-slide">
                  <div className="partner__item">
                    <div className="partner__item-inner">
                      <img
                        src={Static.partner5}
                        alt="partner logo"
                        className="dark"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===============>> partner section end here <<================= --> */}
    </>
  );
};

export default Partners;
