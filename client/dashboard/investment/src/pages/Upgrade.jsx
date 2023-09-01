import CryptoTicker from "../components/molecule/widgets/CryptoTicker";
import PlanCardWidget from "../components/molecule/widgets/PlanCardWidget";
import { currency } from "../config/libs";

const Upgrade = () => {
  return (
    <>
      <CryptoTicker />
      <div>
        <div className="row">
          <PlanCardWidget
            plan={"Gold"}
            planNote={`Invest $50 - $400,  Duration 7 Days.`}
            setPlan={""}
          />
          <PlanCardWidget
            plan={"Platinum"}
            planNote={`Invest ${currency(500, "d")} -  ${currency(
              15000,
              "d"
            )}, Duration 15 Days.`}
            setPlan={""}
          />
          <PlanCardWidget
            plan={"Diamond"}
            planNote={`Invest  ${currency(20000, "d")} -  ${currency(
              650000,
              "d"
            )}, Duration 28 Days.`}
            setPlan={""}
          />
        </div>
      </div>
    </>
  );
};

export default Upgrade;
