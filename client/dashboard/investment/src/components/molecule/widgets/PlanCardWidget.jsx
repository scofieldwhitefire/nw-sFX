const PlanCardWidget = ({ plan, planNote, subPlan='', setPlan }) => {
  return (
    <>
      <div className="col-lg-4 col-sm-6 col-md-6 text-center">
        <div className="card">
          <div className="card-body d-grid gap-2">
            <h4 className="card-title">{plan}{subPlan!==''&&` - ${subPlan}`}</h4>
            <p className="card-text">{planNote}</p>
            <span
              onClick={() => setPlan(subPlan!==''?subPlan:plan)}
              className="btn btn-primary"
              style={{ cursor: "pointer" }}
            >
              Select Plan
            </span>
          </div>
        </div>
      </div>
    </>
  );
};

export default PlanCardWidget