import React, { useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import { Navigate } from "react-router-dom";
import { Button, Row, Col} from "react-bootstrap";
import Form from 'react-bootstrap/Form';
import {
  MDBBtn,
  MDBContainer,
  MDBInput,
  MDBCheckbox,
}
from 'mdb-react-ui-kit';
import TermsModal from "./Modals/TermsModal";
import AnimatedHeading from "../components/AnimatedHeading";
//import LogoWhite from "../assets/images/Logo/LogoWhite.png";
import 'bootstrap/dist/css/bootstrap.min.css';



function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
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
  }

  return (
 <div className="bg-secondary-subtle">

    <MDBContainer fluid className='p-4'>

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
                  <MDBInput wrapperClass='mb-4' label='First name' id='form1' type='text'/>
                </div>

                <div className='col-sm-12 col-md-6 col-lg-6 text-center text-md-start d-flex flex-column justify-content-center'>
                  <MDBInput wrapperClass='mb-4' label='Last name' id='form1' type='text'/>
                </div>
              </div>

              <MDBInput wrapperClass='mb-4' label='Email' id='form1' type='email'/>
              <MDBInput wrapperClass='mb-4' label='Password' id='form1' type='password'/>

              <div className='d-flex justify-content-center mb-4'>
                <MDBCheckbox name='flexCheck' value='' id='flexCheckDefault' label='Subscribe to our newsletter' />
              </div>

              <MDBBtn className='w-100 mb-4' size='md'>sign up</MDBBtn>

              <div className="text-center">
                <p>or sign up with:</p>
              </div>

            </div>
          </div>

        </div>

      </div>

    </MDBContainer>




 <div className="w3-container w3-content ">
      <div className="row d-flex justify-content-center align-items-center w3-margin-bottom"
      style={{padding:'40px'}} >
<div className="col-sm-12 col-md-6 col-lg-6 text-md-start d-flex flex-column justify-content-center">
<div className="container text-black" >
  <AnimatedHeading/>
  <h1 className="my-3 display-5 fw-bold ls-tight px-4">
          CUSTOM RECRUITING TOOLS<br />
            <span className="text-primary"><b>TO BUILD YOUR BRAND</b></span>
          </h1>

          <p className='px-4' style={{color: 'hsl(217, 10%, 50.8%)'}}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Eveniet, itaque accusantium odio, soluta, corrupti aliquam libero
            veritatis? Dicta facilis sint aliquid ipsum atque?
          </p>
  </div>
</div>
        <div className="col-sm-12 col-md-6 col-lg-6 text-md-start d-flex flex-column justify-content-center" >
          <div className="card text-black w3-light-grey" >
<div className="card-body px-5 py-4">
          <h3 className="fw-bold mb-2 text-center text-uppercase">Login</h3>
          <p className="text-black-50 text-center mb-3"
          style={{fontSize:'13px'}}>Please enter your login and password!</p>

          {error && <p className="text-danger text-center">{error}</p>}
 


          <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" 
      controlId="ControlEmail">
        <Form.Label style={{fontSize:'13px'}}>Email address</Form.Label>
        <Form.Control
    type="email"
    style={{fontSize:'13px'}}
        value={email}
        placeholder="johndoe@email.com"
        onChange={(e) => setEmail(e.target.value)}
        required />
      </Form.Group>


      <Form.Group className="mb-3" 
      controlId="ControlPassword">
        <Form.Label
         style={{fontSize:'13px'}}>Password</Form.Label>
        <Form.Control 
        style={{fontSize:'13px'}}
             type="password"
             value={password}
             placeholder="Password"
             onChange={(e) => setPassword(e.target.value)}
             required />
      </Form.Group>

      <Row className="d-flex align-items-center">
                    <Col className="col-sm-12 col-md-12 col-lg-12 mt-3 justify-content-end">
                      <div style={{ marginLeft: "5px" }}>
                        <div
                          style={{
                            display: "flex",
                            alignItems: "start", // Align checkbox and text vertically
                            gap: "10px", // Add spacing between checkbox and text
                          }}
                        >
                          <MDBCheckbox
                            className="border border-2"
                            style={{fontSize:'13px'}}
                            labelStyle={{ fontSize: "0.7rem", color: "gray" }}
                            id="terms"
                            required
                            name="terms"
                            checked={isChecked} // Use the state to determine if the checkbox is checked
                            onChange={(e) => setIsChecked(e.target.checked)} // Update state when checkbox is clicked
                          />
                        <div className=" text-secondary"
                              style={{ fontSize: "13px" }}
                            >
                              By clicking submit, I consent to the <span> <TermsModal /> </span>                             
                            </div>
                        </div>
                      </div>
                    </Col>
                  </Row>
      <Button 
      variant="outline-light"
      type="submit"
      className="mt-3 w-100">
        Submit 
      </Button>
          </Form>

          <div className="text-center mt-3">
            <p style={{fontSize:'13px'}}>
              Need an account? <Link to="/signup"
              >Signup here</Link>.
            </p>
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