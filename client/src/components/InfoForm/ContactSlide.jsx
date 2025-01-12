import React, { useState } from "react";
import { Link } from "react-router-dom";
import TermsModal from "../Modals/TermsModal";
import {
  MDBCheckbox,
  MDBContainer,
  MDBInput,
  MDBRow,
  MDBCol,
} from "mdb-react-ui-kit";


function ContactSlide() {

  const states = [
    "AL", "AK", "AZ", "AR", "CA", "CO", "CT", "DE", "FL", "GA", 
    "HI", "ID", "IL", "IN", "IA", "KS", "KY", "LA", "ME", "MD", 
    "MA", "MI", "MN", "MS", "MO", "MT", "NE", "NV", "NH", "NJ", 
    "NM", "NY", "NC", "ND", "OH", "OK", "OR", "PA", "RI", "SC", 
    "SD", "TN", "TX", "UT", "VT", "VA", "WA", "WV", "WI", "WY"
  ];

  const [isChecked, setIsChecked] = useState(false); // Use boolean for checkbox state
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetaddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

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
        body: JSON.stringify({ firstname, lastname, email, isChecked }),
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
    <div className=" bg-primary">
      <style>
        {`
        .custom-select {
  appearance: none; /* Removes default dropdown styling */
  background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6"><path fill="gray" d="M0 0l5 6 5-6z"/></svg>') 
    no-repeat right 10px center;
  background-size: 12px;
  padding-right: 30px; /* Space for the caret */
}

        `}
      </style>
      <MDBContainer style={{ padding: "20px" }}>
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-8">
            <MDBContainer
              className="w3-padding-large rounded shadow"
              style={{
                backgroundColor: "rgb(243, 243, 243)",
              }}
            >
              <div className="w3-container w3-content w3-padding-24">
                {error && <p className="text-danger">{error}</p>}
                {successMessage && (
                  <p className="text-success ">{successMessage}</p>
                )}
                <h5
                  className="mb-3 text-primary"
                  style={{
                    textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                    marginLeft: "6px",
                  }}
                >
                  <b className=" opacity-75">CONTACT INFORMATION</b>
                </h5>
                <form onSubmit={handleSubmit}>
                  <MDBRow className="">
                    <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <MDBInput
                        className="mb-2"
                        type="text"
                        value={firstname}
                        placeholder="John"
                        onChange={(e) => setFirstname(e.target.value)}
                        required
                      />
                    </MDBCol>
                    <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <MDBInput
                        className="mb-2"
                        type="text"
                        value={lastname}
                        placeholder="Doe"
                        onChange={(e) => setLastname(e.target.value)}
                        required
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBRow className="">
                    <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <MDBInput
                        className="mb-2"
                        type="email"
                        value={email}
                        placeholder="johndoe@email.com"
                        onChange={(e) => setEmail(e.target.value)}
                        required
                      />
                    </MDBCol>
                    <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <MDBInput
                        className="mb-2"
                        type="phone"
                        value={phone}
                        placeholder="(123)456-7890"
                        onChange={(e) => setPhone(e.target.value)}
                        required
                      />
                    </MDBCol>
                  </MDBRow>

                  <MDBInput
                    className="mb-2"
                    type="text"
                    value={streetaddress}
                    placeholder="12345"
                    onChange={(e) => setStreetAddress(e.target.value)}
                    required
                  />

                  <MDBRow className="">
                    <MDBCol className="col-sm-12 col-md-5 col-lg-5">
                      <MDBInput
                        type="text"
                        value={city}
                        placeholder="Annapolis"
                        onChange={(e) => setCity(e.target.value)}
                        required
                      />
                    </MDBCol>
                    <MDBCol className="col-sm-12 col-md-3 col-lg-3">
                    <select
  className="custom-select form-control"
  value={state}
  onChange={(e) => setState(e.target.value)}
  required
>
  <option value="" disabled>
    Select
  </option>
  {states.map((stateAbbr) => (
    <option key={stateAbbr} value={stateAbbr}>
      {stateAbbr}
    </option>
  ))}
</select>

    </MDBCol>
                    <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <MDBInput
                        type="text"
                        value={zipcode}
                        placeholder="12345"
                        onChange={(e) => setZipcode(e.target.value)}
                        required
                      />
                    </MDBCol>
                  </MDBRow>

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
                            <p
                              className=" text-muted"
                              style={{ fontSize: "13px" }}
                            >
                              By clicking submit, I consent to the{" "}
                              <TermsModal /> and certify accuracy of the
                              information provided.
                            </p>
                          </div>
                        </div>
                      </div>
                    </MDBCol>
                  </MDBRow>
                  <div className="mt-2">
                    <Link to="/infolayout/personal">
                      <button
                        type="submit"
                        className="w-100 btn-sm fw-bold btn btn-primary mt-2"
                      >
                        <span style={{ fontSize: "12px" }}>Submit </span>
                      </button>
                    </Link>
                  </div>
                </form>
              </div>
            </MDBContainer>
          </div>
        </div>
      </MDBContainer>
    </div>
  );
}

export default ContactSlide;

/**
 *     <MDBRow className="form-text-header-black d-flex align-items-center mb-2">
                                 <MDBCol className="col-sm-12 col-md-12 col-lg-12 justify-content-end">
                                 <p className='fw-bold' style={{fontSize:'12px'}}>
                                
                              <span className="fw-bold form-text-header-black" style={{marginLeft:'8px'}}> 
                                                                                                      <b><Link to="/infolayout/intro" className=" text-decoration-none">
                                                                                                     <i className="fas fa-home"></i></Link></b>  
                                                                                                     </span>  
                                
                                  <span className="" style={{marginLeft:'8px'}}>
                                     <b className="form-text-header-black text-primary">1- CONTACT</b> 
                                   
                            </span> 
                                     
                            <span className="fw-bold form-text-header-black" style={{marginLeft:'10px'}}> 
                             <b><Link to="/infolayout/personal" className=" link-primary text-decoration-none opacity-50">
                             2- PERSONAL</Link></b>  
                            </span>

                            <span className="fw-bold form-text-header-black" style={{marginLeft:'10px'}}> 
                             <b ><Link to="/infolayout/athletic" className=" link-primary text-decoration-none opacity-50">
                             3- ATHLETICS</Link></b>  
                            </span>

                            <span className="fw-bold form-text-header-black" style={{marginLeft:'10px'}}> 
                             <b ><Link to="/infolayout/academic" className=" link-primary text-decoration-none opacity-50">
                             4- ACADEMICS</Link></b>  
                            </span>
                          
                                     
                                    
                         
                                  
                                     </p>
                        </MDBCol>
                                
                                     </MDBRow>
 */
