import React, { useState } from "react";
import axios from "axios";
//import { UserContext } from "../UserContext";
import { Link } from "react-router-dom";

import {
  MDBBtn,
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBInput,
} from "mdb-react-ui-kit";

function HomePage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    axios
      .post("/auth/signup", { email, password }) // Send signup data to backend
      .then((response) => {
        console.log("Signup successful:", response.data);
        // Handle response, such as redirecting or setting auth state
      })
      .catch((error) => {
        console.error("Error during signup:", error);
      });
  };

  return (
    <div>
      <div className="w3-padding-large w3-padding-48" style={{}}>
        <MDBContainer className="my-5 gradient-form">
          <MDBRow>
            <MDBCol col="6" className="">
              <div className="d-flex flex-column px-4 ms-5">
                <h1
                  style={{
                    fontSize: "4.5rem",
                  }}
                  className="mb-2"
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
                <p>Login to your account.</p>

                <form className="login" onSubmit={handleSubmit}>
                  <MDBInput
                    wrapperClass="mb-4"
                    placeholder="Email@mail.com"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    type="email"
                  />

                  <MDBInput
                    wrapperClass="mb-4"
                    id="form2"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
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
                      Login
                    </MDBBtn>
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
            </MDBCol>

            <MDBCol col="6" className="mb-5 w3-hide-small w3-hide-medium">
              <div className="d-flex flex-column justify-content-center gradient-custom-2 h-100 mb-4">
                <div className="text-black p-md-5 mx-md-4">
                  <h4 className="mb-4">We are more than just a company</h4>
                  <p className="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
      <div className="container w3-padding-large w3-padding-48" style={{}}>
        <MDBContainer className="my-5 gradient-form">
          <MDBRow>
            <MDBCol col="6" className="mb-5">
              <div className="d-flex flex-column ms-5">
                <div className="text-center">
                  <div className="text-center">
                    <div className="container">
                      <h1
                        style={{
                          fontSize: "4.5rem",
                        }}
                        className="mb-3 text-center"
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
                    </div>
                  </div>
                </div>

                <p>Create an account.</p>

                <form className="signup" onSubmit={handleSubmit}>
                  <MDBRow>
                    <MDBCol col="6">
                      <MDBInput
                        wrapperClass="mb-2"
                        placeholder="First Name"
                        value={firstname}
                        onChange={(ev) => setFirstName(ev.target.value)}
                        type="firstname"
                        autoComplete="firstname"
                      />
                    </MDBCol>
                    <MDBCol col="6" className="">
                      <MDBInput
                        wrapperClass="mb-2"
                        placeholder="Last Name"
                        value={lastname}
                        onChange={(ev) => setLastName(ev.target.value)}
                        type="lastname"
                        autoComplete="lastname"
                      />
                    </MDBCol>
                  </MDBRow>
                  <MDBInput
                    wrapperClass="mb-2"
                    placeholder="Email@mail.com"
                    value={email}
                    onChange={(ev) => setEmail(ev.target.value)}
                    type="email"
                    autoComplete="email"
                  />

                  <MDBInput
                    wrapperClass="mb-2"
                    id="form2"
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(ev) => setPassword(ev.target.value)}
                    autoComplete="current-password"
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
            </MDBCol>

            <MDBCol col="6" className="mb-5">
              <div className="d-flex flex-column  justify-content-center gradient-custom-2 h-100 mb-4">
                <div className="text-black px-3 py-4 p-md-5 mx-md-4">
                  <h4 className="mb-4">We are more than just a company</h4>
                  <p className="small mb-0">
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit,
                    sed do eiusmod tempor incididunt ut labore et dolore magna
                    aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                    ullamco laboris nisi ut aliquip ex ea commodo consequat.
                  </p>
                </div>
              </div>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </div>
    </div>
  );
}

export default HomePage;
