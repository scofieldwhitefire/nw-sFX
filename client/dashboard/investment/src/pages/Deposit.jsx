import { useEffect, useState } from "react";
import CryptoTicker from "../components/molecule/widgets/CryptoTicker";
import Model from "../components/molecule/Model";
import { CB, DT, TC, TimeZone, Toast, currency } from "../config/libs";
import { Static } from "../assets/images";
import PlanCardWidget from "../components/molecule/widgets/PlanCardWidget";
import { CopyDocIcon, CopyDocCheckIcon } from "../components/atom/icons";

const init = {
  amt: "",
  method: "",
  upgrade: !!0,
};

const timeInit = {
  min: 30,
  sec: 30,
};
const Deposit = () => {
  const [bal, setBal] = useState(0);
  const [nowPrice, setNowPrice] = useState(0);
  const [btcx, setBtcx] = useState(0);
  const [address, setAddress] = useState("1FfmbHfnpaZjKFvyi1okTjJJusN455paPH");
  const [trans_id, setTrans_id] = useState(
    "9f3f0c8a347d9a08de5392467463731b51317c786d4f02386a967e6e4bce261e"
  );
  const [veri, setVeri] = useState("c8a3a261e");
  const [conf, setConf] = useState(3);
  const [m, setM] = useState(timeInit.min);
  const [s, setS] = useState(timeInit.sec);
  const [ints, setInts] = useState([]);

  const [icon, setIcon] = useState(!!1);

  const [step, setStep] = useState(1);
  const [data, setData] = useState(init);

  const { amt, method, upgrade } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const onCheck = (e) => {
    setData({ ...data, upgrade: e.target.checked });
  };

  const onSuccess = () => {
    const save = icon;
    setIcon(!!0);

    setTimeout(() => {
      setIcon(!!1);
    }, 3000);
  };

  const getText = () => {
    return address;
  };

  const Timer = (end = !!0) => {
    var distance
    // if (end) {
    //   distance = -1
    // }
    const t = TimeZone.plus({ minutes: 1 }).plus({ seconds: 30 }).toString();
    const dt = DT.fromISO(t).toFormat("DD");
    const tm = DT.fromISO(t).toFormat("TT");

    // Set the date we're counting down to
    var countDownDate = new Date(`${dt} ${tm}`).getTime();

    // Update the count down every 1 second
    var x = setInterval(function () {
      // Get today's date and time
      var now = new Date().getTime();

      // Find the distance between now and the count down date
      distance = countDownDate - now;
      console.log(distance)

      // Time calculations for days, hours, minutes and seconds
      var days = Math.floor(distance / (1000 * 60 * 60 * 24));
      var hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      var seconds = Math.floor((distance % (1000 * 60)) / 1000);

      // Display the result in the element with id="demo"
      // document.getElementById("demo").innerHTML = days + "d " + hours + "h "
      // + minutes + "m " + seconds + "s ";
      if (String(minutes).length === 1) minutes = `0${minutes}`;
      if (String(seconds).length === 1) seconds = `0${seconds}`;
      setM(minutes);
      setS(seconds);

      // If the count down is finished, write some text
      if (minutes === '00' && seconds == '00') {
        clearInterval(x);
        location.reload();
      }

      
    }, 1000);
  };

  const Next = () => {
    Toast();
    let err = [];
    if (step === 1) {
      if (amt === "") {
        err.push("Amount is required");
      }
      if (amt.length && Number(amt) === 0) {
        err.push("Deposit amount can't be 0");
      }
      if (method === "") {
        err.push("Please select a payment method");
      }
    }
    if (err.length) {
      err.map((x) => {
        Toast("error", x);
      });
      return 0;
    }
    setStep(step + 1);
  };
  const Prev = () => {
    setStep(step - 1);
  };
  useEffect(() => {
    step === 2 && Timer();
  }, [step]);

  // useEffect(() => {
  //   step === 1 && Timer(!!1);
  // }, [data]);

  return (
    <>
      <TC />
      <CryptoTicker />
      <div className="row">
        <div className="col-sm-12 col-lg-12">
          <div className="card">
            <div className="card-header d-flex justify-content-between">
              <div className="header-title">
                <h4 className="card-title">Deposit Funds</h4>
              </div>
            </div>
            <div className="card-body">
              <form id="form-wizard1" className="text-center mt-3">
                <ul id="top-tab-list" className="p-0 row list-inline">
                  <li
                    className={`col-lg-3 col-md-6 text-start mb-2 ${
                      step === 1 && "active"
                    } ${step > 1 && "active done"}`}
                    id="account"
                  >
                    <a href="#">
                      <div className="iq-icon me-3">
                        <svg
                          className="svg-icon"
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M8 11V7a4 4 0 118 0m-4 8v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2z"
                          />
                        </svg>
                      </div>
                      <span>Amount</span>
                    </a>
                  </li>
                  <li
                    id="personal"
                    className={`col-lg-3 col-md-6 text-start mb-2 ${
                      step === 2 && "active"
                    } ${step > 2 && "active done"}`}
                  >
                    <a href="#">
                      <div className="iq-icon me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z"
                          />
                        </svg>
                      </div>
                      <span>Transfer</span>
                    </a>
                  </li>
                  <li
                    id="payment"
                    className={`col-lg-3 col-md-6 text-start mb-2 ${
                      step === 3 && "active"
                    } ${step > 3 && "active done"}`}
                  >
                    <a href="#">
                      <div className="iq-icon me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </div>
                      <span>Track</span>
                    </a>
                  </li>
                  <li
                    id="confirm"
                    className={`col-lg-3 col-md-6 text-start mb-2 ${
                      step === 4 && "active"
                    } ${step > 4 && "active done"}`}
                  >
                    <a href="#">
                      <div className="iq-icon me-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="20"
                          width="20"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M5 13l4 4L19 7"
                          />
                        </svg>
                      </div>
                      <span>Finished</span>
                    </a>
                  </li>
                </ul>
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
                        <h3 className="mb-4">Enter amount to fund wallet:</h3>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Stage 1 - 4</h2>
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
                              value={amt}
                              name="amt"
                              onChange={onChange}
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
                            Payment Method{" "}
                            <span className="text-danger">*</span>
                          </label>
                          <select
                            className="form-select"
                            id="formControlSelect1"
                            name="method"
                            value={method}
                            onChange={onChange}
                          >
                            <option value="" selected={!!1} disabled={!!1}>
                              -- Select Payment Method --
                            </option>
                            <option value="btc">Bitcoin</option>
                            <option value="bch">Bitcoin Cash </option>
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
                      <div className="col-md-6">
                        <div className="form-group">
                          <input
                            className="form-check-input"
                            type="checkbox"
                            onClick={onCheck}
                            id="flexCheckDefault11"
                            checked={upgrade}
                          />
                          <label
                            className="form-check-label pl-4"
                            for="flexCheckDefault11"
                          >
                            {" "}
                            Add to Upgrade wallet?
                          </label>
                        </div>
                      </div>
                    </div>
                  </div>
                  {Number(amt) <= 50 && Number(amt) > 0 && amt !== "" ? (
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
                  )}
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
                      <div className="col-5">
                        <h2 className="steps">Stage 2 - 4</h2>
                      </div>
                    </div>
                    <div className="row">
                      <div className="col-md-6">
                        <div className="card border-primary">
                          <div className="card-body text-light">
                            <div className="d-flex gap-2 items-align-center">
                              <p className="card-text">Time Left:</p>
                              <h3 className="card-title text-primary">
                                {m}:{s}
                              </h3>
                            </div>
                            <p className="card-text">
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
                            />
                            {!upgrade ? (
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
                            />
                          </div>
                        </div>
                      </div>
                      <div className="col-md-6">
                        <div className="card border-primary">
                          <div className="card-body text-light">
                            <PlanCardWidget
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
                            />
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
                    onClick={Prev}
                  >
                    Previous
                  </button>
                </fieldset>
                <fieldset
                  style={
                    step === 3
                      ? { display: "block", opacity: 1 }
                      : { display: "none", opacity: 0, position: "relative" }
                  }
                >
                  <div className="form-card text-start">
                    <div className="row">
                      <div className="col-7">
                        <h3 className="mb-4">Image Upload:</h3>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Stage 3 - 4</h2>
                      </div>
                    </div>
                    <div className="form-group">
                      <label className="form-label">Upload Your Photo:</label>
                      <input
                        type="file"
                        className="form-control"
                        name="pic"
                        accept="image/*"
                      />
                    </div>
                    <div className="form-group">
                      <label className="form-label">
                        Upload Signature Photo:
                      </label>
                      <input
                        type="file"
                        className="form-control"
                        name="pic-2"
                        accept="image/*"
                      />
                    </div>
                  </div>
                  <button
                    type="button"
                    onClick={Next}
                    className="btn btn-primary next action-button float-end rounded"
                    value="Submit"
                  >
                    Submit
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark previous action-button-previous float-end me-3 rounded"
                    onClick={Prev}
                  >
                    Previous
                  </button>
                </fieldset>
                <fieldset
                  style={
                    step === 4
                      ? { display: "block", opacity: 1 }
                      : { display: "none", opacity: 0, position: "relative" }
                  }
                >
                  <div className="form-card">
                    <div className="row">
                      <div className="col-7">
                        <h3 className="mb-4 text-left">Finish:</h3>
                      </div>
                      <div className="col-5">
                        <h2 className="steps">Stage 4 - 4</h2>
                      </div>
                    </div>
                    <br />
                    <br />
                    <h2 className="text-success text-center">
                      <strong>SUCCESS !</strong>
                    </h2>
                    <br />
                    <div className="row justify-content-center">
                      <div className="col-3">
                        {" "}
                        <img
                          src="../../assets/images/pages/img-success.png"
                          className="img-fluid"
                          alt="fit-image"
                        />{" "}
                      </div>
                    </div>
                    <br />
                    <br />
                    <div className="row justify-content-center">
                      <div className="col-7 text-center">
                        <h5 className="purple-text text-center">
                          You Have Successfully Signed Up
                        </h5>
                      </div>
                    </div>
                  </div>
                </fieldset>
              </form>
            </div>
          </div>
        </div>
      </div>
      <Model
        title="Low Amount Warning"
        id="lowAmtWarn"
        message={
          <p>
            <b>WARNING</b> Any deposit less than <b>$50</b> will not be credited
            to your account.
          </p>
        }
        btnMsg="Proceed"
        func={Next}
      />
    </>
  );
};

export default Deposit;
