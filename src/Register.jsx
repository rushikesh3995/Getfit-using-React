import "./Auth.css";
import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";

function Register() {

  const navigate = useNavigate();

  const [formData, setFormData] =
    useState({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });

  const [error, setError] =
    useState("");

  const [success, setSuccess] =
    useState("");

  // HANDLE INPUT CHANGE

  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]:
        e.target.value,
    });
  };

  // REGISTER USER

  const handleRegister = (e) => {

    e.preventDefault();

    const {
      name,
      email,
      mobile,
      password,
    } = formData;

    // VALIDATION

    if (
      !name ||
      !email ||
      !mobile ||
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

    // GET OLD USERS

    const oldUsers =
      JSON.parse(
        localStorage.getItem("users")
      ) || [];

    // CHECK EXISTING EMAIL

    const userExists =
      oldUsers.find(
        (user) =>
          user.email === email
      );

    if (userExists) {

      setError(
        "Email already registered"
      );

      return;
    }

    // NEW USER

    const newUser = {

      id: Date.now(),

      name,

      email,

      mobile,

      password,
    };

    // SAVE USER

    const updatedUsers = [
      ...oldUsers,
      newUser,
    ];

    localStorage.setItem(
      "users",
      JSON.stringify(updatedUsers)
    );

    setSuccess(
      "Registration Successful 🚀"
    );

    setError("");

    // CLEAR FORM

    setFormData({
      name: "",
      email: "",
      mobile: "",
      password: "",
    });

    // REDIRECT

    setTimeout(() => {

      navigate("/login");

    }, 1500);
  };

  return (

    <div className="auth-container">

      <div className="auth-overlay">

        <div className="auth-box">

          <h2>
            Join GETFIT 🚀
          </h2>

          <p className="auth-subtitle">
            Start Your Fitness Journey Today
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
            onSubmit={
              handleRegister
            }
          >

            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={
                formData.name
              }
              onChange={
                handleChange
              }
            />

            <input
              type="email"
              name="email"
              placeholder="Email Address"
              value={
                formData.email
              }
              onChange={
                handleChange
              }
            />

            <input
              type="tel"
              name="mobile"
              placeholder="Mobile Number"
              value={
                formData.mobile
              }
              onChange={
                handleChange
              }
            />

            <input
              type="password"
              name="password"
              placeholder="Password"
              value={
                formData.password
              }
              onChange={
                handleChange
              }
            />

            <button type="submit">
              Register Now
            </button>

          </form>

          <p className="bottom-text">

            Already have an account?

            <Link to="/login">
              Login
            </Link>

          </p>

        </div>

      </div>

    </div>
  );
}

export default Register;