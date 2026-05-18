import React from "react";
import "./HowItWorks.css";

const HowItWorks = () => {
  return (
    <div className="how-container">
      <p className="how-subtitle">/ JOIN US TODAY</p>
      <h1 className="how-title">How it works?</h1>

      <div className="how-steps">
        
        {/* Step 1 */}
        <div className="step-card">
          <div className="step-icon grey">
            🔍
          </div>
          <h3>Select your WTF Gym</h3>
          <p>
            Choose your ideal gym location with ease for a convenient and
            accessible fitness experience.
          </p>
        </div>

        {/* Step 2 */}
        <div className="step-card">
          <div className="step-icon dark">
            ✨
          </div>
          <h3>Get Membership</h3>
          <p>
            Sign up effortlessly with flexible plans designed to fit your
            lifestyle and fitness goals.
          </p>
        </div>

        {/* Step 3 */}
        <div className="step-card">
          <div className="step-icon red">
            🏢
          </div>
          <h3>Start your Journey</h3>
          <p>
            Begin your transformation with expert guidance, advanced facilities,
            and a community that inspires success.
          </p>
        </div>

      </div>
    </div>
  );
};

export default HowItWorks;