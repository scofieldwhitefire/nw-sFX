import { useEffect, useState } from "react";
import BreadcrumbWidget from "../components/molecule/widgets/BreadcrumbWIdget";
import CryptoTicker from "../components/molecule/widgets/CryptoTicker";
import PlanCardWidget from "../components/molecule/widgets/PlanCardWidget";
import { diaPlans, goldPlan, platPlans } from "../const/plans";
import { currency } from "../config/libs";
import { Navigate, useNavigate } from "react-router-dom";

const Invest = () => {
  const navigate = useNavigate();

  const [params, setParams] = useState(["Invest"]);
  const [plan, setPlan] = useState("");
  const [subPlan, setSubPlan] = useState("");

  const setSub = (x) => {
    setSubPlan(x);
  };

  const init = () => {
    plan !== "" && setParams(["Invest", plan]);
  };

  const initX = () => {
    subPlan !== "" && navigate(`/invest?plan=${plan}&sub-plan=${subPlan}`);
  };

  useEffect(() => {
    init();
  }, [plan]);

  useEffect(() => {
    initX();
  }, [subPlan]);

  return (
    <>
      {plan !== "" && <BreadcrumbWidget list={params} />}
      <CryptoTicker />
      <div className="row">
        {plan === "" ? (
          <>
            <PlanCardWidget
              plan={"Gold"}
              planNote={`Invest $50 - $400,  Duration 7 Days.`}
              setPlan={setPlan}
            />
            <PlanCardWidget
              plan={"Platinum"}
              planNote={`Invest ${currency(500, "d")} -  ${currency(
                15000,
                "d"
              )}, Duration 15 Days.`}
              setPlan={setPlan}
            />
            <PlanCardWidget
              plan={"Diamond"}
              planNote={`Invest  ${currency(20000, "d")} -  ${currency(
                650000,
                "d"
              )}, Duration 28 Days.`}
              setPlan={setPlan}
            />
          </>
        ) : plan === "Gold" ? (
          goldPlan.map((x) => (
            <PlanCardWidget
              key={x.name}
              plan={plan}
              subPlan={x.name}
              planNote={`Invest ${currency(x.min, "d")} - ${currency(
                x.max,
                "d"
              )}, Duration ${x.duration}.`}
              setPlan={setSub}
            />
          ))
        ) : plan === "Platinum" ? (
          platPlans.map((x) => (
            <PlanCardWidget
              key={x.name}
              plan={plan}
              subPlan={x.name}
              planNote={`Invest ${currency(x.min, "d")} - ${currency(
                x.max,
                "d"
              )}, Duration ${x.duration}.`}
              setPlan={setSub}
            />
          ))
        ) : plan === "Diamond" ? (
          diaPlans.map((x) => (
            <PlanCardWidget
              key={x.name}
              plan={plan}
              subPlan={x.name}
              planNote={`Invest ${currency(x.min, "d")} - ${currency(
                x.max,
                "d"
              )}, Duration ${x.duration}.`}
              setPlan={setSub}
            />
          ))
        ) : (
          ""
        )}
      </div>
    </>
  );
};

export default Invest;
