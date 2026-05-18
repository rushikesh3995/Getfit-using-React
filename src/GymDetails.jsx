import React from "react";
import { useLocation } from "react-router";
import "./GymDetails.css";

const GymDetails = () => {
  const { state } = useLocation();
  const gym = state;

  if (!gym) return <h2>No Data Found</h2>;

  return (
    <div className="gd-container">

      {/* TOP IMAGES */}
      <div className="gd-gallery">
        <img src={gym.img} className="gd-main-img" alt="gym" />

        <div className="gd-side-imgs">
          <img src={gym.img} alt="" />
          <img src={gym.img} alt="" />
          <img src={gym.img} alt="" />
          <img src={gym.img} alt="" />
        </div>
      </div>

      <div className="gd-content">

        {/* LEFT */}
        <div className="gd-left">
          <h2>{gym.title}</h2>
          <p>{gym.address}</p>

          <div className="gd-rating">⭐ {gym.rating} • Very Good</div>

          <p><b>Timings:</b> 06:00 AM - 10:00 PM</p>

          <h3>What's Included</h3>

          <div className="gd-features">
            {gym.amenities.map((a, i) => (
              <div key={i} className="gd-feature">{a}</div>
            ))}
          </div>
        </div>

        {/* RIGHT CARD */}
        <div className="gd-right">
          <h3>Gym Membership Plans</h3>

          <div className="gd-plan">
            <h4>{gym.title} Premium Plan</h4>
            <p className="price">₹9999</p>
            <ul>
              <li>90 days access</li>
              <li>Personal trainer</li>
              <li>Workout plan</li>
            </ul>
            <button>Buy Now</button>
          </div>

          <div className="gd-plan">
            <h4>12 Months</h4>
            <p className="price">₹14999</p>
            <button>Buy Now</button>
          </div>
        </div>

      </div>
    </div>
  );
};

export default GymDetails;