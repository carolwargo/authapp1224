import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBBtn, MDBContainer, MDBInput } from "mdb-react-ui-kit";

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
      const response = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, email, password }),
      });

      if (!response.ok) {
        // Parse and throw backend error
        const errorData = await response.json();
        throw new Error(errorData.message || "Signup failed");
      }

      // Parse response on success
      const data = await response.json();
      console.log("Signup successful:", data);
      setSuccessMessage("Account created successfully!");
    } catch (err) {
      console.error("Signup error:", err.message);
      setError(err.message);
    }
  };

  return (
    <MDBContainer className="w3-black" style={{ padding: "20px" }}>
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
