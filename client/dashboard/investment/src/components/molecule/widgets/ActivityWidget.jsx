const ActivityWidget = ({title, data=[]}) => {
  return (
    <>
      <div className="col-lg-12">
        <div className="card">
          <div className="card-header">
            <div className="header-title">
              <h4 className="card-title">{title}</h4>
            </div>
          </div>
          <div className="card-body">
            <ul className="list-inline m-0 p-0">
              <li className="d-flex align-items-center pt-3">
                <div className="d-flex justify-content-between rounded-pill gap-3 flex-wrap flex-md-nowrap">
                  <img
                    src="../assets/images/coins/01.png"
                    className="img-fluid avatar avatar-40 avatar-rounded"
                    alt="img6"
                  />
                  <div className="flex-grow-1">
                    <h5 className="mb-2 d-inline-block">Bitcoin</h5>
                    <p className="text-success mb-2 d-inline-block ms-1">
                      +$10,00
                    </p>
                    <p className="fs-6">
                      Bitcoins Evolution™. 234000 Satisfied Customers From 107
                      Countries.
                    </p>
                  </div>
                  <div className="">
                    <p>11/02/21</p>
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-center pt-3">
                <div className="d-flex justify-content-between rounded-pill gap-3 flex-wrap flex-md-nowrap">
                  <img
                    src="../assets/images/coins/09.png"
                    className="img-fluid avatar avatar-40 avatar-rounded"
                    alt="img7"
                  />
                  <div className="flex-grow-1">
                    <h5 className="mb-2 d-inline-block">Ethereum</h5>
                    <p className="text-danger mb-2 d-inline-block ms-1">
                      -$50,00
                    </p>
                    <p className="fs-6">
                      Ethereum is a decentralized, blockchain with smart
                      contract functionality
                    </p>
                  </div>
                  <div className="">
                    <p>11/02/21</p>
                  </div>
                </div>
              </li>
              <li className="d-flex align-items-center pt-3">
                <div className="d-flex justify-content-between rounded-pill gap-3 flex-wrap flex-md-nowrap">
                  <img
                    src="../assets/images/coins/06.png"
                    className="img-fluid avatar avatar-40 avatar-rounded"
                    alt="img8"
                  />
                  <div className="flex-grow-1">
                    <h5 className="mb-2 d-inline-block">Litecoin</h5>
                    <p className="text-danger mb-2 d-inline-block ms-1">
                      -$50,00
                    </p>
                    <p className="fs-6">
                      Litecoin is a peer-to-peer cryptocurrency and open-source
                      software
                    </p>
                  </div>
                  <div className="">
                    <p>11/02/21</p>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </>
  );
}

export default ActivityWidget