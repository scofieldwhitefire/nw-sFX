import { Static } from "../../assets/images";
import { Link } from "../../config/libs";

const PageHeader = ({title, page}) => {
  return (
    <>
      {/* <!-- ================> Page header start here <================== --> */}
      <section
        className="page-header bg--cover"
        style={{ backgroundImage: `url(${Static.header1})` }}
      >
        <div className="container">
          <div
            className="page-header__content"
            data-aos="fade-right"
            data-aos-duration="1000"
          >
            <h2>{title}</h2>
            <nav
              style={{ "--bs-breadcrumb-divider": "/" }}
              aria-label="breadcrumb"
            >
              <ol className="breadcrumb mb-0">
                <li className="breadcrumb-item ">
                  <Link to="/">Home</Link>
                </li>
                {/* <span className="bc">/</span>
                <li className="breadcrumb-item ">
                  <a href="index.html">Services</a>
                </li> */}
                <span className="bc">/</span>
                <li className="breadcrumb-item active" aria-current="page">
                  {page}
                </li>
              </ol>
            </nav>
          </div>
          <div className="page-header__shape">
            <span className="page-header__shape-item page-header__shape-item--1">
              <img src={Static.header2} alt="shape-icon" />
            </span>
          </div>
        </div>
      </section>
      {/* <!-- ================> Page header end here <================== --> */}
    </>
  );
};

export default PageHeader;
