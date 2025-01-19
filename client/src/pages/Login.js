import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MDBContainer, MDBInput } from "mdb-react-ui-kit";
import axios from "axios";
import { Navigate } from "react-router-dom";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false);  // Add redirect state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        'http://localhost:5001/api/auth/login', // Full URL
        { email, password },
        { withCredentials: true } // To send cookies with the request, if needed
      );
      

      if (response.status === 200) {  // Ensure the success status is 200
        setRedirect(true);  // Redirect after successful login
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Login failed. Please try again.";
      setError(errorMsg);
    }
  };

  // Redirect the user after successful login
  if (redirect) {
    return <Navigate to="/" />;
  }

  return (
    <MDBContainer className="" style={{ padding: "20px", backgroundColor: "black" }}>
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h1 className="text-center mb-4">Login</h1>

          {error && <p className="text-danger text-center">{error}</p>}

          <form onSubmit={handleSubmit}>
            <MDBInput
              className="mb-3"
              type="email"
              value={email}
              label="Email"
              placeholder="johndoe@email.com"
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <MDBInput
              className="mb-3"
              type="password"
              value={password}
              label="Password"
              placeholder="Password"
              onChange={(e) => setPassword(e.target.value)}
              required
            />

<button
                        type="submit"
                        className="w-100 btn-sm fw-bold btn btn-dark mt-3"
                      >
                        <span style={{ fontSize: "12px" }}>Submit </span>
                      </button>
          </form>

          <div className="text-center mt-3">
            <p>
              Need an account? <Link to="/signup">Signup here</Link>.
            </p>
          </div>
        </div>
      </div>
    </MDBContainer>
  );
}

export default Login;
