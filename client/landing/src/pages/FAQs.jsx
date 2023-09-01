import PageHeader from "../components/molecules/PageHeader";
import ServiceSideBar from "../components/molecules/ServiceSideBar";
import Helmet from "../components/atom/Helmet";
import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFaqs } from "../features/requests";

const FAQs = () => {
  const dispatch = useDispatch();
  const { faqs, loading } = useSelector((state) => state.requests);
  const [faq, setFaq] = useState("General");
  const [data, setData] = useState([]);

  const init = async () => {
    await dispatch(getFaqs({ len: "all" }));
  };

  const switchUp = () => {
    for (let i = 0; i < faqs.length; i++) {
      if (faqs[i].tag === faq) {
        setData(faqs[i].faqs);
      } else {
        setData([]);
      }
    }
  };

  useEffect(() => {
    init();
  }, []);

  useEffect(() => {
    switchUp();
  }, [faqs, faq]);

  return (
    <>
      <Helmet title={"FAQs"} />
      <PageHeader title="FAQs" page="FAQs" />
      {/* <!-- ===============>> Service section start here <<================= --> */}
      <div className="service-details padding-top padding-bottom section-bg-color">
        <div className="container">
          <div className="service-details__wrapper">
            <div className="row flex-lg-row-reverse g-5">
              <div className="col-lg-8">
                <div className="service-details__item">
                  <div className="service-details__item-inner ">
                    <div
                      className="service-details__content"
                      data-aos="fade-up"
                      data-aos-duration="900"
                    >
                      <h3 className="mb-15">
                        <span
                          className="stretched-link"
                          style={{ color: "#00D094" }}
                        >
                          {faq} FAQ
                        </span>
                      </h3>
                    </div>
                    <div
                      className="service-details__faq mt-40"
                      data-aos="fade-up"
                      data-aos-duration="1000"
                    >
                      <div className="faq">
                        <div className="faq__wrapper">
                          <div
                            className="accordion accordion--style1"
                            id="faqAccordion1"
                          >
                            <div className="row">
                              {data.length
                                ? data.map((x, i) => (
                                    <div key={x.uuid} className="col-12">
                                      <div className="accordion__item ">
                                        <div
                                          className="accordion__header"
                                          id={`faq${i}`}
                                        >
                                          <button
                                            className="accordion__button accordion__button--style2"
                                            type="button"
                                            data-bs-toggle="collapse"
                                            data-bs-target={`#faqBody${i}`}
                                            aria-expanded="false"
                                            aria-controls={`faqBody${i}`}
                                          >
                                            <span className="accordion__button-content">
                                              {x.question}
                                            </span>
                                            <span className="accordion__button-plusicon"></span>
                                          </button>
                                        </div>
                                        <div
                                          id={`faqBody${i}`}
                                          className={`accordion-collapse collapse ${
                                            i === 0 && "show"
                                          }`}
                                          aria-labelledby={`faq${i}`}
                                          data-bs-parent="#faqAccordion1"
                                        >
                                          <div className="accordion__body">
                                            <p className="mb-15">{x.answer}</p>
                                          </div>
                                        </div>
                                      </div>
                                    </div>
                                  ))
                                : `No ${faq} Faq data yet.`}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <ServiceSideBar type={"faq"} p={faq} func={setFaq} />
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===============>> Service section start here <<================= --> */}
    </>
  );
};

export default FAQs;
