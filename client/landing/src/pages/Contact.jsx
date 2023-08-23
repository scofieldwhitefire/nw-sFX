import { Static } from "../assets/images";
import Helmet from "../components/atom/Helmet";
import Social from "../components/atom/Social";
import ContactBloc from "../components/molecules/ContactBloc";
import PageHeader from "../components/molecules/PageHeader";

const Contact = () => {
  return (
    <>
      <Helmet title={"Contact Us"} />
      <PageHeader title="Contact Us" page="Contact Us" />

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
                          <label for="name" class="form-label">
                            Name
                          </label>
                          <input
                            class="form-control"
                            type="text"
                            id="name"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div>
                          <label for="email" class="form-label">
                            Email
                          </label>
                          <input
                            class="form-control"
                            type="email"
                            id="email"
                            placeholder="Email here"
                          />
                        </div>
                      </div>
                      <div class="col-12">
                        <div>
                          <label for="textarea" class="form-label">
                            Message
                          </label>
                          <textarea
                            cols="30"
                            rows="5"
                            class="form-control"
                            id="textarea"
                            placeholder="Enter Your Message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      class="sfx-btn sfx-btn--border sfx-btn--primary mt-4 d-block"
                    >
                      contact us now
                    </button>
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
            {" "}
            <span></span>{" "}
          </span>
        </div>
      </div>
      {/* <!-- ===============>> Contact section start here <<================= --> */}
    </>
  );
};

export default Contact;
