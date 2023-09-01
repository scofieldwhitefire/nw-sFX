import { useState } from "react";
import CryptoTicker from "../components/molecule/widgets/CryptoTicker";

const Withdraw = () => {
  const [step, setStep] = useState(1);
  
  return (
    <>
      <CryptoTicker />
      <div className="row">
        <div className="col-sm-12 col-lg-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Withdraw Funds</h4>
              </div>
            </div>
            <div className="card-body">
              <form id="form-wizard1" className="text-center mt-3">
                {/* <!-- fieldSets --> */}
                <fieldset
                  style={
                    step === 1
                      ? { display: "block", opacity: 1 }
                      : { display: "none", opacity: 0, position: "relative" }
                  }
                >
                  <div className="form-card text-start">
                    <div className="row">
                      <div className="col-7">
                        <h3 className="mb-4">Enter amount to withdraw from Balance:</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            for="validationCustomAmount"
                            className="form-label"
                          >
                            Amount <span className="text-danger">*</span>
                          </label>
                          <div className="form-group input-group">
                            <span
                              className="input-group-text"
                              id="basic-addon1"
                            >
                              $
                            </span>
                            <input
                              type="number"
                              className="form-control"
                              id="validationCustomAmount"
                              aria-label="amount"
                              // value={amt}
                              name="amt"
                              // onChange={onChange}
                              min="50"
                              aria-describedby="basic-addon1"
                              required
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="form-group">
                          <label
                            className="form-label"
                            for="formControlSelect1"
                          >
                            Payment Wallet{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-select"
                            id="formControlSelect1"
                            name="method"
                            // value={method}
                            // onChange={onChange}
                          >
                            <option value="" selected={!!1} disabled={!!1}>
                              -- Select Wallet --
                            </option>
                            <option value="btc">wallet01</option>
                            <option value="bch">wallet02 </option>
                            <option value="eth">Ethereum </option>
                            <option value="xrp">Ripple </option>
                            <option value="ltc">Litecoin </option>
                            <option value="pay">Payeer</option>
                            <option value="ca">CashApp </option>
                            <option value="pp">Paypal </option>
                            <option value="00cc">Credit Card </option>
                            <option value="00dc">Debit Card </option>
                            <option value="00ze">Zelle </option>
                            <option value="00ve">Venmo </option>
                          </select>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* {Number(amt) <= 50 && Number(amt) > 0 && amt !== "" ? (
                    <button
                      type="button"
                      data-bs-toggle="modal"
                      data-bs-target="#modellowAmtWarn"
                      className="btn btn-primary next action-button float-end rounded"
                    >
                      Next
                    </button>
                  ) : (
                    <button
                      type="button"
                      onClick={Next}
                      className="btn btn-primary next action-button float-end rounded"
                    >
                      Next
                    </button>
                  )} */}
                </fieldset>
                <fieldset
                  style={
                    step === 2
                      ? { display: "block", opacity: 1 }
                      : { display: "none", opacity: 0, position: "relative" }
                  }
                >
                  <div className="form-card text-start">
                    <div className="row">
                      <div className="col-7">
                        <h3 className="mb-4">TRANSACTION DETAILS:</h3>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card border-primary">
                          <div className="card-body text-light">
                            <div className="d-flex gap-2 items-align-center">
                              <p className="card-text">Time Left:</p>
                              <h3 className="card-title text-primary">
                                {/* {m}:{s} */}
                              </h3>
                            </div>
                            {/* <p className="card-text">
                              Price of USD/{method.toLocaleUpperCase()} when
                              transaction was initiated is{" "}
                              <b>
                                {nowPrice}
                                {method.toLocaleUpperCase()}
                              </b>
                              .<br />
                              Amount to send is{" "}
                              <strong>
                                {btcx}
                                {method.toLocaleUpperCase()} ={" "}
                                {currency(amt, "d")}
                              </strong>
                            </p>
                            <p className="card-text">
                              Wallet Address:{" "}
                              <span
                                className={icon ? "text-light" : "text-primary"}
                                style={{
                                  borderBottomWidth: "2px",
                                  borderColor: "#fff",
                                }}
                              >
                                {address}
                              </span>
                              <CB
                                className="cbBtn"
                                option-text={getText}
                                onSuccess={onSuccess}
                              >
                                {icon ? (
                                  <CopyDocIcon
                                    className={"text-light iconSize"}
                                  />
                                ) : (
                                  <>
                                    <CopyDocCheckIcon
                                      className={"text-primary iconSize"}
                                    />
                                    <span className="pl-2 text-primary">
                                      copied!
                                    </span>
                                  </>
                                )}
                              </CB>
                            </p>
                            <img
                              src={Static.testImg}
                              className="img-fluid mb-3"
                              alt="Responsive image"
                            /> */}
                            {/* {!upgrade ? (
                              <PlanCardWidget
                                className="col-12 text-center"
                                plan={"WALLET BALANCE"}
                                planNote={
                                  <p>
                                    Your Wallet Balance is {currency(bal)}.{" "}
                                    <br />
                                    This transaction will be credited to your
                                    Wallet Balance.
                                  </p>
                                }
                                showBtn={!!0}
                              />
                            ) : (
                              <PlanCardWidget
                                className="col-12 text-center"
                                plan={"UPGRADE BALANCE"}
                                planNote={"oooooooo"}
                                showBtn={!!0}
                              />
                            )}
                            <PlanCardWidget
                              className="col-12 text-left"
                              plan={"NOTICE!!!"}
                              planNote={
                                <p>
                                  Make sure to send enough to cover any coin
                                  transaction fees!
                                  <br />
                                  Transaction ID:{" "}
                                  <strong>
                                    <a
                                      target="_blank"
                                      href={`https://blockchair.com/bitcoin/transaction/${trans_id}`}
                                    >
                                      {trans_id}
                                    </a>
                                  </strong>
                                </p>
                              }
                              showBtn={!!0}
                            /> */}
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-primary">
                          <div className="card-body text-light">
                            {/* <PlanCardWidget
                              className="col-8 text-left"
                              plan={"What to do next? #1"}
                              planNote={
                                <div className="">
                                  <p>
                                    1) Please send{" "}
                                    <strong className="GpTm4n">
                                      {btcx}
                                      {method.toLocaleUpperCase()}
                                    </strong>{" "}
                                    to address{" "}
                                    <strong className="GpTm4n">
                                      {address}
                                    </strong>
                                    . (Make sure to send enough to cover any
                                    coin transaction fees!) You will need to
                                    initiate the payment using your software or
                                    online wallet and copy/paste the address and
                                    payment amount into it or scan the qr code
                                    to make it faster. We will email you once{" "}
                                    <b className="GpTm4n">
                                      {conf} confirmations is completed
                                    </b>
                                    . You have{" "}
                                    <b className="GpTm4n">
                                      {m} minutes, {s} seconds
                                    </b>{" "}
                                    to completely send the funds. If you send
                                    funds that don't confirm by the timeout or
                                    don't send enough coins you will receive an
                                    automatic email to claim your funds within
                                    12 hours. If you don't receive the email
                                    contact us{" "}
                                    <a href="mailto:help@safewayfx.com">HERE</a>
                                  </p>
                                  <ol type="i">
                                    <li>
                                      <p>
                                        The transaction ID:{" "}
                                        <strong>
                                          <a
                                            target="_blank"
                                            href={`https://blockchair.com/bitcoin/transaction/${trans_id}`}
                                          >
                                            {trans_id}
                                          </a>
                                        </strong>
                                      </p>
                                    </li>
                                    <li>
                                      Payment address to send the funds to{" "}
                                      <b className="GpTm4n">{address}</b>{" "}
                                    </li>
                                    <li>
                                      This verification code:{" "}
                                      <strong className="GpTm4n">{veri}</strong>{" "}
                                      (used to track this transaction .)
                                    </li>
                                  </ol>
                                  <ol type="">
                                    <li>
                                      <b
                                        style={{
                                          color: "red",
                                          fontSize: "24px",
                                        }}
                                      >
                                        ⚠️
                                      </b>{" "}
                                      <b>WARNING</b>{" "}
                                      <b
                                        style={{
                                          color: "red",
                                          fontSize: "24px",
                                        }}
                                      >
                                        ⚠️
                                      </b>{" "}
                                      SafewayFX will not be held accountable for
                                      external dealings. see our{" "}
                                      <a
                                        target="_blank"
                                        href="{% url 'security:dis' %}"
                                      >
                                        Disclaimer here
                                      </a>
                                    </li>
                                  </ol>
                                </div>
                              }
                              showBtn={!!0}
                            />
                            <PlanCardWidget
                              className="col-12 text-left"
                              plan={"What to do next? #2"}
                              planNote={
                                <div className="">
                                  2) After sending payment, review the status of
                                  your transaction on{" "}
                                  <a href="#"> this page. </a> Once the payment
                                  is confirmed several times in the block chain,
                                  the payment will be completed and you will be
                                  notified. The confirmation process usually
                                  takes 30-45 minutes but varies based on the
                                  coin's target block time and number of block
                                  confirms required. The status page is
                                  available for the next 30 days.
                                </div>
                              }
                              showBtn={!!0}
                            />
                            <PlanCardWidget
                              className="col-12 text-left"
                              plan={"What if I accidentally don't send enough?"}
                              planNote={
                                <div className="">
                                  If you don't send enough, that is OK. Just
                                  send the remainder and we will combine them
                                  for you.
                                </div>
                              }
                              showBtn={!!0}
                            /> */}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  {/* <button
                    type="button"
                    onClick={Next}
                    className="btn btn-primary next action-button float-end rounded"
                  >
                    Next
                  </button> */}
                  <button
                    type="button"
                    className="btn btn-dark previous action-button-previous float-end me-3 rounded"
                    // onClick={Prev}
                  >
                    Previous
                  </button>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Withdraw