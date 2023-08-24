import { useEffect, useState } from "react";
import BreadcrumbWidget from "../components/molecule/widgets/BreadcrumbWIdget";
import CryptoTicker from "../components/molecule/widgets/CryptoTicker";
import PlanCardWidget from "../components/molecule/widgets/PlanCardWidget";
import { diaPlans, goldPlan, platPlans } from "../const/plans";
import { currency } from "../config/libs";

const Invest = () => {
  const [params, setParams] = useState(["Invest"]);
  const [plan, setPlan] = useState("");
  const [subPlan, setSubPlan] = useState("");

    const init = () => {
    plan !== "" && setParams(["Invest", plan]);
  };

    const initX = () => {
    subPlan !== "" && setParams(["Invest", plan, subPlan]);
  };

  useEffect(() => {
    init();
  }, [plan]);

//   useEffect(() => {
//     initX();
//   }, [subPlan]);
  return (
    <>
      <div className="container-fluid content-inner pb-0">
        {plan !== "" && <BreadcrumbWidget list={params} />}
        <CryptoTicker />
        {plan} - {subPlan} - {params}
        <div className="row">
          {plan === "" ? (
            <>
              <PlanCardWidget
                plan={"Gold"}
                planNote={"blah blah blah"}
                setPlan={setPlan}
              />
              <PlanCardWidget
                plan={"Platinum"}
                planNote={"blah blah blah"}
                setPlan={setPlan}
              />
              <PlanCardWidget
                plan={"Diamond"}
                planNote={"blah blah blah"}
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
                setPlan={setSubPlan}
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
                setPlan={setSubPlan}
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
                setPlan={setSubPlan}
              />
            ))
          ) : (
            ""
          )}
        </div>
      </div>
    </>
  );
};

export default Invest;
