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


  

function Login() {
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
    return <Navigate to="/dashboard" />;
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

export default Login;


  /**
           <h1 ref={ref}
      style={{
        fontSize: "4.5rem" ,
        transform: isInView ? "none" : "translateX(-50px)",
        opacity: isInView ? 1 : 0,
        transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s"
      }}

      className='text-center text-white'>
      <span><b><i style={{fontFamily:'Raleway',fontSize:'3.25rem', textShadow:'1px 1px 4px black'}}>Con</i></b></span>
      <span className=' fw-bold' style={{ fontFamily:"Dancing Script", marginLeft:'-15px', color:' #e9008c', textShadow:'2px 2px 5px black'}}>Scribe</span>
    
   </h1>
    */
/**
 * SIGNUP FORM
 * 
 *  const [firstname, setFirstname] = useState(""); 
  const [lastname, setLastname] = useState(""); 
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isSubscribed, setIsSubscribed] = useState(false);
  const [isChecked, setIsChecked] = useState(false); // Add state for checkbox
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
    return <Navigate to="/dashboard" />;
  }*/

/*  <MDBContainer fluid className='p-4'>
      <div className="row">
        <div className='col-sm-12 col-md-6 col-lg-6 text-center text-md-start d-flex flex-column justify-content-center'>
          <h1 className="my-5 display-3 fw-bold ls-tight px-3">
            The best offer <br />
            <span className="text-primary">for your business</span>
          </h1>

          <p className='px-3' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam
            quibusdam tempora at cupiditate quis eum maiores libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>

        </div>

        <div className='col-sm-12 col-md-6 col-lg-6 text-center text-md-start d-flex flex-column justify-content-center'>

          <div className='card my-5'>
            <div className='card-body p-5'>

              <div className="row">
              <div className='col-sm-12 col-md-6 col-lg-6 text-center text-md-start d-flex flex-column justify-content-center'>
                  <MDBInput 
                  wrapperClass='mb-4' 
                  label='First name' 
                  value={firstname}
                  type='text'
                  id='firstname' 
                 onChange={(e) => setFirstname(e.target.value)}
                  />
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6 text-center text-md-start d-flex flex-column justify-content-center'>
                  <MDBInput 
                  wrapperClass='mb-4' 
                  label='Last name' 
                  type='text'
                  value={lastname}
                  id='lastname' 
                  onChange={(e) => setLastname(e.target.value)}
                  />
                </div>
              </div>

              <MDBInput 
              wrapperClass='mb-4' 
              label='Email'
              type='email' 
              value={email}
              id='email' 
              onChange={(e) => setEmail(e.target.value)}
              required
              />

              <MDBInput 
              wrapperClass='mb-4' 
              label='Password'
              type='password'
              value={password}
              id='password' 
              onChange={(e) => setPassword(e.target.value)}
              required
              />

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox 
                name='flexCheck' 
                label='Subscribe to our newsletter' 
                type="checkbox"
                value={isSubscribed} 
                onChange={(e) => setIsSubscribed(e.target.checked)}
                id='flexCheckDefault' 
                />
              </div>

              <MDBBtn className='w-100 mb-4' 
              size='md'>sign up
              </MDBBtn>

              <div className="text-center">
                <p>or sign up with:</p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </MDBContainer>
 */


/** 
      <div className="w3-container w3-content ">
        <div
          className="row d-flex justify-content-center align-items-center w3-margin-bottom"
          style={{ padding: "40px" }}
        >
          <div className="col-sm-12 col-md-6 col-lg-6 text-md-start d-flex flex-column justify-content-center">
            <div className="container text-black">
              <AnimatedHeading />
              <h1 className="my-3 display-5 fw-bold ls-tight px-4">
                CUSTOM RECRUITING TOOLS
                <br />
                <span className="text-primary">
                  <b>TO BUILD YOUR BRAND</b>
                </span>
              </h1>

              <p className="px-4" style={{ color: "hsl(217, 10%, 50.8%)" }}>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Eveniet, itaque accusantium odio, soluta, corrupti aliquam
                libero veritatis? Dicta facilis sint aliquid ipsum atque?
              </p>
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6 text-md-start d-flex flex-column justify-content-center">
            <div className="card text-black w3-light-grey"
            style={{borderRadius: '10px'}}>
              <div className="card-body px-5 py-4">
                <h3 className="fw-bold mb-2 text-center text-uppercase">
                  Login
                </h3>
                <p
                  className="text-black-50 text-center mb-3"
                  style={{ fontSize: "13px" }}
                >
                  Please enter your login and password!
                </p>

                {error && <p className="text-danger text-center">{error}</p>}

                <Form onSubmit={handleSubmit}>
                  <Form.Group className="mb-3" controlId="ControlEmail">
                    <Form.Label style={{ fontSize: "13px" }}>
                      Email address
                    </Form.Label>
                    <Form.Control
                      type="email"
                      style={{ fontSize: "13px" }}
                      value={email}
                      placeholder="johndoe@email.com"
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Form.Group className="mb-3" controlId="ControlPassword">
                    <Form.Label style={{ fontSize: "13px" }}>
                      Password
                    </Form.Label>
                    <Form.Control
                      style={{ fontSize: "13px" }}
                      type="password"
                      value={password}
                      placeholder="Password"
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                  </Form.Group>

                  <Button
                    variant="outline-light"
                    type="submit"
                    className="mt-3 w-100"
                  >
                    Submit
                  </Button>
                </Form>

                <div className="text-center mt-3">
                  <p style={{ fontSize: "13px" }}>
                    Need an account? <Link to="/signup">Signup here</Link>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      */