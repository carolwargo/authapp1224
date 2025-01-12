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

function IntroSlide() {
  const states = [
    "AL",
    "AK",
    "AZ",
    "AR",
    "CA",
    "CO",
    "CT",
    "DE",
    "FL",
    "GA",
    "HI",
    "ID",
    "IL",
    "IN",
    "IA",
    "KS",
    "KY",
    "LA",
    "ME",
    "MD",
    "MA",
    "MI",
    "MN",
    "MS",
    "MO",
    "MT",
    "NE",
    "NV",
    "NH",
    "NJ",
    "NM",
    "NY",
    "NC",
    "ND",
    "OH",
    "OK",
    "OR",
    "PA",
    "RI",
    "SC",
    "SD",
    "TN",
    "TX",
    "UT",
    "VT",
    "VA",
    "WA",
    "WV",
    "WI",
    "WY",
  ];

  const hands = [
    "Right",
    "Left",
    "Both",
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

  const [highschool, setHighschool] = useState("");
  const [hslocation, setHslocation] = useState("");
  const [gradyear, setGradYear] = useState("");
  const [dob, setDob] = useState("");
const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState(""); 
  const [facebook, setFacebook] = useState("");

  const [hand, setHand] = useState("");
  const [sport, setSport] = useState("");
  const [hslevel, setHsLevel] = useState("");
  const [primaryposition, setPrimaryPosition] = useState("");
  const [secondaryposition, setSecondaryPosition] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

 const [testscores, setTestScores] = useState("");
  const [gpa, setGpa] = useState("");
  
  const [athleticextra, setAthleticExtra] = useState("");
  const [academicextra, setAcademicExtra] = useState("");
  
  const [successMessage, setSuccessMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSuccessMessage("");

    try {
      const response = await fetch("http://localhost:5001/api/profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ 
          firstname, 
          lastname, 
          email, 
          phone, 
          streetaddress, 
          city, 
          state, 
          zipcode, 
          highschool,
          hslocation,
          gradyear,
          dob,
          twitter,
          instagram,
          facebook,
          hand,
          sport,
          hslevel,
          primaryposition,
          secondaryposition,
          height,
          weight,
          testscores,
          gpa,
          athleticextra,
          academicextra,
          isChecked }),
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
    <div>

      <style>
        {` 

        select {
          color: light-gray; /* Change text color */
  font-size: 13px; /* Adjust font size */
  font-style: italic; /* Make it italic */
  opacity: 0.8; /* Adjust transparency */
   font-weight: 300; /* Adjust font weight */
        }
        input::placeholder {
  color: #d4d3d2; /* Change text color */
  font-size: 11px; /* Adjust font size */
  font-style: italic; /* Make it italic */
     color: gray; /* Change text color */
     font-weight: 300; /* Adjust font weight */
}

     textarea::placeholder {
  color: #d4d3d2; /* Change text color */
  font-size: 11px; /* Adjust font size */
  font-style: italic; /* Make it italic */
}
        .custom-select {
  font-size: 11px; /* Adjust font size */
  font-style: italic; /* Make it italic */
  appearance: none; /* Removes default dropdown styling */
  background: url('data:image/svg+xml;charset=UTF-8,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 10 6"><path fill="gray" d="M0 0l5 6 5-6z"/></svg>') 
    no-repeat right 10px center;
  background-size: 12px;
  padding-right: 30px; /* Space for the caret */
}

        `}
      </style>
      <MDBContainer className="w3-hide-small w3-hide-medium">
        {/**start WHOLE ROW */}
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-8">
            <MDBContainer
              className="w3-padding-large rounded shadow"
              style={{
                backgroundColor: "rgb(243, 243, 243)",
              }}
            >
              {/**start INTRO */}
              <div className="w3-container w3-content w3-padding-24">
                <h2 className="text-center">Tell Us About Yourself!</h2>
                <p className="text-center">
                  Providing accurate and up-to-date information is essential to
                  enhance credibility and optimize efficiency through the
                  recruiting process.
                </p>

                <p className="text-center mt-4">
                  <b>OUR 4-STEP DATA COLLECTION PROCESS: </b> Will guide you
                  through a series of digital forms to share the necessary
                  details. All submitted information will be securely stored in
                  your client profile and used to develop your tailored
                  recruiting solutions.
                  <b style={{ marginRight: "5px" }}>
                    {" "}
                    CATEGORIES ARE AS FOLLOWS:{" "}
                  </b>{" "}
                  <span>
                    <Link to="/contact-slide" className=" link-dark">
                      Contact Information
                    </Link>{" "}
                  </span>
                  ,
                  <span>
                    {" "}
                    <Link to="/personal-slide" className=" link-dark">
                      Personal Information
                    </Link>{" "}
                  </span>
                  ,
                  <span>
                    {" "}
                    <Link to="/athletic-slide" className=" link-dark">
                      Athletic Information
                    </Link>{" "}
                  </span>
                  ,
                  <span>
                    {" "}
                    <Link to="/academic-slide" className=" link-dark">
                      Academic Information{" "}
                    </Link>{" "}
                  </span>
                </p>
              </div>
              {/**end INTRO */}
              <hr />
              <div className="information-form-container">
                {error && <p className="text-danger">{error}</p>}
                {successMessage && (
                  <p className="text-success ">{successMessage}</p>
                )}

                <form onSubmit={handleSubmit}>
                          {/**start CONTACT*/}
                  <div className="w3-container w3-padding-24">
                    <h5
                      className="mb-3 text-black"
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className=" opacity-75">CONTACT INFORMATION</b>
                    </h5>
                    <MDBRow className="">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>First Name</p>
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
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Last Name</p>
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

                    <MDBRow className=" contact-row">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Email Address</p>
                        <MDBInput
                          className="mb-2"
                          type="email"
                          value={email}
                          placeholder="mail@email.com"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Phone Number</p>
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

                    <MDBRow className="address-row">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Street Address</p>
                      
                    <MDBInput
                      className="mb-2"
                      type="text"
                      value={streetaddress}
                      placeholder="12345 Main St"
                      onChange={(e) => setStreetAddress(e.target.value)}
                      required
                    />
                    </MDBCol>
                    </MDBRow>
                    
                    <MDBRow className="address2-row">
                      <MDBCol className="col-sm-12 col-md-5 col-lg-5">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>City</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={city}
                          placeholder="Annapolis"
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-3 col-lg-3">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>State</p>
                        <select
                          className="custom-select form-control mb-2"
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
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Zip Code</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={zipcode}
                          placeholder="12345"
                          onChange={(e) => setZipcode(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>
                  
                 <MDBRow className="social-media-row">
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>X (Twitter)</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={twitter}
                         placeholder="@Handle"
                          onChange={(e) => setTwitter(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Instagram</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={instagram}
                            placeholder="@Handle"
                          onChange={(e) => setInstagram(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Facebook</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={facebook}
                              placeholder="@Handle"
                          onChange={(e) => setFacebook(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                  </div>
                  {/**end CONTACT */}


                      {/**start PERSONAL */}
                      <div className="w3-container w3-content w3-padding-24">
                    <h5
                      className="mb-3 text-black"
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className=" opacity-75">PERSONAL INFORMATION</b>
                    </h5>
                    <MDBRow className="highschool-row">
                      <MDBCol className="col-sm-12 col-md-8 col-lg-8">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Current High School</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={highschool}
                          placeholder="Youtown High School"
                          onChange={(e) => setHighschool(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Located at</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={hslocation}
                          placeholder="'HS City, State'"
                          onChange={(e) => setHslocation(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="highschool-row">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Grad Year</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={gradyear}
                          placeholder="'2029'"
                          onChange={(e) => setGradYear(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Date of Birth</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={dob}
                          placeholder="'01/01/2001'"
                          onChange={(e) => setDob(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

             
                  </div>
                  {/**end PERSONAL */}

                  {/**start ATHLETIC */}
                  <div className="w3-container w3-content w3-padding-24">
                    <h5
                      className="mb-3 text-black"
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className=" opacity-75">ATHLETIC INFORMATION</b>
                    </h5>
                    <MDBRow className="sport-row">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Sport of Interest</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={sport}
                          placeholder="'Wrestling'"
                          onChange={(e) => setSport(e.target.value)}
                          required
                        />
                      </MDBCol>

                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Team (JV/Varsity)</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={hslevel}
                          placeholder="'Varsity'"
                          onChange={(e) => setHsLevel(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="metrics-row">  
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Height</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={height}
                          placeholder="'6ft. 2in.'"
                          onChange={(e) => setHeight(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Weight</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={weight}
                          placeholder="'210lbs'"
                          onChange={(e) => setWeight(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Handedness</p>
                        <select
                          className="custom-select form-control"
                          value={hand}
                          onChange={(e) => setHand(e.target.value)}
                          required
                        >
                          <option value="" disabled>
                           Select
                          </option>
                          {hands.map((handAbbr) => (
                            <option key={handAbbr} value={handAbbr}>
                              {handAbbr}
                            </option>
                          ))}
                        </select>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className=" position-row">
                    <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Positions</p>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={primaryposition}
                          placeholder="Primary Position"
                          onChange={(e) => setPrimaryPosition(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={secondaryposition}
                          placeholder="Secondary Position"
                          onChange={(e) => setSecondaryPosition(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="athletic-textarea-row">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Additional Information</p>
                        <textarea
                          className="form-control mb-2"
                          rows="5"
                          value={athleticextra}
                          placeholder="'honors, awards, etc...'"  
                          onChange={(e) => setAthleticExtra(e.target.value)}
                        ></textarea>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  {/**end ATHLETIC */}

                  {/**start ACADEMIC */}
                  <div className="w3-container w3-content w3-padding-top-24">
                    <h5
                      className="mb-3 text-black"
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className=" opacity-75">ACADEMIC INFORMATION</b>
                    </h5>


                    <MDBRow className="highschool-row">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Current High School</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={highschool}
                          placeholder="'Youtown High School'"
                          onChange={(e) => setHighschool(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="highschool-row">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Grad Year</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={gradyear}
                          placeholder="'2029'"
                          onChange={(e) => setGradYear(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Date of Birth</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={dob}
                          placeholder="'01/01/2001'"
                          onChange={(e) => setDob(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="acadmics-row">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                            <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>ACT/SAT Score</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={testscores}
                          placeholder="'30/1400'"
                          onChange={(e) => setTestScores(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>GPA</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={gpa}
                          placeholder="'3.9'"
                          onChange={(e) => setGpa(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="academic-textarea-row">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Additional Information</p>
                        <textarea
                          className="form-control mb-2"
                          rows="5"
                          value={academicextra}
                          placeholder="'honors, awards, etc...'"  
                          onChange={(e) => setAcademicExtra(e.target.value)}
                        ></textarea>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  {/**end ACADEMIC */}

                  {/**start CHECKBOX AND SUBMIT */}
                  <div className="w3-container w3-content w3-padding-24">
                  <MDBRow className="d-flex align-items-center">
                    <MDBCol className="col-sm-12 col-md-12 col-lg-12 justify-content-end">
                      <div className="mt-2" style={{ marginLeft: "5px" }}>
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
                  <div className="mb-2">
                    <Link to="/infolayout/personal">
                      <button
                        type="submit"
                        className="w-100 btn-sm fw-bold btn btn-dark mt-2"
                      >
                        <span style={{ fontSize: "12px" }}>Submit </span>
                      </button>
                    </Link>
                  </div>
                  </div>
                  {/**END CHECKBOX AND SUBMIT */}
                </form>
                {/**END form */}
              </div>
            </MDBContainer>
          </div>
        </div>
        {/*end WHOLE ROW */}
      </MDBContainer>




      <MDBContainer className="w3-hide-large">
        {/**start WHOLE ROW */}
        <div className="row justify-content-center">
          <div className="col-sm-12 col-md-8 col-lg-8">
            <MDBContainer
              className=" rounded shadow"
              style={{
                backgroundColor: "rgb(243, 243, 243)",
              }}
            >
              {/**start INTRO */}
              <div className="w3-container w3-content w3-padding-24">
                <h2 className="text-center">Tell Us About Yourself!</h2>
                <p className="text-center">
                  Providing accurate and up-to-date information is essential to
                  enhance credibility and optimize efficiency through the
                  recruiting process.
                </p>

                <p className="text-center mt-4">
                  <b>OUR 4-STEP DATA COLLECTION PROCESS: </b> Will guide you
                  through a series of digital forms to share the necessary
                  details. All submitted information will be securely stored in
                  your client profile and used to develop your tailored
                  recruiting solutions.
                  <b style={{ marginRight: "5px" }}>
                    {" "}
                    CATEGORIES ARE AS FOLLOWS:{" "}
                  </b>{" "}
                  <span>
                    <Link to="/contact-slide" className=" link-dark">
                      Contact Information
                    </Link>{" "}
                  </span>
                  ,
                  <span>
                    {" "}
                    <Link to="/personal-slide" className=" link-dark">
                      Personal Information
                    </Link>{" "}
                  </span>
                  ,
                  <span>
                    {" "}
                    <Link to="/athletic-slide" className=" link-dark">
                      Athletic Information
                    </Link>{" "}
                  </span>
                  ,
                  <span>
                    {" "}
                    <Link to="/academic-slide" className=" link-dark">
                      Academic Information{" "}
                    </Link>{" "}
                  </span>
                </p>
              </div>
              {/**end INTRO */}
              <hr />
              <div className="information-form-container">
                {error && <p className="text-danger">{error}</p>}
                {successMessage && (
                  <p className="text-success ">{successMessage}</p>
                )}

                <form onSubmit={handleSubmit}>
                   {/**start CONTACT*/}
                  <div className="w3-container w3-padding-24">
                    <h5
                      className="mb-3 text-black"
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className=" opacity-75">CONTACT INFORMATION</b>
                    </h5>
                    <MDBRow className="">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>First Name</p>
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
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Last Name</p>
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

                    <MDBRow className=" contact-row">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Email Address</p>
                        <MDBInput
                          className="mb-2"
                          type="email"
                          value={email}
                          placeholder="mail@email.com"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Phone Number</p>
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

                    <MDBRow className="address-row">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Street Address</p>
                      
                    <MDBInput
                      className="mb-2"
                      type="text"
                      value={streetaddress}
                      placeholder="12345 Main St"
                      onChange={(e) => setStreetAddress(e.target.value)}
                      required
                    />
                    </MDBCol>
                    </MDBRow>
                    
                    <MDBRow className="address2-row">
                      <MDBCol className="col-sm-12 col-md-5 col-lg-5">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>City</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={city}
                          placeholder="Annapolis"
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-3 col-lg-3">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>State</p>
                        <select
                          className="custom-select form-control mb-2"
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
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Zip Code</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={zipcode}
                          placeholder="12345"
                          onChange={(e) => setZipcode(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>
                  
                 <MDBRow className="social-media-row">
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>X (Twitter)</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={twitter}
                         placeholder="@Handle"
                          onChange={(e) => setTwitter(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Instagram</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={instagram}
                            placeholder="@Handle"
                          onChange={(e) => setInstagram(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Facebook</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={facebook}
                              placeholder="@Handle"
                          onChange={(e) => setFacebook(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                  </div>
                  {/**end CONTACT */}

                  {/**start PERSONAL */}
                  <div className="w3-container w3-content w3-padding-24">
                    <h5
                      className="mb-3 text-black"
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className=" opacity-75">PERSONAL INFORMATION</b>
                    </h5>
                    <MDBRow className="highschool-row">
                      <MDBCol className="col-sm-12 col-md-8 col-lg-8">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Current High School</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={highschool}
                          placeholder="Youtown High School"
                          onChange={(e) => setHighschool(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Located at</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={hslocation}
                          placeholder="'HS City, State'"
                          onChange={(e) => setHslocation(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="highschool-row">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Grad Year</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={gradyear}
                          placeholder="'2029'"
                          onChange={(e) => setGradYear(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Date of Birth</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={dob}
                          placeholder="'01/01/2001'"
                          onChange={(e) => setDob(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

             
                  </div>
                  {/**end PERSONAL */}

                  {/**start ATHLETIC */}
                  <div className="w3-container w3-content w3-padding-24">
                    <h5
                      className="mb-3 text-black"
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className=" opacity-75">ATHLETIC INFORMATION</b>
                    </h5>
                    <MDBRow className="sport-row">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Sport of Interest</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={sport}
                          placeholder="'Wrestling'"
                          onChange={(e) => setSport(e.target.value)}
                          required
                        />
                      </MDBCol>

                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Team (JV/Varsity)</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={hslevel}
                          placeholder="'Varsity'"
                          onChange={(e) => setHsLevel(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="metrics-row">  
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Height</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={height}
                          placeholder="'6ft. 2in.'"
                          onChange={(e) => setHeight(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Weight</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={weight}
                          placeholder="'210lbs'"
                          onChange={(e) => setWeight(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Handednessedness</p>
                        <select
                          className="custom-select form-control"
                          value={hand}
                          onChange={(e) => setHand(e.target.value)}
                          required
                        >
                          <option value="" disabled>
                           Select
                          </option>
                          {hands.map((handAbbr) => (
                            <option key={handAbbr} value={handAbbr}>
                              {handAbbr}
                            </option>
                          ))}
                        </select>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className=" position-row">
                    <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Positions</p>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={primaryposition}
                          placeholder="Primary Position"
                          onChange={(e) => setPrimaryPosition(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={secondaryposition}
                          placeholder="Secondary Position"
                          onChange={(e) => setSecondaryPosition(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="academic-textarea-row">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Additional Information</p>
                        <textarea
                          className="form-control mb-2"
                          rows="5"
                          value={athleticextra}
                          placeholder="'honors, awards, etc...'"  
                          onChange={(e) => setAthleticExtra(e.target.value)}
                        ></textarea>
                      </MDBCol>
                    </MDBRow>
                  </div>
                  {/**end ATHLETIC */}

                  {/**start ACADEMIC */}
                  <div className="w3-container w3-content w3-padding-24">
                    <h5
                      className="mb-3 text-black"
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className=" opacity-75">ACADEMIC INFORMATION</b>
                    </h5>


                    <MDBRow className="highschool-row">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Current High School</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={highschool}
                          placeholder="'Youtown High School'"
                          onChange={(e) => setHighschool(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="highschool-row">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Grad Year</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={gradyear}
                          placeholder="'2029'"
                          onChange={(e) => setGradYear(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Date of Birth</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={dob}
                          placeholder="'01/01/2001'"
                          onChange={(e) => setDob(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBRow className="acadmics-row">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                            <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>ACT/SAT Score</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={testscores}
                          placeholder="'30/1400'"
                          onChange={(e) => setTestScores(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>GPA</p>
                        <MDBInput
                          className="mb-2"
                          type="text"
                          value={gpa}
                          placeholder="'3.9'"
                          onChange={(e) => setGpa(e.target.value)}
                          required
                        />
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="academic-textarea-row">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                      <p className="mt-2 mb-0 fw-bold text-secondary small opacity-75" style={{marginLeft:'6px'}}>Additional Information</p>
                        <textarea
                          className="form-control mb-2"
                          rows="5"
                          value={academicextra}
                          placeholder="'honors, awards, etc...'"  
                          onChange={(e) => setAcademicExtra(e.target.value)}
                        ></textarea>
                      </MDBCol>
                    </MDBRow>

                  </div>
                  {/**end ACADEMIC */}

                  {/**start CHECKBOX AND SUBMIT */}
                  <div className="w3-container w3-content w3-padding-top-24">
                  <MDBRow className="d-flex align-items-center mb-3">
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
                            className="border border-2 mb-2"
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
                  <div className="">
                  
                      <button
                        type="submit"
                        className="w-100 btn-sm fw-bold btn btn-dark mt-2"
                        onClick={handleSubmit}
                      >
                        <span style={{ fontSize: "12px" }}>Submit </span>
                      </button>
      
                  </div>
                  </div>
                  {/**END CHECKBOX AND SUBMIT */}
                </form>
                {/**END form */}
              </div>
            </MDBContainer>
          </div>
        </div>
        {/*end WHOLE ROW */}
      </MDBContainer>
    </div>
  );
}

export default IntroSlide;
