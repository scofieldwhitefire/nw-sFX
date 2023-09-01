import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getFaqs } from "../../features/requests";
import { Static } from "../../assets/images";

const Faq = () => {
  const dispatch = useDispatch();
  const { faqs, loading } = useSelector((state) => state.requests);

  const init = async () => {
    await dispatch(getFaqs({ len: 6 }));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {/* <!-- ===============>> FAQ section start here <<================= --> */}
      <section className="faq padding-top padding-bottom of-hidden">
        <div className="section-header section-header--max65">
          <h2 className="mb-15 mt-minus-5">
            <span>Frequently</span> Asked questions
          </h2>
          <p>
            Hey there! Got questions? We've got answers. Check out our FAQ page
            for all the questions. Still not satisfied? Hit us up.
          </p>
        </div>
        <div className="container">
          <div className="faq__wrapper">
            <div className="row g-5 align-items-center justify-content-between">
              <div className="col-lg-6">
                <div
                  className="accordion accordion--style1"
                  id="faqAccordion1"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="row">
                    {faqs.length
                      ? faqs.map((x, i) => (
                          <div key={x.uuid} className="col-12">
                            <div className="accordion__item ">
                              <div className="accordion__header" id={`faq${i}`}>
                                <button
                                  className="accordion__button"
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
                                data-bs-parent={`#faqAccordion${i}`}
                              >
                                <div className="accordion__body">
                                  <p className="mb-15">{x.answer}</p>
                                </div>
                              </div>
                            </div>
                          </div>
                        ))
                      : "No item found"}
                  </div>
                </div>
              </div>
              <div className="col-lg-6">
                <div
                  className="faq__thumb faq__thumb--style1"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <img className="dark" src={Static.others1} alt="faq-thumb" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="faq__shape faq__shape--style1">
          <span className="faq__shape-item faq__shape-item--1">
            <img src={Static.others2} alt="shape-icon" />
          </span>
        </div>
      </section>
      {/* <!-- ===============>> FAQ section start here <<================= --> */}
    </>
  );
};

export default Faq;
