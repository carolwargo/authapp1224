import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import {MDBInput } from "mdb-react-ui-kit";
import TermsModal from "../components/Modals/TermsModal";
import PrivacyModal from "../components/Modals/PrivacyModal";
import { useInView } from "framer-motion";
import { Navigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

function Signup() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false });

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [terms, setTerms] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false); // Add redirect state

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
        body: JSON.stringify({ firstname, lastname, email, password, terms }),
      });
      if (response.status === 200) {
        // Ensure the success status is 200
        setRedirect(true); // Redirect after successful login
      }
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

  // Redirect the user after successful login
  if (redirect) {
    return <Navigate to="/dashboard" />;
  }

  return (
    <div className="w3-black">
      <div className="w3-black">
        <style>
          {`
        .card {
          background-color: black;
        }

    .custom-wrapper-class {
  background-color: black;
  padding: 5px;
  border-radius: 5px;
  color: white; 
  font-size: 13px !important;  
}
  .custom-wrapper-class input { 
    background-color: black;
    color: white;
      font-size: 13px !important;  
  } 

 input::placeholder {
  color: white !important;
  font-size: 12px !important;
}


  `}
        </style>
        <div className="w3-container w3-content">
          <div className="w3-padding-24 ">
            <div className="row d-flex align-items-center">
              <div className="col-sm-12 col-md-6 col-lg-6 text-lg-start d-flex flex-column justify-content-center align-items-center">
                <div>
                  <div className="px-5">
                    <h1
                      className="display-1 fw-bold"
                      style={{
                        fontFamily: "Roboto",
                        textShadow: "2px 2px 4px black",
                      }}
                    >
                      <span className=" m-0 p-0"> </span>
                      Chart Your Journey <br />
                      <span
                        style={{
                          color: " #e9008c",
                          textShadow: "2px 2px 4px black",
                        }}
                      >
                        Build Your Brand
                      </span>
                    </h1>

                    <p style={{ color: "hsl(217, 10%, 50.8%)" }}>
                      <b style={{ fontSize: "18px" }}>conscribedigital.com-</b>{" "}
                      Digital Recruiting Services for Student-Athletes provides
                      Unfiltered Guidance and a Seasoned Perspective Through a
                      Unique Approach.
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-sm-12 col-md-6 col-lg-6 text-md-start d-flex flex-column justify-content-center align-items-center">
                <div className="card">
                  <div className="px-3 border rounded">
                    <div className="card-body">
                      <h1
                        ref={ref}
                        style={{
                          fontSize: "3.75rem",
                          letterSpacing: "-1px",
                          textShadow:
                            "1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px  1px 2px black",
                          transform: isInView ? "none" : "translateX(-50px)",
                          opacity: isInView ? 1 : 0,
                          transition:
                            "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
                        }}
                        className="text-center fw-light text-white mb-0"
                      >
                        <b>con</b>
                        <span style={{ color: "#e9008c", marginLeft: "-5px" }}>
                          scribe.
                        </span>
                      </h1>
                      <div className="text-center text-secondary fw-light mb-3">
  <p className="small">Create a new account and get started today.</p>
</div>


{error && <p className="text-danger text-center">{error}</p>}
            {successMessage && (
              <p className="text-success text-center">
                {successMessage} 
                <Link to="/login">Login here.</Link>
              </p>
            )}

                      <Form onSubmit={handleSubmit}>
                        <div className="row mb-2">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <Form.Label
                              className="pb-0 mb-0 mt-0 pt-0"
                              style={{ fontSize: "14px", color: "white" }}
                            >
                              First Name
                            </Form.Label>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-white px-0"
                              type="text"
                              value={firstname}
                              placeholder="John"
                              id="firstname"
                              onChange={(e) => setFirstname(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <Form.Label
                              className="pb-0 mb-0 mt-0 pt-0"
                              style={{ fontSize: "14px", color: "white" }}
                            >
                              Last Name
                            </Form.Label>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-white px-0"
                              type="text"
                              value={lastname}
                              placeholder="Doe"
                              id="lastname"
                              onChange={(e) => setLastname(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <Form.Label
                          className="pb-0 mb-0 mt-0 pt-0"
                          style={{ fontSize: "14px", color: "white" }}
                        >
                          Email address
                        </Form.Label>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-white px-0 mb-2"
                          type="email"
                          value={email}
                          placeholder="email@mail.com"
                          id="email"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />

                        <Form.Label
                          className="pb-0 mb-0"
                          style={{ fontSize: "14px", color: "white" }}
                        >
                          Password
                        </Form.Label>
                        <MDBInput
                          wrapperClass="custom-wrapper-class mb-3 px-0"
                          type="password"
                          value={password}
                          placeholder="Password"
                          id="password"
                          onChange={(e) => setPassword(e.target.value)}
                          required
                        />

                        <div className=" align-items-center small text-secondary my-2 mx-2">
                          <span>
                            <input
                              type="checkbox"
                              value={terms}
                              id="terms"
                              name="terms"
                              onChange={(e) => setTerms(e.target.value)}
                              required
                            />
                          </span>
                          <span className="mx-1"
                          style={{fontSize: "13px"}}>
                        By registering I agree to</span><span><TermsModal />
                          </span> <span  style={{fontSize: "13px"}}> and  </span>  <span> <PrivacyModal /> </span> 
                        </div>
                        <Button
                          variant="outline-light"
                          type="submit"
                          className="mt-2 w-100"
                          style={{ fontSize: "13px" }}
                        >
                          Register
                        </Button>

                        <div className="text-center text-white my-2">
                          <p className=" small">
                            Already have an account?{" "}
                            <Link to="/login" className=" link-secondary">
                              Login
                            </Link>
                            .
                          </p>
                        </div>
                      </Form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Signup;


/**
 *     <div className="container" style={{ padding: "20px" }}>
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
              <input
                type="checkbox"
                value={terms}
                id="terms"
                name="terms"
                required
              />
              <MDBBtn type="submit" className="w-100">
                Signup
              </MDBBtn>

              <div className="text-center mt-3">
                <p>
                  Already have an account? <Link to="/login">Login here</Link>.
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
 */