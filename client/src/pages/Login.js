import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import LogoBlack from "../assets/images/Logo/LogoBlack.png";
import { MDBInput } from "mdb-react-ui-kit";

function LoginPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(""); // For displaying errors
  const navigate = useNavigate(); // For redirecting to another page after login

  const handleSubmit = (e) => {
    e.preventDefault();

    axios
    .post("http://localhost:5001/login", { username, password })
    .then((response) => {
      console.log("You are logged in:", response.data);
      localStorage.setItem("authToken", response.data.token);
      navigate("/dashboard");
    })
    .catch((error) => {
      console.error("LoginError:", error);
      setError(error.response ? error.response.data.message : "An error occurred");
    });
  };
  
  return (
    <div>
      <div className="w3-padding-large w3-padding-16">
        <div className="container my-2">
          <div className="row d-flex align-items-center justify-content-center mt-2">
            <div className="col-sm-12 col-md-3 col-lg-3 mb-3"></div>
            <div className="col-sm-12 col-md-6 col-lg-6 align-items-center justify-content-center">
              <div>
                <h3 className="mb-3">Welcome Back!</h3>
                <h1 style={{ fontFamily: "Montserrat" }}>
                  <b className="">i</b>
                  <span className="outlined-text">j</span>
                  <span style={{ fontSize: "2rem" }} className="outlined-text">
                    OCK
                  </span>
                </h1>
                <div>
                  <img
                    src={LogoBlack}
                    alt="logo"
                    style={{ width: "10rem" }}
                  />
                  <span
                    className="fw-bold"
                    style={{ fontFamily: "Montserrat", fontSize: "3rem" }}
                  >
                    .digital.com
                  </span>
                </div>
                <p className="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                </p>
                <p className="mt-3 text-emphasis-dark">Login To View Your Account.</p>

                {error && (
                  <div className="alert alert-danger">{error}</div>
                )}

                <form className="login w-100" onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-3"
                    placeholder="Username or Email"
                    value={username}
                    onChange={(ev) => setUsername(ev.target.value)}
                    type="username"
                    autoComplete="username"
                  />
                  <MDBInput
                    wrapperClass="mb-3"
                    id="form2"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    autoComplete="current-password"
                  />
                  <div className="text-center pt-1 mb-3 pb-1">
                    <button className="mb-4 btn btn-dark w-100" type="submit">
                      Login
                    </button>
                    <a className="text-muted" href="#!">
                      Forgot password?
                    </a>
                  </div>
                </form>

                <div className="d-flex flex-row align-items-center justify-content-center">
                  <p className="mb-0">Need an account?</p>
                  <Link to="/signup" className="mx-2">
                    Signup
                  </Link>
                </div>
              </div>
            </div>
            <div className="col-sm-12 col-md-3 col-lg-3 mb-3"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
