import { Outlet } from "react-router";
import "./elite.css";

function Getfitelite() {
  return (
    <div className="elite-page">

      {/* HERO */}
      <section className="elite-hero">
        <h1>ELITE PASS</h1>
        <p>Train Without Limits. Live Without Excuses.</p>
        <button className="elite-btn">Join ELITE Now</button>
      </section>

      {/* INTRO */}
      <section className="elite-intro">
        <h2>Your All-Access Pass to Peak Fitness</h2>
        <p>
          Step into a world where fitness meets performance. The ELITE Plan is
          built for those who want more—more access, more flexibility, more
          results.
        </p>
      </section>

      {/* FEATURES */}
      <section className="elite-features">

        <div className="feature-card">
          <h3>Unlimited ELITE Gyms</h3>
          <p>Train at premium gyms with world-class equipment.</p>
        </div>

        <div className="feature-card">
          <h3>Group Classes</h3>
          <p>HIIT, Yoga, Zumba, Strength & more—unlimited sessions.</p>
        </div>

        <div className="feature-card">
          <h3>PRO Gym Access</h3>
          <p>Seamless entry to all PRO gyms across locations.</p>
        </div>

        <div className="feature-card">
          <h3>Smart Workout Plan</h3>
          <p>Personalized programs tailored to your goals.</p>
        </div>

        <div className="feature-card">
          <h3>At-Home Workouts</h3>
          <p>Stay fit anytime, anywhere with guided sessions.</p>
        </div>

        <div className="feature-card">
          <h3>Exclusive Perks</h3>
          <p>Priority bookings, rewards & elite community events.</p>
        </div>

      </section>

      {/* PRICE CTA */}
      <section className="elite-cta">
        <h2>All this for just ₹13,570/month</h2>
        <p>Invest in your body. It’s the only place you live.</p>
        <button className="elite-btn big">Buy ELITE Pass</button>
      </section>
<Outlet/>
    </div>
    
  );
}

export default Getfitelite;







