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
      <div className="contact padding-top padding-bottom">
        <div className="container">
          <div className="contact__wrapper">
            <div className="row g-5">
              <div className="col-md-5">
                <div
                  className="contact__info"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="contact__social">
                    <h3>
                      let’s <span>get in touch</span>{" "}
                      with us
                    </h3>
                    <Social style={"style4"} />
                  </div>
                  <ContactBloc />
                </div>
              </div>
              <div className="col-md-7">
                <div className="contact__form">
                  <form
                    action="https://thetork.com/"
                    data-aos="fade-left"
                    data-aos-duration="1000"
                  >
                    <div className="row g-4">
                      <div className="col-12">
                        <div>
                          <label for="name" className="form-label">
                            Name
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="name"
                            placeholder="Full Name"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div>
                          <label for="email" className="form-label">
                            Email
                          </label>
                          <input
                            className="form-control"
                            type="email"
                            id="email"
                            placeholder="Email here"
                          />
                        </div>
                      </div>
                      <div className="col-12">
                        <div>
                          <label for="textarea" className="form-label">
                            Message
                          </label>
                          <textarea
                            cols="30"
                            rows="5"
                            className="form-control"
                            id="textarea"
                            placeholder="Enter Your Message"
                          ></textarea>
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="sfx-btn sfx-btn--border sfx-btn--primary mt-4 d-block"
                    >
                      contact us now
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__shape">
          <span className="contact__shape-item contact__shape-item--1">
            <img src={Static.contact4} alt="shape-icon" />
          </span>
          <span className="contact__shape-item contact__shape-item--2">
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
