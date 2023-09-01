import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getBlog } from "../../features/requests";
import { Link } from "../../config/libs";

const Blog = ({len = 7}) => {
  const dispatch = useDispatch();
  const { blogs, loading } = useSelector((state) => state.requests);

  const init = async () => {
    await dispatch(getBlog({ len }));
  };

  useEffect(() => {
    init();
  }, []);

  return (
    <>
      {/* <!-- ===============>> Blog section start here <<================= --> */}
      <section className="blog padding-top padding-bottom">
        <div className="container">
          <div className="section-header d-md-flex align-items-center justify-content-between">
            <div className="section-header__content">
              <h2 className="mb-15">
                <span>articles</span> for our pro traders
              </h2>
              <p className="mb-0">
                Hey there pro traders, check out these articles with tips to
                take your trading game to the next level!
              </p>
            </div>
            {blogs.length > 2 && (
              <div className="section-header__action">
                <div className="swiper-nav swiper-nav--style1">
                  <button className="swiper-nav__btn blog__slider-prev">
                    <i className="fa-solid fa-angle-left"></i>
                  </button>
                  <button className="swiper-nav__btn blog__slider-next active">
                    <i className="fa-solid fa-angle-right"></i>
                  </button>
                </div>
              </div>
            )}
          </div>
          <div
            className="blog__wrapper"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            <div className="blog__slider swiper">
              <div className="swiper-wrapper">
                {blogs.length
                  ? blogs.map((x) => (
                      <div key={x.uuid} className="swiper-slide">
                        <div className="blog__item blog__item--style2">
                          <div className="blog__item-inner">
                            <div className="blog__thumb">
                              <img src={x.photo} alt={`${x.title} - image`} />
                            </div>

                            <div className="blog__content">
                              <div className="blog__meta">
                                {x.tags.map((y, i) => (
                                  <span
                                    key={`B${i}`}
                                    className="blog__meta-tag blog__meta-tag--style1"
                                    style={{ marginRight: "5px" }}
                                  >
                                    {y}
                                  </span>
                                ))}
                              </div>

                              <h5 className="10 style2">
                                <Link to={`/blog/${x.slug}`}>{x.title}</Link>
                              </h5>

                              <p className="mb-15">{x.message}...</p>

                              <div className="blog__writer">
                                <div className="blog__writer-thumb">
                                  <img src={x.img} alt={`${x.author} image`} />
                                </div>
                                <div className="blog__writer-designation">
                                  <h6 className="mb-0">{x.author}</h6>
                                  <span>{x.uploaded}.</span>
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    ))
                  : "No item found"}
              </div>
            </div>
          </div>
          {blogs.length > 1 && (
            <div className="text-center">
              <a
                href="blogs.html"
                className="sfx-btn sfx-btn--border sfx-btn--primary mt-40"
              >
                View more
              </a>
            </div>
          )}
        </div>
        <div className="blog__shape">
          <span className="blog__shape-item blog__shape-item--1">
            <span></span>
          </span>
        </div>
      </section>
      {/* <!-- ===============>> Blog section start here <<================= --> */}
    </>
  );
};

export default Blog;
