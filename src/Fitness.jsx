// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import "./Fiteness.css";
// import PlanCard from "../components/PlanCard";
// import Navbar from "../components/Navbar";

// function Fitness() {
//   const [loading, setLoading] = useState(false);
//   const [activePlan, setActivePlan] = useState(null);
//   const navigate = useNavigate();

//   const plans = [
//     {
//       id: "elite",
//       title: "ELITE",
//       price: 13570,
//       description: "Unlimited premium gyms + group classes",
//       features: [
//         "Unlimited Gyms",
//         "Group Classes",
//         "Smart Workout Plans",
//         "At-home Workouts",
//       ],
//     },
//     {
//       id: "pro",
//       title: "PRO",
//       price: 7000,
//       description: "Best for regular gym users",
//       features: [
//         "Limited Elite Access",
//         "Unlimited PRO Gyms",
//         "Workout Plans",
//         "Home Workouts",
//       ],
//     },
//     {
//       id: "home",
//       title: "HOME",
//       price: 1160,
//       description: "Home fitness training program",
//       features: ["No Gym Access", "Daily Workouts", "Fitness Tracking"],
//     },
//     {
//       id: "transform",
//       title: "TRANSFORM+",
//       price: 9999,
//       description: "Personal coaching + diet plan",
//       features: ["Diet Plan", "1-on-1 Coaching", "Progress Tracking"],
//     },
//   ];

//   // GET ACTIVE PLAN
//   useEffect(() => {
//     const fetchPlan = async () => {
//       const user = JSON.parse(localStorage.getItem("user"));
//       if (!user) return;

//       try {
//         const res = await axios.get(
//           `http://localhost:5000/subscription/${user.id}`
//         );

//         if (res.data.length > 0) {
//           setActivePlan(res.data[0].planId);
//         }
//       } catch (err) {
//         console.log(err);
//       }
//     };

//     fetchPlan();
//   }, []);

//   // SELECT PLAN
//   const handleSelectPlan = async (plan) => {
//     const user = JSON.parse(localStorage.getItem("user"));

//     if (!user) {
//       alert("Please login first");
//       return;
//     }

//     if (activePlan === plan.id) {
//       alert("⚠️ You already have this plan active");
//       return;
//     }

//     setLoading(true);

//     try {
//       const res = await axios.post(
//         "http://localhost:5000/subscription",
//         {
//           userId: user.id,
//           planId: plan.id,
//           planName: plan.title,
//           price: plan.price,
//         }
//       );

//       alert(`🎉 ${plan.title} Plan Activated Successfully!`);
//       setActivePlan(plan.id);

//       console.log(res.data);
//     } catch (err) {
//       console.log(err);
//       alert(err.response?.data?.message || "Something went wrong");
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
     
    
//     <div className="fitness-page">
//        <Navbar />
//       {/* HERO */}
//       <section className="fitness-hero">
//         <div className="fitness-hero__content">
//           <h1>
//             Upgrade Your <span>Fitness Lifestyle</span>
//           </h1>

//           <p>
//             Choose the perfect plan for gym access, home workouts,
//             and transformation coaching.
//           </p>

//           <div className="fitness-hero__buttons">
//             <button className="btn-primary">
//               Explore Plans
//             </button>

//             <button
//               type="button"
//               className="btn-secondary"
//               onClick={() => navigate("/my-plan")}
//             >
//               My Active Plan
//             </button>
//           </div>
//         </div>
//       </section>

//       {/* PLANS */}
//       <section className="fitness-plans">
//         <h2>Choose Your Plan</h2>

//         <div className="fitness-plans__grid">

//           {plans.map((plan) => (
//             <div
//               key={plan.id}
//               className={`fitness-card ${
//                 activePlan === plan.id ? "active-plan" : ""
//               }`}
//               onClick={() => handleSelectPlan(plan)}
//             >

//               <h3>
//                 {plan.title}{" "}
//                 {activePlan === plan.id && "✅ ACTIVE"}
//               </h3>

//               <h4>₹{plan.price}/month</h4>

//               <p>{plan.description}</p>

//               <ul>
//                 {plan.features.map((f, i) => (
//                   <li key={i}>✔ {f}</li>
//                 ))}
//               </ul>

//               <button
//                 type="button"
//                 disabled={loading || activePlan === plan.id}
//                 className="fitness-card__btn"
//               >
//                 {activePlan === plan.id
//                   ? "Active Plan"
//                   : loading
//                   ? "Processing..."
//                   : "Select Plan"}
//               </button>

//             </div>
//           ))}

//         </div>
//       </section>

//       {/* WHY SECTION */}
//       <section className="fitness-why">
//         <h2>Why Choose Us</h2>

//         <div className="fitness-why__grid">

//           <div className="why-box">
//             <h3>🔥 1000+ Gyms</h3>
//             <p>Access gyms across India with one membership.</p>
//           </div>

//           <div className="why-box">
//             <h3>💪 Expert Trainers</h3>
//             <p>Get guidance from certified professionals.</p>
//           </div>

//           <div className="why-box">
//             <h3>📊 Smart Tracking</h3>
//             <p>Track your fitness progress in real time.</p>
//           </div>

//         </div>
//       </section>

//     </div>
//   );
// }

// export default Fitness;





















import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./Fiteness.css";
import PlanCard from "./components/PlanCard";
// import Navbar from "./components/Navbar";

