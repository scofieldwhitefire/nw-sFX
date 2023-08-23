import { useState } from "react";
import { Static } from "../assets/images";
import Helmet from "../components/atom/Helmet";
import Social from "../components/atom/Social";
import ContactBloc from "../components/molecules/ContactBloc";
import PageHeader from "../components/molecules/PageHeader";

const Calculator = () => {
  const [allowed, setAllowed] = useState(!!0);
  return (
    <>
      <Helmet title={"Calculator"} />
      <PageHeader title="Investment Calculator" page="Calculator" />

      {/* <!-- ===============>> Contact section start here <<================= --> */}
      <div class="contact padding-top padding-bottom">
        <div class="container">
          <div class="contact__wrapper">
            <div class="row g-5">
              <div class="col-md-5">
                <div
                  class="contact__info"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div class="contact__social">
                    <h3>
                      let’s <span>get in touch</span>
                      with us
                    </h3>
                    <Social style={"style4"} />
                  </div>
                  <ContactBloc />
                </div>
              </div>
              <div class="col-md-7">
                <div class="contact__form">
                  <form
                    action="https://thetork.com/"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <div class="row g-4">
                      <div class="col-12">
                        <div>
                          <label for="plan" class="form-label">
                            Plan
                          </label>
                          <select class="form-control" id="plan">
                            <option disabled selected>
                              -- Select a Plan --
                            </option>
                            {allowed ? <option value="gold">Gold</option> : ""}
                            <option value="platinum">Platinum</option>
                            <option value="diamond">Diamond</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-12">
                        <div>
                          <label for="subPlan" class="form-label">
                            Sub Plan
                          </label>
                          <select class="form-control" id="subPlan">
                            <option disabled selected>
                              -- Select a Plan --
                            </option>
                            {allowed ? <option value="gold">Gold</option> : ""}
                            <option value="platinum">Platinum</option>
                          </select>
                        </div>
                      </div>
                      <div class="col-6">
                        <div>
                          <label for="amount" class="form-label">
                            Amount
                          </label>
                          <input
                            class="form-control"
                            type="number"
                            id="amount"
                            min={"1"}
                            max={"20"}
                            step={"3"}
                            placeholder="Amount"
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div>
                          <label for="profit" class="form-label">
                            Profit
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            id="profit"
                            placeholder="Profit"
                            disabled
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div>
                          <label for="return" class="form-label">
                            Return
                          </label>
                          <input
                            class="form-control"
                            type="number"
                            id="return"
                            placeholder="Total Return"
                            disabled
                          />
                        </div>
                      </div>
                      <div class="col-6">
                        <div>
                          <label for="duration" class="form-label">
                            Duration
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            id="duration"
                            placeholder="Duration"
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="contact__shape">
          <span class="contact__shape-item contact__shape-item--1">
            <img src={Static.contact4} alt="shape-icon" />
          </span>
          <span class="contact__shape-item contact__shape-item--2">
            <span></span>
          </span>
        </div>
      </div>
      {/* <!-- ===============>> Contact section start here <<================= --> */}
    </>
  );
};

export default Calculator;
