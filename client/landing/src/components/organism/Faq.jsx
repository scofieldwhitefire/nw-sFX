import React from "react";
import { Static } from "../../assets/images";

const Faq = () => {
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
            for all the deets. Still not satisfied? Hit us up.
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
                    <div className="col-12">
                      <div className="accordion__item ">
                        <div className="accordion__header" id="faq1">
                          <button
                            className="accordion__button"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody1"
                            aria-expanded="false"
                            aria-controls="faqBody1"
                          >
                            <span className="accordion__button-content">
                              What does this tool do?
                            </span>
                            <span className="accordion__button-plusicon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody1"
                          className="accordion-collapse collapse show"
                          aria-labelledby="faq1"
                          data-bs-parent="#faqAccordion1"
                        >
                          <div className="accordion__body">
                            <p className="mb-15">
                              Online trading’s primary advantages are that it
                              allows you to manage your trades at your
                              convenience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="accordion__item ">
                        <div className="accordion__header" id="faq2">
                          <button
                            className="accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody2"
                            aria-expanded="true"
                            aria-controls="faqBody2"
                          >
                            <span className="accordion__button-content">
                              What are the disadvantages of online trading?
                            </span>
                            <span className="accordion__button-plusicon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody2"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq2"
                          data-bs-parent="#faqAccordion1"
                        >
                          <div className="accordion__body">
                            <p className="mb-15">
                              You don’t need to worry, the interface is
                              user-friendly. Anyone can use it smoothly. Our
                              user manual will help you to solve your problem.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="accordion__item ">
                        <div className="accordion__header" id="faq3">
                          <button
                            className="accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody3"
                            aria-expanded="false"
                            aria-controls="faqBody3"
                          >
                            <span className="accordion__button-content">
                              Is online trading safe?
                            </span>
                            <span className="accordion__button-plusicon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody3"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq3"
                          data-bs-parent="#faqAccordion1"
                        >
                          <div className="accordion__body">
                            <p className="mb-15">
                              {" "}
                              Online trading’s primary advantages are that it
                              allows you to manage your trades at your
                              convenience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="accordion__item ">
                        <div className="accordion__header" id="faq4">
                          <button
                            className="accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody4"
                            aria-expanded="false"
                            aria-controls="faqBody4"
                          >
                            <span className="accordion__button-content">
                              What is online trading, and how does it work?
                            </span>
                            <span className="accordion__button-plusicon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody4"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq4"
                          data-bs-parent="#faqAccordion1"
                        >
                          <div className="accordion__body">
                            <p className="mb-15">
                              {" "}
                              Online trading’s primary advantages are that it
                              allows you to manage your trades at your
                              convenience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="accordion__item ">
                        <div className="accordion__header" id="faq5">
                          <button
                            className="accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody5"
                            aria-expanded="false"
                            aria-controls="faqBody5"
                          >
                            <span className="accordion__button-content">
                              Which app is best for online trading?
                            </span>
                            <span className="accordion__button-plusicon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody5"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq5"
                          data-bs-parent="#faqAccordion1"
                        >
                          <div className="accordion__body">
                            <p className="mb-15">
                              {" "}
                              Online trading’s primary advantages are that it
                              allows you to manage your trades at your
                              convenience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="accordion__item border-0">
                        <div className="accordion__header" id="faq6">
                          <button
                            className="accordion__button collapsed"
                            type="button"
                            data-bs-toggle="collapse"
                            data-bs-target="#faqBody6"
                            aria-expanded="false"
                            aria-controls="faqBody6"
                          >
                            <span className="accordion__button-content">
                              {" "}
                              How to create a trading account?
                            </span>
                            <span className="accordion__button-plusicon"></span>
                          </button>
                        </div>
                        <div
                          id="faqBody6"
                          className="accordion-collapse collapse"
                          aria-labelledby="faq6"
                          data-bs-parent="#faqAccordion1"
                        >
                          <div className="accordion__body">
                            <p className="mb-15">
                              {" "}
                              Online trading’s primary advantages are that it
                              allows you to manage your trades at your
                              convenience.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
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
