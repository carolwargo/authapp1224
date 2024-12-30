import React, { useState } from "react";
import axios from "axios";

import { Link } from "react-router-dom";
import {
  MDBBtn,
} from "mdb-react-ui-kit";

function Signup() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", { firstname, lastname, email, password }) // Send signup data to backend
      .then((response) => {
        console.log("Signup successful:", response.data);
        // Handle response, such as redirecting or setting auth state
      })
      .catch((error) => {
        console.error("Error during signup:", error);
      });
  };

  return (
    <div className="w3-light-grey">
        <div className="row d-flex flex-row align-items-center justify-content-center mt-3">
          <div className="col-sm-12 col-md-2 col-lg-2">
          </div> 
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
             
              <h4 className="">We are more than just a company</h4>
              <p className="mb-0">
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
              consequat.
              </p>
              </div>
             
          </div> 
          <div className="col-sm-12 col-md-2 col-lg-2">
          </div>  
        
        </div>
      
        <div className="row d-flex flex-row align-items-center justify-content-center">
    
          <div className="col-sm-12 col-md-2 col-lg-2">
          </div> 
          <div className="col-sm-12 col-md-8 col-lg-8">
              <div className="w3-container w3-content px-4">
            <p className="mt-4 fw-bold">SIGN UP TO CREATE AN ACCOUNT.</p>
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
                value={email}
                onChange={(ev) => setEmail(ev.target.value)}
                type="email"
                autoComplete="email"
                aria-label="Email address"
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
                <MDBBtn
                  className="mb-4 w-100 "
                  style={{
                    backgroundImage:
                      "linear-gradient(to right, #f64b65, #fa52ce)",
                  }}
                  type="submit"
                >
                  Signup
                </MDBBtn>
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
          <div className="col-sm-12 col-md-2 col-lg-2">
          </div>  
        
        </div>
    
    </div>
 
  );
}

export default Signup;
