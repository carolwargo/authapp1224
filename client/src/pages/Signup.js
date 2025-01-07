import React, { useState } from "react";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Link } from "react-router-dom";

function Signup() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [error, setError] = useState(""); // Error state for handling API errors
  const [redirectToHome, setRedirectToHome] = useState(false); // Redirect to homepage after successful signup

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/signup", { firstname, lastname, username, password })
      .then((response) => {
        console.log("Signup successful:", response.data);
        // Clear form fields after successful signup
        setFirstName("");
        setLastName("");
        setUsername("");
        setPassword("");
        // Set redirect to true to navigate to homepage
        setRedirectToHome(true);
      })
      .catch((error) => {
        console.error("Error during signup:", error);
        if (error.response && error.response.data) {
          setError(error.response.data.message || "An error occurred during signup.");
        } else {
          setError("An error occurred. Please try again.");
        }
      });
  };

  // Redirect to homepage if redirectToHome is true
  if (redirectToHome) {
    return <Navigate to="/" />;
  }

  return (
    <div className="w3-light-grey">
      <div className="row d-flex flex-row align-items-center justify-content-center mt-3">
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
        <div className="col-md-8">
          <div className="container">
            <h1
              style={{
                fontSize: "4.5rem",
              }}
              className="text-center"
            >
              <span>
                <i
                  style={{
                    fontFamily: "Raleway",
                    fontSize: "3.75rem",
                    textShadow: "1px 1px 4px black",
                  }}
                >
                  Con
                </i>
              </span>
              <span
                className="fw-bold"
                style={{
                  fontFamily: "Dancing Script",
                  marginLeft: "-10px",
                  color: "#d32c9a",
                  textShadow: "1px 1px 4px black",
                }}
              >
                Scribe
              </span>
            </h1>

            <h4>We are more than just a company</h4>
            <p className="mb-0">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris consequat.
            </p>
          </div>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
      </div>

      <div className="row d-flex flex-row align-items-center justify-content-center">
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
        <div className="col-sm-12 col-md-8 col-lg-8">
          <div className="w3-container w3-content px-4">
            <p className="mt-4 fw-bold">SIGN UP TO CREATE AN ACCOUNT.</p>

            {/* Show error message if there is one */}
            {error && <div className="alert alert-danger">{error}</div>}

            <form className="signup" onSubmit={handleSubmit}>
              <div className="row d-flex flex-row align-items-center justify-content-center">
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <input
                    className="w-100 mb-3 py-1 shadow-sm rounded-1 border-1"
                    placeholder=" First Name"
                    value={firstname}
                    onChange={(ev) => setFirstName(ev.target.value)}
                    type="text"
                    autoComplete="first-name"
                    aria-label="First name"
                  />
                </div>
                <div className="col-sm-12 col-md-6 col-lg-6">
                  <input
                    className="w-100 mb-3 py-1 shadow-sm rounded-1 border-1"
                    placeholder=" Last Name"
                    value={lastname}
                    onChange={(ev) => setLastName(ev.target.value)}
                    type="text"
                    autoComplete="last-name"
                    aria-label="Last name"
                  />
                </div>
              </div>

              <input
                className="w-100 mb-3 py-1 shadow-sm rounded-1 border-1"
                placeholder=" Email@mail.com"
                value={username}
                onChange={(ev) => setUsername(ev.target.value)}
                type="username"
                autoComplete="username"
                aria-label="username"
              />

              <input
                className="w-100 mb-3 py-1 shadow-sm rounded-1 border-1"
                type="password"
                placeholder=" Password"
                value={password}
                onChange={(ev) => setPassword(ev.target.value)}
                autoComplete="current-password"
                aria-label="Password"
              />
              <div className="text-center pt-1 mb-3 pb-1">
                <button className="btn btn-dark mb-4 w-100" data-mdb-ripple-init variant="secondary" type="submit">
                  Signup
                </button>
                <a className="text-muted" href="#!">
                  Forgot password?
                </a>
              </div>
            </form>

            <div className="d-flex flex-row align-items-center justify-content-center pb-4 mb-4">
              <p className="mb-0">Already have an account?</p>
              <Link to="/login" className="mx-2">
                Login
              </Link>
            </div>
          </div>
        </div>
        <div className="col-sm-12 col-md-2 col-lg-2"></div>
      </div>
    </div>
  );
}

export default Signup;
