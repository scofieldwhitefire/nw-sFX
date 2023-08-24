import { currency } from "../../../config/libs";

const BalWidget = ({ img, title, amt=0, hasDrop = !!0, per=0, change='' }) => {
  return (
    <>
      <div className="col-lg-4">
        <div className="card shining-card">
          <div className="card-body">
            <div className="d-flex justify-content-between align-items-center">
              <div className="d-flex align-items-center gap-2">
                <img
                  src={img}
                  className="img-fluid avatar avatar-30 avatar-rounded"
                  alt="img60"
                />
                <span className="fs-5 me-2">{title}</span>
                <svg
                  width="36"
                  height="35"
                  viewBox="0 0 36 35"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M3.86124 21.6224L11.2734 16.8577C11.6095 16.6417 12.041 16.6447 12.3718 16.8655L18.9661 21.2663C19.2968 21.4871 19.7283 21.4901 20.0644 21.2741L27.875 16.2534"
                    stroke="#1aa053"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M26.7847 13.3246L31.6677 14.0197L30.4485 18.7565L26.7847 13.3246ZM30.2822 19.4024C30.2823 19.4023 30.2823 19.4021 30.2824 19.402L30.2822 19.4024ZM31.9991 14.0669L31.9995 14.0669L32.0418 13.7699L31.9995 14.0669C31.9994 14.0669 31.9993 14.0669 31.9991 14.0669Z"
                    fill="#1aa053"
                    stroke="#1aa053"
                  />
                </svg>
              </div>
              {hasDrop ? (
                <div className="dropdown">
                  <a
                    href="#"
                    className="text-gray"
                    id="dropdownMenuButton36"
                    data-bs-toggle="dropdown"
                    aria-expanded="true"
                  >
                    <svg
                      width="22"
                      height="5"
                      viewBox="0 0 22 5"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fill-rule="evenodd"
                        clip-rule="evenodd"
                        d="M19.6788 5C20.9595 5 22 3.96222 22 2.68866C22 1.41318 20.9595 0.373465 19.6788 0.373465C18.3981 0.373465 17.3576 1.41318 17.3576 2.68866C17.3576 3.96222 18.3981 5 19.6788 5ZM11.0005 5C12.2812 5 13.3217 3.96222 13.3217 2.68866C13.3217 1.41318 12.2812 0.373465 11.0005 0.373465C9.71976 0.373465 8.67929 1.41318 8.67929 2.68866C8.67929 3.96222 9.71976 5 11.0005 5ZM4.64239 2.68866C4.64239 3.96222 3.60192 5 2.3212 5C1.04047 5 0 3.96222 0 2.68866C0 1.41318 1.04047 0.373465 2.3212 0.373465C3.60192 0.373465 4.64239 1.41318 4.64239 2.68866Z"
                        fill="#B3B3B7"
                      ></path>
                    </svg>
                  </a>
                  <ul
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="dropdownMenuButton36"
                    style={{
                      position: "absolute",
                      inset: "0px 0px auto auto",
                      margin: "0px",
                      transform: "translate(0px, 23px)",
                    }}
                    data-popper-placement="bottom-end"
                  >
                    <li>
                      <a className="dropdown-item" href="#">
                        This Week
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Month
                      </a>
                    </li>
                    <li>
                      <a className="dropdown-item" href="#">
                        This Year
                      </a>
                    </li>
                  </ul>
                </div>
              ) : (
                ""
              )}
            </div>
            <div className="pt-3">
              <h4 className="counter" style={{ visibility: "visible" }}>
                {currency(amt)}
              </h4>
              <div className="pt-3">
                <small
                  className={`text-${
                    change === "up"
                      ? "success"
                      : change === "down"
                      ? "danger"
                      : "light"
                  }`}
                >
                  {change === "up"
                    ? "+"
                    : change === "down"
                    ? "-"
                    : ""}{" "}
                  {per}%
                </small>
                <small className="ms-2">(Since last)</small>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default BalWidget;
