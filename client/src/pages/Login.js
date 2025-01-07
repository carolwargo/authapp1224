import React, { useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import LogoBlack from "../assets/images/Logo/LogoBlack.png";

import { MDBInput } from "mdb-react-ui-kit";

function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:5001/login", { email, password })
      .then((response) => {
        console.log("You are logged in:", response.data);
        // Handle response, such as redirecting or setting auth state
      })
      .catch((error) => {
        console.error("Login Error:", error);
      });
  };

  return (
<div>
  <style>
    {`.outlined-text {
  color: white; /* or any color for the text */

  text-shadow: 
    -1px -1px 0 #000,  
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000;
}
`}
  </style>

    <div className="w3-padding-large w3-padding-16" style={{}}>
      <div className="container my-2">
        <div className="row d-flex align-items-center justify-content-center mt-2">
        <div className="col-sm-12 col-md-3 col-lg-3 mb-3">
         
          </div>
          
          <div className=" col-sm-12 col-md-6 col-lg-6 align-items-center justify-content-center">
            <div className="">
            <h3 className="mb-3">Welcome Back!</h3>
               <h1 style={{fontFamily:'Montserrat'}}><b className="">i</b><span className="outlined-text">j</span><span style={{fontSize:'2rem'}} className="outlined-text">OCK</span>
               </h1>
              <div>    <img src={LogoBlack} alt="logo" 
              style={{width:'10rem'}}/><span className="fw-bold" style={{fontFamily:'Montserrat', fontSize:'3rem'}}>.digital.com</span></div>
          
              {/** 
            <h1
                style={{
                  fontSize: "4rem",
                }}
                className="mb-2"
              >
                <span>
                  <i
                    style={{
                      fontFamily: "Raleway",
                      fontSize: "3.5rem",
                      textShadow: "1px 1px 4px black",
                    }}
                  >Con
                  </i>
                </span>
                <span
                  className=" fw-bold"
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
*/}

         <p className="small mb-0">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed
                  do eiusmod tempor ut labore et dolore magna aliqua.
                  Ut enim ad minim veniam, ut aliquip ex ea commodo consequat.
                </p>
              <p className="mt-3 text-emphasis-dark">Login To Your View Your Account.</p>

              <form className="login w-100" onSubmit={handleSubmit}>
                <MDBInput
                  wrapperClass="mb-3"
                  placeholder="Email@mail.com"
                  value={email}
                  onChange={(ev) => setEmail(ev.target.value)}
                  type="email"
                  autoComplete="email"
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
                  <button
                    className="mb-4 btn btn-dark w-100"
                 
                    type="submit"
                  >
                    Login
                  </button>
                  <a className="text-muted" href="#!">
                    Forgot password?
                  </a>
                </div>
              </form>

              <div className="d-flex flex-row align-items-center justify-content-center">
                <p className="mb-0">Need an account?</p>
                <Link to="/login" className="mx-2">
                  Signup
                </Link>
              </div>
            </div>
          </div>
          <div className="col-sm-12 col-md-3 col-lg-3 mb-3">
         
         </div>

        </div>
      </div>
    </div>
    </div>
  );
}

export default LoginPage;
