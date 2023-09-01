import PageHeader from "../components/molecules/PageHeader";
import { Link } from "../config/libs";
import Helmet from "../components/atom/Helmet";

const Career = () => {
  return (
    <>
      <Helmet title={"Careers"} />
      <PageHeader title="Careers" page="Careers" />
      <div className="error padding-top padding-bottom sec-bg-color2">
        <div className="container">
          <div className="error__wrapper">
            <div
              className="error__inner"
              data-aos="fade-up"
              data-aos-duration="800"
            >
              <div className="error__content text-center">
                <h2>
                  <span>ooops!</span> no content yet
                </h2>
                <p>
                  Check back later for new content.
                </p>
                <Link
                  to="/"
                  reloadDocument
                  className="sfx-btn sfx-btn--border sfx-btn--primary"
                >
                  Back to home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Career;
