import { Static } from "../../assets/images";

const Roadmap = () => {
  return (
    <>
      {/* <!-- ========== Roadmap Section start Here========== --> */}
      <section
        className="roadmap roadmap--style1 padding-top  padding-bottom bg-color"
        id="roadmap"
      >
        <div className="container">
          <div className="section-header section-header--max50">
            <h2 className="mb-15 mt-minus-5">
              Our <span> Easy Investment</span> Process.
            </h2>
            {/* <p>
              A product roadmap shows the path ahead, helps teams plan, and
              guides the delivery of the product.
            </p> */}
          </div>
          <div className="roadmap__wrapper">
            <div className="row gy-4 gy-md-0 gx-5">
              <div className="col-md-6 offset-md-6">
                <div
                  className="roadmap__item ms-md-4 aos-init aos-animate"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <div className="roadmap__item-inner">
                    <div className="roadmap__item-content">
                      <div className="roadmap__item-header">
                        <h3>Stage 1</h3>
                        <span>Create account</span>
                      </div>
                      <p>
                        Creating and verifying a <i>SafewayFX</i> account takes
                        less than 3 minutes, with minimal details required.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init aos-animate"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <div className="roadmap__item-inner">
                    <div className="roadmap__item-content">
                      <div className="roadmap__item-header">
                        <h3>Stage 2</h3>
                        <span>Choose a Plan</span>
                      </div>
                      <p>
                        <i>SafewayFX</i> is filled with lots of platform{" "}
                        <i>
                          <b>Investment</b>, <b>Trading</b>, <b>Mining</b>,{" "}
                          <b>Loan</b>, <b>Jackpot Games</b>
                        </i>, Select a platform and Choose a plan.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6 offset-md-6">
                <div
                  className="roadmap__item ms-md-4 aos-init"
                  data-aos="fade-left"
                  data-aos-duration="800"
                >
                  <div className="roadmap__item-inner">
                    <div className="roadmap__item-content">
                      <div className="roadmap__item-header">
                        <h3>Stage 3</h3>
                        <span>Deposit and Invest</span>
                      </div>
                      <p>
                        Make your deposit and begin your investment process
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              <div className="col-md-6">
                <div
                  className="roadmap__item roadmap__item--style2 ms-auto me-md-4 aos-init"
                  data-aos="fade-right"
                  data-aos-duration="800"
                >
                  <div className="roadmap__item-inner">
                    <div className="roadmap__item-content">
                      <div className="roadmap__item-header">
                        <h3>Stage 4</h3>
                        <span>Earn and Withdrawal</span>
                      </div>
                      <p>
                        After your investment process is complete, you can withdraw your earnings from your <i>SafewayFX</i> account.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="roadmap__shape">
          <span className="roadmap__shape-item roadmap__shape-item--1">
            <span></span>
          </span>
          <span className="roadmap__shape-item roadmap__shape-item--2">
            <img src={Static.icon1} alt="shape-icon" />
          </span>
        </div>
      </section>
      {/* <!-- ========== Roadmap Section Ends Here========== --> */}
    </>
  );
};

export default Roadmap;
