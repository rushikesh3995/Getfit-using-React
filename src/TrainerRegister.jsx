import "./TrainerRegister.css";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function TrainerRegister() {

  const navigate = useNavigate();

  const [trainerData, setTrainerData] =
    useState({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      experience: "",
      specialization: "",
      certification: "",
      previousGym: "",
      address: "",
      password: "",
    });

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  // HANDLE INPUT

  const handleChange = (e) => {

    setTrainerData({
      ...trainerData,
      [e.target.name]:
        e.target.value,
    });
  };

  // REGISTER TRAINER

  const handleTrainerRegister = (
    e
  ) => {

    e.preventDefault();

    const {
      name,
      email,
      phone,
      age,
      gender,
      experience,
      specialization,
      certification,
      previousGym,
      address,
      password,
    } = trainerData;

    // VALIDATION

    if (
      !name ||
      !email ||
      !phone ||
      !age ||
      !gender ||
      !experience ||
      !specialization ||
      !certification ||
      !previousGym ||
      !address ||
      !password
    ) {

      setError(
        "Please fill all fields"
      );

      return;
    }

    if (password.length < 6) {

      setError(
        "Password must be at least 6 characters"
      );

      return;
    }

    // GET OLD REQUESTS

    const oldRequests =
      JSON.parse(
        localStorage.getItem(
          "trainerRequests"
        )
      ) || [];

    // CHECK EXISTING EMAIL

    const alreadyExists =
      oldRequests.find(
        (trainer) =>
          trainer.email === email
      );

    if (alreadyExists) {

      setError(
        "Trainer already applied"
      );

      return;
    }

    // NEW TRAINER

    const newTrainer = {

      id: Date.now(),

      name,
      email,
      phone,
      age,
      gender,
      experience,
      specialization,
      certification,
      previousGym,
      address,
      password,

      status: "Pending",
    };

    // SAVE

    const updatedRequests = [
      ...oldRequests,
      newTrainer,
    ];

    localStorage.setItem(
      "trainerRequests",
      JSON.stringify(
        updatedRequests
      )
    );

    // SUCCESS

    setSuccess(
      "Application Sent To Admin Successfully 🚀"
    );

    setError("");

    // CLEAR FORM

    setTrainerData({
      name: "",
      email: "",
      phone: "",
      age: "",
      gender: "",
      experience: "",
      specialization: "",
      certification: "",
      previousGym: "",
      address: "",
      password: "",
    });

    // REDIRECT

    setTimeout(() => {

      navigate("/login");

    }, 2000);
  };

  return (

    <div className="trainer-page">

      <div className="trainer-register-container">

        {/* LEFT SIDE */}

        <div className="trainer-left">

          <h1>
            Build Your Fitness Career
          </h1>

          <p>
            Join GETFIT as a professional
            trainer and help thousands
            of members achieve their
            dream fitness goals with
            expert guidance.
          </p>

          <div className="trainer-features">

            <div className="feature-box">
              <h3>
                🏋️ Professional Environment
              </h3>
              <p>
                Work in premium gyms
                with modern equipment.
              </p>
            </div>

            <div className="feature-box">
              <h3>
                💰 High Income Opportunities
              </h3>
              <p>
                Earn from personal
                training sessions and
                memberships.
              </p>
            </div>

            <div className="feature-box">
              <h3>
                🚀 Career Growth
              </h3>
              <p>
                Build your trainer
                profile and become
                a fitness expert.
              </p>
            </div>

          </div>

        </div>

        {/* RIGHT SIDE */}

        <div className="trainer-right">

          <h2 className="register-title">
            Trainer Registration
          </h2>

          <p className="register-subtitle">
            Submit your details for
            admin approval
          </p>

          {error && (
            <p className="error-msg">
              {error}
            </p>
          )}

          {success && (
            <p className="success-msg">
              {success}
            </p>
          )}

          <form
            className="trainer-form"
            onSubmit={
              handleTrainerRegister
            }
          >

            {/* FULL NAME */}

            <div className="input-group">

              <label>
                Full Name
              </label>

              <input
                type="text"
                name="name"
                placeholder="Enter Full Name"
                value={
                  trainerData.name
                }
                onChange={
                  handleChange
                }
              />

            </div>

            {/* EMAIL */}

            <div className="input-group">

              <label>
                Email Address
              </label>

              <input
                type="email"
                name="email"
                placeholder="Enter Email"
                value={
                  trainerData.email
                }
                onChange={
                  handleChange
                }
              />

            </div>

            {/* PHONE */}

            <div className="input-group">

              <label>
                Phone Number
              </label>

              <input
                type="tel"
                name="phone"
                placeholder="Enter Mobile Number"
                value={
                  trainerData.phone
                }
                onChange={
                  handleChange
                }
              />

            </div>

            {/* AGE */}

            <div className="input-group">

              <label>
                Age
              </label>

              <input
                type="number"
                name="age"
                placeholder="Enter Age"
                value={
                  trainerData.age
                }
                onChange={
                  handleChange
                }
              />

            </div>

            {/* GENDER */}

            <div className="input-group">

              <label>
                Gender
              </label>

              <input
                type="text"
                name="gender"
                placeholder="Male / Female"
                value={
                  trainerData.gender
                }
                onChange={
                  handleChange
                }
              />

            </div>

            {/* EXPERIENCE */}

            <div className="input-group">

              <label>
                Experience
              </label>

              <input
                type="number"
                name="experience"
                placeholder="Years Of Experience"
                value={
                  trainerData.experience
                }
                onChange={
                  handleChange
                }
              />

            </div>

            {/* SPECIALIZATION */}

            <div className="input-group">

              <label>
                Specialization
              </label>

              <input
                type="text"
                name="specialization"
                placeholder="Weight Training / Yoga"
                value={
                  trainerData.specialization
                }
                onChange={
                  handleChange
                }
              />

            </div>

            {/* CERTIFICATION */}

            <div className="input-group">

              <label>
                Certification
              </label>

              <input
                type="text"
                name="certification"
                placeholder="ACE / ISSA / CPT"
                value={
                  trainerData.certification
                }
                onChange={
                  handleChange
                }
              />

            </div>

            {/* PREVIOUS GYM */}

            <div className="input-group">

              <label>
                Previous Gym
              </label>

              <input
                type="text"
                name="previousGym"
                placeholder="Worked At Which Gym?"
                value={
                  trainerData.previousGym
                }
                onChange={
                  handleChange
                }
              />

            </div>

            {/* ADDRESS */}

            <div className="input-group">

              <label>
                Address
              </label>

              <input
                type="text"
                name="address"
                placeholder="Enter Full Address"
                value={
                  trainerData.address
                }
                onChange={
                  handleChange
                }
              />

            </div>

            {/* PASSWORD */}

            <div className="input-group">

              <label>
                Password
              </label>

              <input
                type="password"
                name="password"
                placeholder="Create Password"
                value={
                  trainerData.password
                }
                onChange={
                  handleChange
                }
              />

            </div>

            {/* BUTTON */}

            <button
              type="submit"
              className="trainer-btn"
            >
              Submit Application
            </button>

          </form>

        </div>

      </div>

    </div>
  );
}

export default TrainerRegister;