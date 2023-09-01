import Helmet from "../components/atom/Helmet";
import PageHeader from "../components/molecules/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { getAllBlog } from "../features/requests";
import { Link } from "../config/libs";
import Social from "../components/atom/Social";

const Blog = () => {
  const dispatch = useDispatch();
  const { allBlogs, loading } = useSelector((state) => state.requests);

  let [page, setPage] = useState(1);

  const SwitchUp = (e) => {
    e.preventDefault();
    setPage(page++);
  };

  const SwitchDown = (e) => {
    e.preventDefault();
    setPage(page--);
  };

  const init = async () => {
    await dispatch(getAllBlog({ len: page }));
  };

  useEffect(() => {
    init();
  }, [page]);

  return (
    <>
      <Helmet title={"All Blogs"} />
      <PageHeader title="All Blogs" page="Blogs" />

      {/* <!-- ===============>> Blogs section start here <<================= --> */}
      <div className="blog padding-top padding-bottom section-bg-color">
        <div className="container">
          <div className="blog__wrapper">
            <div className="row g-5">
              <div className="col-lg-8">
                <div className="row g-4">
                  {!loading && allBlogs.blogs.length
                    ? allBlogs.blogs.map((x) => (
                        <div key={x.uuid} className="col-sm-6">
                          <div className="blog__item">
                            <div className="blog__item-inner blog__item-inner--style2">
                              <div className="blog__thumb">
                                <img src={x.photo} alt={`${x.title} - image`} />
                              </div>

                              <div className="blog__content">
                                <div className="blog__meta">
                                  {x.tags.map((y, i) => (
                                    <span
                                      key={`aB${i}`}
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
                                    <img
                                      src={x.img}
                                      alt={`${x.author} image`}
                                    />
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
                    : "loading..."}
                </div>
                <div
                  className="paginations"
                  data-aos="fade-up"
                  data-aos-duration="800"
                >
                  <ul className="lab-ul d-flex flex-wrap justify-content-center mb-1">
                    <li onClick={SwitchDown}>
                      <a href="#">
                        <i className="fa-solid fa-angle-left me-2"></i> Prev
                      </a>
                    </li>
                    <li>
                      <a href="#" className="active">
                        1
                      </a>
                    </li>
                    <li className="d-none d-sm-block">
                      <a href="#">2</a>
                    </li>
                    <li className="d-none d-sm-block">
                      <a href="#">3</a>
                    </li>
                    <li>
                      <a href="#" className="dot">
                        ...
                      </a>
                    </li>
                    <li>
                      <a href="#">12</a>
                    </li>
                    <li>
                      <a href="#" className="active" onClick={SwitchUp}>
                        Next <i className="fa-solid fa-angle-right ms-2"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
              <div className="col-lg-4 col-md-8  col-12">
                <div
                  className="sidebar"
                  data-aos="fade-left"
                  data-aos-duration="1000"
                >
                  <div className="row g-4">
                    <div className="col-12">
                      <div className="sidebar__search">
                        <h6 className="mb-10">Search Here</h6>
                        <div className="sidebar__search-body">
                          <form className="" action="#">
                            <div className="input">
                              <input
                                type="text"
                                className="form-control"
                                placeholder="Search articles"
                              />
                              <button type="submit" className="search-btn">
                                <i className="fa-solid fa-magnifying-glass"></i>
                              </button>
                            </div>
                          </form>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="sidebar__categorie">
                        <div className="sidebar__head">
                          <h6>Categories</h6>
                        </div>
                        <div className="sidebar__categorie-body">
                          <div className="sidebar__categorie-content">
                            <ul>
                              <li className="active">
                                <a href="#">Large-cap stocks.</a>
                                <span>2</span>
                              </li>
                              <li>
                                <a href="#">Value stocks</a>
                                <span>4</span>
                              </li>
                              <li>
                                <a href="#">IPO stocks</a>
                                <span>3</span>
                              </li>
                              <li>
                                <a href="#">Dividend stocks</a>
                                <span>5</span>
                              </li>
                              <li>
                                <a href="#">Non-dividend stocks</a>
                                <span>1</span>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="sidebar__recentpost">
                        <div className="sidebar__head">
                          <h6>Top Post</h6>
                        </div>
                        <div className="sidebar__recentpost-body">
                          <ul>
                            {allBlogs.topPost.map((x) => (
                              <li key={x.uuid}>
                                <div className="sidebar__recentpost-item">
                                  <div className="sidebar__recentpost-inner">
                                    <div className="sidebar__recentpost-thumb">
                                      <a href="blog-details.html">
                                        <img
                                          src={x.photo}
                                          alt={`${x.title} recentpost-image`}
                                        />
                                      </a>
                                    </div>
                                    <div className="sidebar__recentpost-content">
                                      <p>
                                        <Link to={`/blog/${x.slug}`}>
                                          {x.title}
                                        </Link>
                                      </p>
                                      <span>{x.uploaded}</span>
                                    </div>
                                  </div>
                                </div>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="sidebar__tags">
                        <div className="sidebar__head">
                          <h6>Popular Tag</h6>
                        </div>
                        <div className="sidebar__tags-body">
                          <div className="tags">
                            <ul>
                              {allBlogs.tags.map((x, i) => (
                                <li key={`t${i}`}>
                                  <Link
                                    to="#"
                                    className={i === 0 ? "active" : ""}
                                  >
                                    {x}
                                  </Link>
                                </li>
                              ))}
                              {allBlogs.tags.length > 10 && (
                                <li>
                                  <Link
                                    to="#"
                                  >
                                    see all
                                  </Link>
                                </li>
                              )}
                            </ul>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-12">
                      <div className="sidebar__social">
                        <div className="sidebar__head">
                          <h6>Social Links</h6>
                        </div>
                        <div className="sidebar__social-body">
                          <div className="sidebar__social-content">
                            <Social others="mt-25" style={"style2"} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- ===============>> Blogs section start here <<================= --> */}
    </>
  );
};

export default Blog;
