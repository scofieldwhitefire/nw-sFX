import PageHeader from "../components/molecules/PageHeader";
import { Link } from "../config/libs";
import Helmet from "../components/atom/Helmet";
import Testimonial from "../components/organism/Testimonial";
import { useNavigate } from "react-router-dom";

const Testimonials = () => {
  const navigate = useNavigate();
  const Nav = () => {
    navigate("/testimonials/videos");
  };
  return (
    <>
      <Helmet title={"Testimonials"} />
      <PageHeader title="Testimonials" page="Testimonials" />
      <div className="blog section-bg-color">
        <div className="container">
          <div className="blog__wrapper">
            <div className="row">
              <Testimonial />
            </div>
            <button
              onClick={Nav}
              type="button"
              className="sfx-btn sfx-btn--border sfx-btn--primary my-5 d-block"
            >
              check out video testimonials
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Testimonials;
