const RecentEarnWidget = () => {
  return (
    <>
      <div className="col-md-12">
        <div className="card">
          <div className="card-header d-flex justify-content-between align-items-center flex-wrap gap-3">
            <div className="header-title">
              <h4 className="card-title">Recent Earnings</h4>
            </div>
            <div className="dropdown">
              <a
                href="#"
                className="btn btn-primary dropdown-toggle"
                id="dropdownMenuButton12"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                This Week
              </a>
              <ul
                className="dropdown-menu dropdown-menu-end"
                aria-labelledby="dropdownMenuButton12"
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
          </div>
          <div className="card-body">
            <div className="d-flex flex-wrap align-items-center justify-content-between">
              <div
                id="multiple-radialbar-chart"
                className="col-md-8 col-lg-8 multiple-radialbar-chart"
              ></div>
              <div className="d-grid gap col-md-4 col-lg-4">
                <div className="d-flex align-items-start">
                  <svg
                    className="mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    viewBox="0 0 24 24"
                    fill="#00EC42"
                  >
                    <g>
                      <circle cx="12" cy="12" r="8" fill="#00EC42"></circle>
                    </g>
                  </svg>
                  <div className="ms-3">
                    <span className="text-light">Bitcoin</span>
                  </div>
                </div>
                <div className="d-flex align-items-start">
                  <svg
                    className="mt-2"
                    xmlns="http://www.w3.org/2000/svg"
                    width="14"
                    viewBox="0 0 24 24"
                    fill="#FF2E2E"
                  >
                    <g>
                      <circle cx="12" cy="12" r="8" fill="#FF2E2E"></circle>
                    </g>
                  </svg>
                  <div className="ms-3">
                    <span className="text-light">Litecoin</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default RecentEarnWidget