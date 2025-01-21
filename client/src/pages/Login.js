import React, { useState, useRef } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { useInView } from "framer-motion";
import { Navigate } from "react-router-dom";
import { Button } from "react-bootstrap";
import TermsModal from "../components/Modals/TermsModal";
import PrivacyModal from "../components/Modals/PrivacyModal";
import Form from "react-bootstrap/Form";
import {MDBInput} from "mdb-react-ui-kit";
import '../App.css'; // Import your CSS file


  

function LoginPage() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: false});


  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [redirect, setRedirect] = useState(false); // Add redirect state

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    try {
      const response = await axios.post(
        "http://localhost:5001/api/auth/login", // Full URL
        { email, password },
        { withCredentials: true } // To send cookies with the request, if needed
      );

      if (response.status === 200) {
        // Ensure the success status is 200
        setRedirect(true); // Redirect after successful login
      }
    } catch (err) {
      const errorMsg =
        err.response?.data?.message || "Login failed. Please try again.";
      setError(errorMsg);
    }
  };

  // Redirect the user after successful login
  if (redirect) {
    return <Navigate to="/profilelayout/profile" />;
  }

  return (
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
      <div className="w3-padding-24">
        <div className="row d-flex align-items-center">
          <div className="col-sm-12 col-md-12 col-lg-12 d-flex justify-content-center align-items-center">
         
            <div className="card rounded" style={{width:'100%', maxWidth:'450px'}}>
            <div className="px-3">
              <div className="card-body">

              <h1 ref={ref}
      style={{
        fontSize: "5rem", letterSpacing:'-2px',
        textShadow:
        '1px 1px 2px black, -1px -1px 2px black, 1px -1px 2px black, -1px  1px 2px black',
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}

      className='text-center fw-light text-white mt-0 mb-0 pt-0'>
     <b>con</b><span style={{color:'#e9008c', marginLeft:'-3px'}}>scribe.</span>
   </h1>      

   <div >
   <h5 className="text-center text-secondary fw-light mb-4">
   Login to your account.
    </h5>
    </div>   
                
   {error && <p className="text-danger text-center">{error}</p>}

<Form onSubmit={handleSubmit}>
       
              <Form.Label
              className="pb-0 mb-0 mt-0 pt-0" 
              style={{ fontSize: "14px", color: "white" }}> 
                      Email address
                    </Form.Label>
                <MDBInput
                  wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                  type="email"
                  value={email}
                  placeholder="email@mail.com"
                  id="email"
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />


     <Form.Label
              className="pb-0 mb-0" 
              style={{ fontSize: "14px", color: "white" }}> 
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
                  <div className="d-flex justify-content-center mx-4 mb-2">
            <Link to="#!" className="small link-secondary">Forgot password?</Link>
             
          </div>
          
        <Button
                    variant="outline-light"
                    type="submit"
                    className="mt-3 w-100"
                    style={{ fontSize: "13px" }}
                  >
                    Login
                  </Button>

                <div className="text-center text-white my-2">
                  <p className=" small">
                  Don't have an account? <Link to="/signup" className=" link-secondary">Sign Up</Link>.
                  </p>
                  <span className="me-2"> <TermsModal /> </span> <PrivacyModal />
                 
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
  );
}

export default LoginPage;



/*
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
*/