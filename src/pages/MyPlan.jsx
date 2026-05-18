import { useEffect, useState } from "react";
import axios from "axios";

function MyPlan() {
  const [plan, setPlan] = useState(null);

  useEffect(() => {
    const fetchPlan = async () => {
      const user = JSON.parse(localStorage.getItem("user"));
      if (!user) return;

      const res = await axios.get(
        `http://localhost:5000/subscription/${user.id}`
      );

      setPlan(res.data[0]);
    };

    fetchPlan();
  }, []);

  // ❌ CANCEL PLAN
  const cancelPlan = async () => {
    try {
      await axios.delete(
        `http://localhost:5000/subscription/${plan.id}`
      );

      alert("Plan Cancelled");
      setPlan(null);
    } catch (err) {
      console.log(err);
    }
  };

  if (!plan) {
    return <h2 style={{ padding: 30 }}>No Active Plan</h2>;
  }

  return (
    <div style={{ padding: 30 }}>
      <h1>My Plan</h1>

      <div style={{
        padding: 20,
        border: "1px solid #ccc",
        borderRadius: 10
      }}>
        <h2>{plan.planName}</h2>
        <p>₹{plan.price}</p>
        <p>Status: {plan.status}</p>

        <button
          onClick={cancelPlan}
          style={{
            marginTop: 10,
            padding: "10px 15px",
            background: "red",
            color: "white",
            border: "none"
          }}
        >
          Cancel Plan
        </button>
      </div>
    </div>
  );
}

export default MyPlan;