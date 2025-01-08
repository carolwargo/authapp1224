import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";

function Signup() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/auth/signup`, // Adjust to match your backend route
        { username, email, password }
      );

      if (response.status === 201) {
        setSuccessMessage("Account created successfully!");
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Signup failed. Please try again.";
      setError(errorMsg);
    }
  };

  return (
    <MDBContainer className="gradient-form" style={{ padding: "20px" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Signup</h1>

          {error && <p className="text-danger text-center">{error}</p>}
          {successMessage && (
            <p className="text-success text-center">
              {successMessage} <Link to="/login">Login here.</Link>
            </p>
          )}

          <form onSubmit={handleSubmit}>
            <MDBInput
              className="mb-3"
              type="text"
              value={username}
              placeholder="John Doe"
              onChange={(e) => setUsername(e.target.value)}
              required
            />
            <MDBInput
              className="mb-3"
              type="email"
              value={email}
              placeholder="johndoe@email.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MDBInput
              className="mb-3"
              type="password"
              value={password}
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <MDBBtn type="submit" className="w-100">
              Signup
            </MDBBtn>
          </form>

          <div className="text-center mt-3">
            <p>
              Already have an account? <Link to="/login">Login here</Link>.
            </p>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Signup;
