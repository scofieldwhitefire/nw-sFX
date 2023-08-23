import Helmet from "../components/atom/Helmet";
import PageHeader from "../components/molecules/PageHeader";
import { Static } from "../assets/images";
import About from "../components/organism/About";
import Roadmap from "../components/organism/Roadmap";
import CtaOne from "../components/organism/CtaOne";

const AboutUs = () => {
  return (
    <>
      <Helmet title={"About"} />
      <PageHeader title="About" page="About" />

      {/* <!-- ===============>> Story section start here <<================= --> */}
      <div class="story padding-top bg-color-3">
        <div class="container">
          <div class="story__wrapper">
            <div class="story__thumb">
              <div
                class="story__thumb-inner"
                data-aos="fade-up"
                data-aos-duration="800"
              >
                <img src={Static.about4} alt="story-image" />
                <div class="story__thumb-playbtn">
                  <a
                    href="https://www.youtube.com/watch?v=uJSgaPIvgKk&amp;ab_channel=FreeTemplates"
                    data-fslightbox
                  >
                    <i class="fa-solid fa-circle-play"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="story__shape">
          <span class="story__shape-item story__shape-item--1">
            <span></span>
          </span>
        </div>
      </div>
      <About />

      <Roadmap />

      {/* <!-- ===============>> Team section start here <<================= --> */}
      {/* <section class="team padding-top padding-bottom bg-color">
        <div class="section-header section-header--max50">
          <h2 class="mb-15 mt-minus-5">
            Meet our <span>advisers</span>
          </h2>
          <p>
            Hey everyone, meet our amazing advisers! They're here to help and
            guide us through anything.
          </p>
        </div>
        <div class="container">
          <div class="team__wrapper">
            <div class="row g-4 align-items-center">
              <div class="col-sm-6 col-lg-3">
                <div
                  class="team__item team__item--shape"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div class="team__item-inner team__item-inner--shape">
                    <div class="team__item-thumb team__item-thumb--style1">
                      <img
                        src="assets/images/team/1.png"
                        alt="Team Image"
                        class="dark"
                      />
                    </div>
                    <div class="team__item-content team__item-content--style1">
                      <div class="team__item-author team__item-author--style1">
                        <div class="team__item-authorinfo">
                          <h6 class="mb-1">
                            <a href="team-details.html" class="stretched-link">
                              Dianne Russell
                            </a>
                          </h6>
                          <p class="mb-0">Trade Captain</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div
                  class="team__item team__item--shape"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <div class="team__item-inner team__item-inner--shape">
                    <div class="team__item-thumb team__item-thumb--style1">
                      <img
                        src="assets/images/team/2.png"
                        alt="Team Image"
                        class="dark"
                      />
                    </div>
                    <div class="team__item-content team__item-content--style1">
                      <div class="team__item-author team__item-author--style1">
                        <div class="team__item-authorinfo">
                          <h6 class="mb-1">
                            <a href="team-details.html" class="stretched-link">
                              Theresa Webb
                            </a>
                          </h6>
                          <p class="mb-0">Strategic Advisor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div
                  class="team__item team__item--shape"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div class="team__item-inner team__item-inner--shape">
                    <div class="team__item-thumb team__item-thumb--style1">
                      <img
                        src="assets/images/team/3.png"
                        alt="Team Image"
                        class="dark"
                      />
                    </div>
                    <div class="team__item-content team__item-content--style1">
                      <div class="team__item-author team__item-author--style1">
                        <div class="team__item-authorinfo">
                          <h6 class="mb-1">
                            <a href="team-details.html" class="stretched-link">
                              Courtney Henry
                            </a>
                          </h6>
                          <p class="mb-0">Management Consultant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div
                  class="team__item team__item--shape"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <div class="team__item-inner team__item-inner--shape">
                    <div class="team__item-thumb team__item-thumb--style1">
                      <img
                        src="assets/images/team/4.png"
                        alt="Team Image"
                        class="dark"
                      />
                    </div>
                    <div class="team__item-content team__item-content--style1">
                      <div class="team__item-author team__item-author--style1">
                        <div class="team__item-authorinfo">
                          <h6 class="mb-1">
                            <a href="team-details.html" class="stretched-link">
                              Albert Flores
                            </a>
                          </h6>
                          <p class="mb-0">Development Specialist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div
                  class="team__item team__item--shape"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <div class="team__item-inner team__item-inner--shape">
                    <div class="team__item-thumb team__item-thumb--style1">
                      <img
                        src="assets/images/team/5.png"
                        alt="Team Image"
                        class="dark"
                      />
                    </div>
                    <div class="team__item-content team__item-content--style1">
                      <div class="team__item-author team__item-author--style1">
                        <div class="team__item-authorinfo">
                          <h6 class="mb-1">
                            <a href="team-details.html" class="stretched-link">
                              Darrell Steward
                            </a>
                          </h6>
                          <p class="mb-0">Growth Strategist</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div
                  class="team__item team__item--shape"
                  data-aos="fade-up"
                  data-aos-duration="900"
                >
                  <div class="team__item-inner team__item-inner--shape">
                    <div class="team__item-thumb team__item-thumb--style1">
                      <img
                        src="assets/images/team/6.png"
                        alt="Team Image"
                        class="dark"
                      />
                    </div>
                    <div class="team__item-content team__item-content--style1">
                      <div class="team__item-author team__item-author--style1">
                        <div class="team__item-authorinfo">
                          <h6 class="mb-1">
                            <a href="team-details.html" class="stretched-link">
                              Wade Warren
                            </a>
                          </h6>
                          <p class="mb-0">Trade Consultant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div
                  class="team__item team__item--shape"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                >
                  <div class="team__item-inner team__item-inner--shape">
                    <div class="team__item-thumb team__item-thumb--style1">
                      <img
                        src="assets/images/team/7.png"
                        alt="Team Image"
                        class="dark"
                      />
                    </div>
                    <div class="team__item-content team__item-content--style1">
                      <div class="team__item-author team__item-author--style1">
                        <div class="team__item-authorinfo">
                          <h6 class="mb-1">
                            <a href="team-details.html" class="stretched-link">
                              Cody Fisher
                            </a>
                          </h6>
                          <p class="mb-0">HR Consultant</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="col-sm-6 col-lg-3">
                <div
                  class="team__item team__item--shape"
                  data-aos="fade-up"
                  data-aos-duration="1100"
                >
                  <div class="team__item-inner team__item-inner--shape">
                    <div class="team__item-thumb team__item-thumb--style1">
                      <img
                        src="assets/images/team/8.png"
                        alt="Team Image"
                        class="dark"
                      />
                    </div>
                    <div class="team__item-content team__item-content--style1">
                      <div class="team__item-author team__item-author--style1">
                        <div class="team__item-authorinfo">
                          <h6 class="mb-1">
                            <a href="team-details.html" class="stretched-link">
                              Bessie Cooper
                            </a>
                          </h6>
                          <p class="mb-0">Financial Advisor</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div class="text-center">
                <a
                  href="team.html"
                  class="sfx-btn sfx-btn--border sfx-btn--primary mt-25"
                >
                  View more
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <CtaOne />
    </>
  );
};

export default AboutUs;
// 605365766
