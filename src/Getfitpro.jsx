import "./getfit-pro.css";

function Getfitpro() {
  return (
    <div className="gf-pro-page">

      {/* HERO */}
      <section className="gf-pro-hero">
        <h1>PRO FITNESS PLAN</h1>
        <p>Power. Performance. Progress.</p>
        <button className="gf-pro-btn">Upgrade to PRO</button>
      </section>

      {/* INTRO */}
      <section className="gf-pro-intro">
        <h2>Take Your Fitness to the Next Level</h2>
        <p>
          The PRO Plan is designed for those who want results without limits.
          Train at top PRO gyms, enjoy elite sessions, and stay consistent
          wherever you are.
        </p>
      </section>

      {/* FEATURES */}
      <section className="gf-pro-features">

        <div className="gf-pro-card">
          <h3>Unlimited PRO Gyms</h3>
          <p>Access all PRO gyms anytime without restrictions.</p>
        </div>

        <div className="gf-pro-card">
          <h3>ELITE Sessions</h3>
          <p>Enjoy 2 premium ELITE gym/group sessions monthly.</p>
        </div>

        <div className="gf-pro-card">
          <h3>Smart Workout Plan</h3>
          <p>Personalized programs built for your goals.</p>
        </div>

        <div className="gf-pro-card">
          <h3>At-Home Workouts</h3>
          <p>Train anytime, anywhere with guided workouts.</p>
        </div>

        <div className="gf-pro-card">
          <h3>Flexible Schedule</h3>
          <p>No time limits—workout on your own terms.</p>
        </div>

        <div className="gf-pro-card">
          <h3>Community & Support</h3>
          <p>Stay motivated with expert tips and community access.</p>
        </div>

      </section>

      {/* CTA */}
      <section className="gf-pro-cta">
        <h2>All this for just ₹7,000/month</h2>
        <p>Consistency creates results. Start your PRO journey today.</p>
        <button className="gf-pro-btn big">Join PRO Plan</button>
      </section>

    </div>
  );
}

export default Getfitpro;