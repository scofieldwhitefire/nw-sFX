import { useEffect, useState } from "react";
import { Static } from "../assets/images";
import Helmet from "../components/atom/Helmet";
import Social from "../components/atom/Social";
import ContactBloc from "../components/molecules/ContactBloc";
import PageHeader from "../components/molecules/PageHeader";
import { useDispatch, useSelector } from "react-redux";
import { Calculate } from "../features/requests";
import { TC, Toast, currency } from "../config/libs";
import Pagination from "../components/molecules/Pagination";

const initData = {
  plan: "",
  subPlan: "",
  amt: "",
};

const Calculator = () => {
  const dispatch = useDispatch();
  const { cals } = useSelector((state) => state.requests);

  const [allowed, setAllowed] = useState(!!0);

  const [data, setData] = useState(initData);
  const [profit, setProfit] = useState("");
  const [ret, setRet] = useState("");
  const [duration, setDuration] = useState("");

  const { plan, subPlan, amt } = data;

  const onChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const Send = async () => {
    if (plan !== "") {
      request();
      reSet();
    }
  };

  const request = async () => {
    const res = await dispatch(Calculate({ plan }));
  };

  const Cal = () => {
    if (cals.subPlans.length && subPlan === "") {
      Toast("error", "Select a Sub plan.");
      return 0;
    }

    if (cals.subPlans.length && amt !== "") {
      Toast();
      let sp = cals.subPlans.filter((x) => x.name === subPlan);
      sp = sp[0];

      if (Number(amt) < sp.min) {
        const e = `Less than Minimum of ${currency(sp.min, "d")}`;
        Toast("error", e);
        setResult(!!1, e, e, e);
        return 0;
      }
      if (Number(amt) > sp.max) {
        const e = `Higher than Maximum of ${currency(sp.max, "d")}`;
        Toast("error", e);
        setResult(!!1, e, e, e);
        return 0;
      } else {
        setResult();
        const profit = Number(amt) * sp.multiplier;
        const total = profit + Number(amt);

        setResult(!!1, profit, total, sp.duration);
      }
    }
  };

  const setResult = (r = !!0, x = null, y = null, z = null) => {
    r
      ? (x !== null && setProfit(x),
        y !== null && setRet(y),
        z !== null && setDuration(z))
      : (setProfit(""), setRet(""), setDuration(""));
  };

  const reSet = () => {
    setData({ ...data, amt: "" });
    setResult();
  };

  const reSetTwo = () => {
    plan !== "" && setData({ ...data, subPlan: cals.subPlans[0].name });
  };

  const onSubmit = () => {
    // navigate to registration page
  };

  useEffect(() => {
    Send();
  }, [plan]);

  useEffect(() => {
    reSet();
  }, [subPlan]);

  useEffect(() => {
    Cal();
  }, [amt]);

  useEffect(() => {
    reSetTwo();
  }, [cals.subPlans]);

  return (
    <>
      <TC />
      <Helmet title={"Calculator"} />
      <PageHeader title="Investment Calculator" page="Calculator" />

      {/* <!-- ===============>> Contact section start here <<================= --> */}
      <div className="contact padding-top padding-bottom">
        <div className="container">
          <div className="contact__wrapper">
            <div className="row g-5">
              <div className="col-md-5">
                <div
                  className="contact__info"
                  data-aos="fade-right"
                  data-aos-duration="1000"
                >
                  <div className="contact__social">
                    <h3>
                      let’s <span>get in touch</span> with us
                    </h3>
                    <Social style={"style4"} />
                  </div>
                  <ContactBloc />
                </div>
              </div>
              <div className="col-md-7">
                <div className="contact__form">
                  <form
                    data-aos="fade-left"
                    data-aos-duration="1000"
                    onSubmit={onSubmit}
                  >
                    <div className="row g-4">
                      <div className="col-12">
                        <div>
                          <label htmlFor="plan" className="form-label">
                            Plan
                          </label>
                          <select
                            className="form-control"
                            id="plan"
                            onChange={onChange}
                            name="plan"
                            value={plan}
                          >
                            <option selected={!!1} disabled={!!1} value={""}>
                              -- Select a Plan --
                            </option>
                            {allowed ? (
                              <option value={"Gold"}>Gold</option>
                            ) : (
                              ""
                            )}
                            <option value={"Platinum"}>Platinum</option>
                            <option value={"Diamond"}>Diamond</option>
                          </select>
                        </div>
                      </div>
                      <div className="col-12">
                        <div>
                          <label htmlFor="subPlan" className="form-label">
                            Sub Plan
                          </label>
                          <select
                            className="form-control"
                            id="subPlan"
                            onChange={onChange}
                            name="subPlan"
                            value={subPlan}
                          >
                            <option selected={!!1} disabled={!!1} value={""}>
                              -- Select a {plan !== "" && "Sub"} Plan --
                            </option>
                            {cals.subPlans.length &&
                              cals.subPlans.map((x, i) => (
                                <option key={`sp${i}`} value={x.name}>
                                  {x.name}
                                </option>
                              ))}
                          </select>
                        </div>
                      </div>
                      <div className="col-6">
                        <div>
                          <label htmlFor="amount" className="form-label">
                            Amount
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            id="amount"
                            name="amt"
                            value={amt}
                            onChange={onChange}
                            // step={}
                            placeholder={
                              plan === "" ? "Select a plan" : "Enter Amount"
                            }
                            disabled={plan === "" ? !!1 : !!0}
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div>
                          <label htmlFor="profit" className="form-label">
                            Profit
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="profit"
                            value={profit}
                            placeholder={
                              plan === "" ? "Select a plan" : "Profit"
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div>
                          <label htmlFor="return" className="form-label">
                            Return
                          </label>
                          <input
                            className="form-control"
                            type="number"
                            id="return"
                            value={ret}
                            placeholder={
                              plan === "" ? "Select a plan" : "Total Return"
                            }
                            disabled
                          />
                        </div>
                      </div>
                      <div className="col-6">
                        <div>
                          <label for="duration" className="form-label">
                            Duration
                          </label>
                          <input
                            className="form-control"
                            type="text"
                            id="duration"
                            value={duration}
                            placeholder={
                              plan === "" ? "Select a plan" : "Duration"
                            }
                            disabled
                          />
                        </div>
                      </div>
                    </div>
                    <button
                      type="submit"
                      className="sfx-btn sfx-btn--border sfx-btn--primary mt-4 d-block"
                    >
                      get started now!
                    </button>
                    <Pagination />
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="contact__shape">
          <span className="contact__shape-item contact__shape-item--1">
            <img src={Static.contact4} alt="shape-icon" />
          </span>
          <span className="contact__shape-item contact__shape-item--2">
            <span></span>
          </span>
        </div>
      </div>
      {/* <!-- ===============>> Contact section start here <<================= --> */}
    </>
  );
};

export default Calculator;
