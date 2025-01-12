import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBCheckbox,
} from "mdb-react-ui-kit";
import '@fortawesome/fontawesome-free/css/all.min.css';
import TermsModal from "../Modals/TermsModal";

function FinishedSlide() {
  const [isChecked, setIsChecked] = useState(false); // Use boolean for checkbox state
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    if (!isChecked) {
      setError("You must accept the terms and conditions.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5001/api/auth/signup", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ isChecked }), // Send checkbox state
      });

      if (!response.ok) {
        // Parse and throw backend error
        const errorData = await response.json();
        throw new Error(errorData.message || "Step 1 failed!");
      }

      // Parse response on success
      const data = await response.json();
      console.log("Step 1: Contact completed:", data);
      setSuccessMessage("Step 1 Completed!");
    } catch (err) {
      console.error("Step 1 completion error:", err.message);
      setError(err.message);
    }
  };

  return (
    <MDBContainer style={{ padding: "20px" }}>
      <div className="row justify-content-center">
        <div className="col-sm-12 col-md-8 col-lg-8">
          <MDBContainer
            className="w3-padding-large rounded shadow"
            style={{ backgroundColor: "rgb(243, 243, 243)" }}
          >
            <div className="w3-container w3-content w3-padding-24">
              <MDBRow className="form-text-header-black d-flex align-items-center mb-3">
                <MDBCol className="col-sm-12 col-md-12 col-lg-12 justify-content-end">
                      <p className='fw-bold' style={{fontSize:'12px'}}>
                                                  <span className="fw-bold" style={{marginLeft:'8px'}}> 
                                                                       <b><Link to="/infolayout/intro" className=" text-decoration-none opacity-50">
                                                                      <i className="fas fa-home"></i></Link></b>  
                                                                      </span>  
                                                             <span className="text-primary" style={{marginLeft:'8px'}}>
                                                                <b className=" opacity-50" style={{  textShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)'}}>  
                                                                   <i className=" fas fa-check"></i> <Link to="/infolayout/contact" className="text-decoration-none"> CONTACT</Link></b>     
                                                       </span> 
                                                     
                                                               <span className="opacity-60 text-primary" style={{marginLeft:'10px'}}>
                                                                <b className=" opacity-50"style={{  textShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)'}}>  
                                                                   <i className=" fas fa-check"></i><Link to="/infolayout/personal" className="text-decoration-none">PERSONAL</Link></b> 
                                                       </span> 
                               
                                                       <span className="opacity-60 text-primary" style={{marginLeft:'10px'}}>
                                                                <b className=" opacity-50"style={{  textShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)'}}>  
                                                                   <i className=" fas fa-check"></i><Link to="/infolayout/athletic" className="text-decoration-none">ATHLETICS</Link></b> 
                                                       </span> 

                                                       <span className="opacity-60 text-primary" style={{marginLeft:'10px'}}>
                                                                <b className=" opacity-50"style={{  textShadow: '4px 4px 10px rgba(0, 0, 0, 0.5)'}}>  
                                                                   <i className=" fas fa-check"></i><Link to="/infolayout/academics" className="text-decoration-none">ACADEMICS</Link></b> 
                                                       </span> 
                            
                                           </p>
                </MDBCol>
              </MDBRow>

              {error && <p className="text-danger">{error}</p>}
              {successMessage && <p className="text-primary">{successMessage}</p>}

              <MDBRow className="form-text-header-black d-flex align-items-center mb-3">
                <h1>THANK YOU!</h1>
                <MDBCol className="col-sm-12 col-md-12 col-lg-12 justify-content-end">
                  <form onSubmit={handleSubmit}>
                    <MDBRow className="form-text-header-black d-flex align-items-center mb-3">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12 justify-content-end">
                        <div className="mt-4" style={{ marginLeft: "5px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "start", // Align checkbox and text vertically
                              gap: "10px", // Add spacing between checkbox and text
                            }}
                          >
                            <MDBCheckbox
                              className="border border-2"
                              labelStyle={{ fontSize: "0.8rem", color: "gray" }}
                              id="terms"
                              required
                              name="terms"
                              checked={isChecked} // Use the state to determine if the checkbox is checked
                              onChange={(e) => setIsChecked(e.target.checked)} // Update state when checkbox is clicked
                            />
                            <div>
                              <p>
                                By clicking submit, I consent to the <TermsModal /> and certify accuracy of the
                                information provided.
                              </p>
                            </div>
                          </div>
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <div className="mt-2">
                      <Link to="/personal-slide">
                        <button type="submit" className="w-100 btn-sm fw-bold btn btn-primary mt-2">
                          <span style={{ fontSize: "12px" }}>Submit </span>
                        </button>
                      </Link>
                    </div>
                  </form>
                </MDBCol>
              </MDBRow>
            </div>
          </MDBContainer>
        </div>
      </div>
    </MDBContainer>
  );
}

export default FinishedSlide;
