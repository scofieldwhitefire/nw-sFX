import ActivityWidget from "../components/molecule/widgets/ActivityWidget";
import BalWidget from "../components/molecule/widgets/BalWidget";
import CryptoTicker from "../components/molecule/widgets/CryptoTicker";
import RecentEarnWidget from "../components/molecule/widgets/RecentEarnWidget";

const index = () => {
  return (
    <>
      <div className="container-fluid content-inner pb-0">
        <CryptoTicker />
        <div className="row pt-2">
          <div className="col-lg-8">
            <div className="row">
              <div className="col-lg-12">
                <div className="row">
                  <BalWidget
                    img={""}
                    title={"Wallet"}
                    amt={92350.01}
                    per={1.3}
                    change={"up"}
                  />
                  <BalWidget
                    img={""}
                    title={"Balance"}
                    amt={350.01}
                    per={60.9}
                    change={"down"}
                  />
                  <BalWidget img={""} title={"Deposited"} amt={92350.01} />
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card">
                  <div className="card-header d-flex justify-content-between flex-wrap gap-3">
                    <div className="header-title">
                      <h4 className="card-title mb-3">Market Overview</h4>
                      <div className="d-flex align-items-center flex-wrap gap-3">
                        <div className="d-flex align-items-center">
                          <div className="form-check active">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault1"
                              checked
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault1"
                            >
                              ETH
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault2"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault2"
                            >
                              XMR
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault3"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault3"
                            >
                              LTC
                            </label>
                          </div>
                        </div>
                        <div className="d-flex align-items-center">
                          <div className="form-check">
                            <input
                              className="form-check-input"
                              type="radio"
                              name="flexRadioDefault"
                              id="flexRadioDefault4"
                            />
                            <label
                              className="form-check-label"
                              for="flexRadioDefault4"
                            >
                              XMR
                            </label>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="dropdown">
                      <a
                        className="btn btn-primary dropdown-toggle mt-2"
                        href="#"
                        role="button"
                        id="dropdownMenuLink"
                        data-bs-toggle="dropdown"
                        aria-expanded="false"
                      >
                        Weekly (2020)
                      </a>
                      <ul
                        className="dropdown-menu"
                        aria-labelledby="dropdownMenuLink"
                      >
                        <li>
                          <a className="dropdown-item" href="#">
                            Weekly (2020)
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Monthly (2020)
                          </a>
                        </li>
                        <li>
                          <a className="dropdown-item" href="#">
                            Today (2020)
                          </a>
                        </li>
                      </ul>
                    </div>
                  </div>

                  <div className="card-body">
                    <div id="apex-candlestick-chart"></div>
                  </div>
                </div>
              </div>
              <div className="col-lg-12">
                <div className="card card-block card-stretch custom-scroll">
                  <div className="card-header d-flex flex-wrap justify-content-between align-items-center gap-3">
                    <div className="caption">
                      <h4 className="font-weight-bold mb-2">
                        Recent Investment Activities
                      </h4>
                    </div>
                    <div
                      className="btn-group"
                      role="group"
                      aria-label="Basic checkbox toggle button group"
                    >
                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck1"
                      />
                      <label
                        className="btn btn-sm btn-secondary active rounded-start"
                        for="btncheck1"
                      >
                        Monthly
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck2"
                      />
                      <label
                        className="btn btn-sm btn-secondary"
                        for="btncheck2"
                      >
                        Weekly
                      </label>

                      <input
                        type="checkbox"
                        className="btn-check"
                        id="btncheck3"
                      />
                      <label
                        className="btn btn-sm btn-secondary rounded-end"
                        for="btncheck3"
                      >
                        Today
                      </label>
                    </div>
                  </div>
                  <div className="card-body">
                    <div className="table-responsive">
                      <table className="table data-table mb-0">
                        <thead>
                          <tr>
                            <th scope="col">plan</th>
                            <th scope="col">Amount</th>
                            <th scope="col">% Profit</th>
                            <th scope="col">Duration</th>
                            <th scope="col">Profit</th>
                            <th scope="col">Start Date</th>
                            <th scope="col">End Date</th>
                            <th scope="col">Status</th>
                            <th scope="col"></th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr className="white-space-no-wrap">
                            <td>
                              <img
                                src="../assets/images/coins/02.png"
                                className="img-fluid avatar avatar-30 avatar-rounded"
                                alt="img23"
                              />
                              Bitcoin BTC
                              <a
                                href="#"
                                className="button btn-primary badge ms-2"
                              >
                                Buy
                              </a>
                            </td>
                            <td className="pe-2">$40,501.87</td>
                            <td className="text-danger">
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 4.5L0.535898 0L7.4641 0L4 4.5Z"
                                  fill="#FF2E2E"
                                />
                              </svg>
                              6.93%
                            </td>
                            <td className="text-success">
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 0.5L7.4641 5H0.535898L4 0.5Z"
                                  fill="#00EC42"
                                />
                              </svg>
                              4.58%
                            </td>
                            <td>$123,456,789,159</td>
                            <td>
                              $373,359,580,155
                              <br />
                              <small className="ms-5">635,237 BTC</small>
                            </td>
                            <td className="ms-5">18,777,768 BTC</td>
                            <td>
                              <div className="d-flex justify-content-between">
                                <div id="sparklinechart-1"></div>
                                <div className="dropdown ms-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="tablist"
                                    width="20"
                                    id="dropdownMenuButton7"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                  </svg>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton7"
                                  >
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Charts
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Markets
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Historical Data
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="white-space-no-wrap">
                            <td>
                              <img
                                src="../assets/images/coins/02.png"
                                className="img-fluid avatar avatar-30 avatar-rounded"
                                alt="img23"
                              />
                              Ethereum ETH
                              <a
                                href="#"
                                className="button btn-primary badge ms-2"
                              >
                                Buy
                              </a>
                            </td>
                            <td className="pe-2">$2,796.60</td>
                            <td className="text-danger">
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 4.5L0.535898 0L7.4641 0L4 4.5Z"
                                  fill="#FF2E2E"
                                />
                              </svg>
                              3.33%
                            </td>
                            <td className="text-success">
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 0.5L7.4641 5H0.535898L4 0.5Z"
                                  fill="#00EC42"
                                />
                              </svg>
                              15.45%
                            </td>
                            <td>$123,456,789,159</td>
                            <td>
                              $373,359,580,155
                              <br />
                              <small className="ms-5">635,237 BTC</small>
                            </td>
                            <td className="ms-5">18,777,768 BTC</td>
                            <td>
                              <div className="d-flex justify-content-between">
                                <div id="sparklinechart-2"></div>
                                <div className="dropdown ms-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    role="tablist"
                                    id="dropdownMenuButton8"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                  </svg>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton8"
                                  >
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Charts
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Markets
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Historical Data
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="white-space-no-wrap">
                            <td>
                              <img
                                src="../assets/images/coins/02.png"
                                className="img-fluid avatar avatar-30 avatar-rounded"
                                alt="img23"
                              />
                              Monero XMR
                              <a
                                href="#"
                                className="button btn-primary badge ms-2"
                              >
                                Buy
                              </a>
                            </td>
                            <td className="pe-2">$1.00</td>
                            <td className="text-success">
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 0.5L7.4641 5H0.535898L4 0.5Z"
                                  fill="#00EC42"
                                />
                              </svg>
                              0.01%
                            </td>
                            <td className="text-danger">
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 4.5L0.535898 0L7.4641 0L4 4.5Z"
                                  fill="#FF2E2E"
                                />
                              </svg>
                              0.02%
                            </td>
                            <td>$123,456,789,159</td>
                            <td>
                              $373,359,580,155
                              <br />
                              <small className="ms-5">635,237 BTC</small>
                            </td>
                            <td className="ms-5">18,777,768 BTC</td>
                            <td>
                              <div className="d-flex justify-content-between">
                                <div id="sparklinechart-3"></div>
                                <div className="dropdown ms-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    role="tablist"
                                    id="dropdownMenuButton9"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                  </svg>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton9"
                                  >
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Charts
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Markets
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Historical Data
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="white-space-no-wrap">
                            <td>
                              <img
                                src="../assets/images/coins/02.png"
                                className="img-fluid avatar avatar-30 avatar-rounded"
                                alt="img23"
                              />
                              Litecoin LTC
                              <a
                                href="#"
                                className="button btn-primary badge ms-2"
                              >
                                Buy
                              </a>
                            </td>
                            <td className="pe-2">$40,501.87</td>
                            <td className="text-danger">
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 4.5L0.535898 0L7.4641 0L4 4.5Z"
                                  fill="#FF2E2E"
                                />
                              </svg>
                              6.93%
                            </td>
                            <td className="text-success">
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 0.5L7.4641 5H0.535898L4 0.5Z"
                                  fill="#00EC42"
                                />
                              </svg>
                              4.58%
                            </td>
                            <td>$123,456,789,159</td>
                            <td>
                              $373,359,580,155
                              <br />
                              <small className="ms-5">635,237 BTC</small>
                            </td>
                            <td className="ms-5">18,777,768 BTC</td>
                            <td>
                              <div className="d-flex justify-content-between">
                                <div id="sparklinechart-4"></div>
                                <div className="dropdown ms-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    role="tablist"
                                    width="20"
                                    id="dropdownMenuButton10"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                  </svg>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton10"
                                  >
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Charts
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Markets
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Historical Data
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>
                          <tr className="white-space-no-wrap">
                            <td>
                              <img
                                src="../assets/images/coins/02.png"
                                className="img-fluid avatar avatar-30 avatar-rounded"
                                alt="img23"
                              />
                              Bitcoin BTC
                              <a
                                href="#"
                                className="button btn-primary badge ms-2"
                              >
                                Buy
                              </a>
                            </td>
                            <td className="pe-2">$40,501.87</td>
                            <td className="text-success">
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 0.5L7.4641 5H0.535898L4 0.5Z"
                                  fill="#00EC42"
                                />
                              </svg>
                              6.93%
                            </td>
                            <td className="text-danger">
                              <svg
                                width="10"
                                height="8"
                                viewBox="0 0 8 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                              >
                                <path
                                  d="M4 4.5L0.535898 0L7.4641 0L4 4.5Z"
                                  fill="#FF2E2E"
                                />
                              </svg>
                              4.58%
                            </td>
                            <td>$123,456,789,159</td>
                            <td>
                              $373,359,580,155
                              <br />
                              <small className="ms-5">635,237 BTC</small>
                            </td>
                            <td className="ms-5">18,777,768 BTC</td>
                            <td>
                              <div className="d-flex justify-content-between">
                                <div id="sparklinechart-5"></div>
                                <div className="dropdown ms-4">
                                  <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="20"
                                    id="dropdownMenuButton11"
                                    role="tablist"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                    fill="none"
                                    viewBox="0 0 24 24"
                                    stroke="currentColor"
                                  >
                                    <path
                                      stroke-linecap="round"
                                      stroke-linejoin="round"
                                      stroke-width="2"
                                      d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
                                    />
                                  </svg>
                                  <ul
                                    className="dropdown-menu"
                                    aria-labelledby="dropdownMenuButton11"
                                  >
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Charts
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Markets
                                      </a>
                                    </li>
                                    <li>
                                      <a className="dropdown-item" href="#">
                                        View Historical Data
                                      </a>
                                    </li>
                                  </ul>
                                </div>
                              </div>
                            </td>
                          </tr>
                        </tbody>
                      </table>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="row">
              <RecentEarnWidget />
              <ActivityWidget title={"Earning History"} />
              <ActivityWidget title={"Activity"} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default index;