function Fitness() {

  const [loading, setLoading] = useState(false);
  const [activePlan, setActivePlan] = useState(null);

  const navigate = useNavigate();

  const plans = [
    {
      id: "elite",
      title: "ELITE",
      price: 13570,
      description: "Unlimited premium gyms + group classes",
      features: [
        "Unlimited Gyms",
        "Group Classes",
        "Smart Workout Plans",
        "At-home Workouts",
      ],
    },
    {
      id: "pro",
      title: "PRO",
      price: 7000,
      description: "Best for regular gym users",
      features: [
        "Limited Elite Access",
        "Unlimited PRO Gyms",
        "Workout Plans",
        "Home Workouts",
      ],
    },
    {
      id: "home",
      title: "HOME",
      price: 1160,
      description: "Home fitness training program",
      features: [
        "No Gym Access",
        "Daily Workouts",
        "Fitness Tracking",
      ],
    },
    {
      id: "transform",
      title: "TRANSFORM+",
      price: 9999,
      description: "Personal coaching + diet plan",
      features: [
        "Diet Plan",
        "1-on-1 Coaching",
        "Progress Tracking",
      ],
    },
  ];

  // GET ACTIVE PLAN
  useEffect(() => {

    const fetchPlan = async () => {

      const user = JSON.parse(
        localStorage.getItem("user")
      );

      if (!user) return;

      try {

        const res = await axios.get(
          `http://localhost:5000/subscription/${user.id}`
        );

        if (res.data.length > 0) {
          setActivePlan(res.data[0].planId);
        }

      } catch (err) {
        console.log(err);
      }

    };

    fetchPlan();

  }, []);

  // SELECT PLAN
  const handleSelectPlan = async (plan) => {

    const user = JSON.parse(
      localStorage.getItem("user")
    );

    if (!user) {
      alert("Please login first");
      return;
    }

    if (activePlan === plan.id) {
      alert("⚠️ You already have this plan active");
      return;
    }

    setLoading(true);

    try {

      const res = await axios.post(
        "http://localhost:5000/subscription",
        {
          userId: user.id,
          planId: plan.id,
          planName: plan.title,
          price: plan.price,
        }
      );

      alert(
        `🎉 ${plan.title} Plan Activated Successfully!`
      );

      setActivePlan(plan.id);

      console.log(res.data);

    } catch (err) {

      console.log(err);

      alert(
        err.response?.data?.message ||
        "Something went wrong"
      );

    } finally {
      setLoading(false);
    }

  };

  return (

    <div className="fitness-page">

      {/* NAVBAR */}
      {/* <Navbar /> */}

      {/* HERO SECTION */}
      <section className="fitness-hero">

        <div className="fitness-overlay"></div>

        <div className="fitness-hero__content">

          <span className="hero-tag">
            India's Premium Fitness Membership
          </span>

          <h1>
            Upgrade Your <span>Fitness Lifestyle</span>
          </h1>

          <p>
            Access premium gyms, certified trainers,
            home workouts, and transformation programs
            with one powerful membership.
          </p>

          <div className="fitness-hero__buttons">

            <button className="btn-primary">
              Explore Plans
            </button>

            <button
              type="button"
              className="btn-secondary"
              onClick={() => navigate("/my-plan")}
            >
              My Active Plan
            </button>

          </div>

        </div>

      </section>

      {/* STATS SECTION */}
      <section className="fitness-stats">

        <div className="stat-box">
          <h2>1000+</h2>
          <p>Partner Gyms</p>
        </div>

        <div className="stat-box">
          <h2>50K+</h2>
          <p>Active Members</p>
        </div>

        <div className="stat-box">
          <h2>120+</h2>
          <p>Cities Covered</p>
        </div>

        <div className="stat-box">
          <h2>4.9★</h2>
          <p>User Rating</p>
        </div>

      </section>

      {/* MEMBERSHIP PLANS */}
      <section className="fitness-plans">

        <div className="section-header">

          <h2>
            Choose Your Membership
          </h2>

          <p>
            Flexible plans designed for every fitness goal.
          </p>

        </div>

        <div className="fitness-plans__grid">

          {plans.map((plan) => (
            <PlanCard
              key={plan.id}
              plan={plan}
              activePlan={activePlan}
              loading={loading}
              handleSelectPlan={handleSelectPlan}
            />
          ))}

        </div>

      </section>

      {/* WHY CHOOSE US */}
      <section className="fitness-why">

        <div className="section-header">

          <h2>Why Choose FitPass</h2>

          <p>
            Everything you need for your fitness journey.
          </p>

        </div>

        <div className="fitness-why__grid">

          <div className="why-box">

            <div className="why-icon">🔥</div>

            <h3>Unlimited Access</h3>

            <p>
              Train anytime at premium gyms
              with one membership.
            </p>

          </div>

          <div className="why-box">

            <div className="why-icon">💪</div>

            <h3>Expert Coaches</h3>

            <p>
              Learn from certified trainers
              and transformation experts.
            </p>

          </div>

          <div className="why-box">

            <div className="why-icon">📊</div>

            <h3>Track Progress</h3>

            <p>
              Monitor workouts and improve
              your health consistently.
            </p>

          </div>

        </div>

      </section>

      {/* FOOTER */}
      <footer className="fitness-footer">

        <h2>FitPass</h2>

        <p>
          Premium fitness memberships
          for modern lifestyles.
        </p>

        <span>
          © 2026 FitPass. All rights reserved.
        </span>

      </footer>

    </div>

  );
}

export default Fitness;