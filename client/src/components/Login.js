import React, { useState } from "react";
import axios from "axios";
import { Link, Navigate } from "react-router-dom";
import { MDBInput, MDBBtn, MDBContainer, MDBRow, MDBCol } from "mdb-react-ui-kit";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [redirect, setRedirect] = useState(false);
  const [error, setError] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "/auth/login",
        { email, password },
        { withCredentials: true }
      );

      if (response.status === 200) {
        setRedirect(true);
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.error || "Invalid credentials. Please try again.";
      setError(errorMsg);
    }
  };

  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <MDBContainer className="gradient-form" style={{ padding: "20px" }}>
      <MDBRow>
        {/* Left Section */}
        <MDBCol md="6" className="d-none d-md-block">
          <div className="h-100 d-flex flex-column justify-content-center align-items-center">
            <h1 className="text-center mb-4">Welcome Back</h1>
            <p className="text-center">
              Log in to access your account and start using our platform.
            </p>
          </div>
        </MDBCol>

        {/* Login Form */}
        <MDBCol md="6">
          <h1 className="text-center mb-4">Login</h1>

          {error && <p className="text-danger text-center">{error}</p>}

          <form onSubmit={handleLogin}>
            <MDBInput
              className="mb-3"
              label="Email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MDBInput
              className="mb-3"
              label="Password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <MDBBtn type="submit" className="w-100">
              Login
            </MDBBtn>
          </form>

          <div className="text-center mt-3">
            <p>
              Need an account? <Link to="/signup">Signup here</Link>.
            </p>
          </div>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
}

export default Login;
