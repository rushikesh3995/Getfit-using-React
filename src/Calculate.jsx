import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

export default function BMICalculator() {
  const [age, setAge] = useState("");
  const [weight, setWeight] = useState("");
  const [height, setHeight] = useState("");
  const [bmi, setBmi] = useState(null);
  const [category, setCategory] = useState("");

  const calculateBMI = (e) => {
    e.preventDefault();
    const heightM = parseFloat(height) / 100;
    const bmiValue = (parseFloat(weight) / (heightM * heightM)).toFixed(2);
    setBmi(bmiValue);

    if (bmiValue < 18.5) setCategory("Underweight");
    else if (bmiValue < 24.9) setCategory("Normal weight");
    else if (bmiValue < 29.9) setCategory("Overweight");
    else setCategory("Obese");
  };

  return (
    <div className="container mt-5">
      <div className="card bg-dark text-white shadow-lg p-4 rounded" style={{ maxWidth: "600px", margin: "auto" }}>
        <h2 className="text-center mb-4">💪 BMI Calculator</h2>
        <form onSubmit={calculateBMI}>
          <div className="mb-3">
            <label className="form-label">Enter Your Age:</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Age"
              value={age}
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Enter Your Weight (kg):</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
              required
            />
          </div>
          <div className="mb-3">
            <label className="form-label">Enter Your Height (cm):</label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter Height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
              required
            />
          </div>
          <button type="submit" className="btn btn-success w-100">Calculate</button>
        </form>

        {bmi && (
  <div className="mt-4 p-3 bg-secondary rounded text-center">
    <h4>Your BMI is: {bmi}</h4>
    <p>Status: <strong>{category}</strong></p>

    <div className="text-start mt-3">
      <h5>💡 Health Tips:</h5>
      <ul className="list-group list-group-flush">
        {category === "Underweight" && (
          <>
            <li className="list-group-item bg-secondary text-white">Include more calorie-dense foods like nuts and dairy.</li>
            <li className="list-group-item bg-secondary text-white">Eat small meals more frequently.</li>
            <li className="list-group-item bg-secondary text-white">Incorporate strength training to build muscle mass.</li>
          </>
        )}
        {category === "Normal weight" && (
          <>
            <li className="list-group-item bg-secondary text-white">Maintain a balanced diet with fruits, veggies, and lean proteins.</li>
            <li className="list-group-item bg-secondary text-white">Stay active with regular exercise.</li>
            <li className="list-group-item bg-secondary text-white">Keep track of your health with routine checkups.</li>
          </>
        )}
        {category === "Overweight" && (
          <>
            <li className="list-group-item bg-secondary text-white">Reduce sugary and processed foods.</li>
            <li className="list-group-item bg-secondary text-white">Increase daily physical activity—aim for 30 minutes a day.</li>
            <li className="list-group-item bg-secondary text-white">Stay hydrated and get enough sleep.</li>
          </>
        )}
        {category === "Obese" && (
          <>
            <li className="list-group-item bg-secondary text-white">Consult a healthcare provider for a personalized plan.</li>
            <li className="list-group-item bg-secondary text-white">Focus on gradual, sustainable weight loss.</li>
            <li className="list-group-item bg-secondary text-white">Incorporate both cardio and strength training exercises.</li>
          </>
        )}
      </ul>
    </div>
  </div>
)}
      </div>
    </div>

    
  );
}