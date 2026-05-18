import "./getfit-home.css";

function Getfithome() {
  return (
    <div className="gf-home-page">

      {/* HERO */}
      <section className="gf-home-hero">
        <h1>HOME FITNESS PLAN</h1>
        <p>Your Body. Your Space. Your Rules.</p>
        <button className="gf-home-btn">Start Home Workout</button>
      </section>

      {/* INTRO */}
      <section className="gf-home-intro">
        <h2>Fitness That Fits Your Lifestyle</h2>
        <p>
          No gym? No problem. Stay consistent, stay active, and stay strong—
          right from your home.
        </p>
      </section>

      {/* FEATURES */}
      <section className="gf-home-features">

        <div className="gf-home-card">
          <h3>Smart Workout Plans</h3>
          <p>Personalized programs designed for your goals.</p>
        </div>

        <div className="gf-home-card">
          <h3>Unlimited Workouts</h3>
          <p>HIIT, yoga, strength, dance & more anytime.</p>
        </div>

        <div className="gf-home-card">
          <h3>No Gym Needed</h3>
          <p>Train comfortably in your own space.</p>
        </div>

        <div className="gf-home-card">
          <h3>Flexible Timing</h3>
          <p>Workout whenever it suits your schedule.</p>
        </div>

        <div className="gf-home-card">
          <h3>Expert Guidance</h3>
          <p>Trainer-designed workouts for real results.</p>
        </div>

        <div className="gf-home-card">
          <h3>Track Progress</h3>
          <p>Monitor your improvement and stay motivated.</p>
        </div>

      </section>

      {/* CTA */}
      <section className="gf-home-cta">
        <h2>All this for just ₹1,160/month</h2>
        <p>Fitness made simple, affordable, and accessible.</p>
        <button className="gf-home-btn big">Join HOME Plan</button>
      </section>

    </div>
  );
}

export default Getfithome;