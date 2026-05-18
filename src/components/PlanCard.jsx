function PlanCard({
  plan,
  activePlan,
  loading,
  handleSelectPlan,
}) {
  return (
    <div
      className={`fitness-card ${
        activePlan === plan.id
          ? "active-plan"
          : ""
      }`}
    >

      <div className="plan-top">

        <h3>{plan.title}</h3>

        {activePlan === plan.id && (
          <span className="active-badge">
            ACTIVE
          </span>
        )}

      </div>

      <h4>₹{plan.price}/month</h4>

      <p>{plan.description}</p>

      <ul>
        {plan.features.map((f, i) => (
          <li key={i}>✔ {f}</li>
        ))}
      </ul>

      <button
        onClick={() => handleSelectPlan(plan)}
        disabled={loading || activePlan === plan.id}
        className="fitness-card__btn"
      >
        {activePlan === plan.id
          ? "Current Plan"
          : loading
          ? "Processing..."
          : "Select Plan"}
      </button>

    </div>
  );
}

export default PlanCard;