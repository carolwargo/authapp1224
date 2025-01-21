import React, { useState } from "react";
import TermsModal from "../../components/Modals/TermsModal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { MDBInput } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import PrivacyModal from "../../components/Modals/PrivacyModal";
import 'bootstrap/dist/css/bootstrap.min.css';


function Intake() {
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [streetaddress, setStreetAddress] = useState("");
  const [city, setCity] = useState("");
  const [state, setState] = useState("");
  const [zipcode, setZipcode] = useState("");

  const [highschool, setHighschool] = useState("");
  const [hsLocation, setHslocation] = useState("");
  const [currentYear, setCurrentyr] = useState("");
  const [gradYear, setGradYear] = useState("");
  const [dob, setDob] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");

  const [sport, setSport] = useState("");
  const [hslevel, setHsLevel] = useState("");
  const [primaryPosition, setPrimaryPosition] = useState("");
  const [secondaryPosition, setSecondaryPosition] = useState("");
  const [handedness, setHandedness] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [testScores, setTestScores] = useState("");
  const [gpa, setGpa] = useState("");
  const [ncaaid, setNcaaid] = useState("");

  const [athleticExtra, setAthleticExtra] = useState("");
  const [academicExtra, setAcademicExtra] = useState("");
  const [bio, setBio] = useState("");

  const [platformConsent, setPlatformConsent] = useState(false);

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
          twitter,
          instagram,
          facebook,
          highschool,
          hsLocation,
          gradYear,
          dob,
          bio,
          ncaaid,
          sport,
          hslevel,
          primaryPosition,
          secondaryPosition,
          handedness,
          height,
          weight,
          testScores,
          gpa,
          athleticExtra,
          academicExtra,
          platformConsent,
        }),
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
    <div className="info-form-container w3-black">
      <style>
        {`
        .custom-input { 
          padding-top: 4px;
          padding-bottom: 4px;
        }
       
label {
  font-size: 1rem; /* Adjust to match your font size */
  font-weight: bold; /* Optional: to make it bold */
  font-style: italic; /* Optional: to make it italic */
  color: gray; 

}
.form-check-label {
  font-size: 0.8rem;
}
.custom-input::-webkit-input-placeholder {
  font-size: 0.8rem;
  font-weight: bold;
  font-style: italic;
  color: rgba(0, 0, 0, 0.3);
}

textarea.custom-wrapper-class::placeholder {
  font-size: 0.8rem;
  font-weight: bold;
  font-style: italic;
  color: rgba(0, 0, 0, 0.3);
}

  `}
      </style>
      <div>
        {/***************  start SMALL  *****************/}
        <div className="container">
          <div className="w3-padding-48">
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-8 col-lg-8">
                <div className="container w3-padding-large">
                    <div className="container w3-padding-16">
                      <h1
                        className=""
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          textShadow:
                            ".5px .5px 1px white, -.5px -.5px 1px white",
                        }}
                      >
                        TELL US ABOUT YOURSELF!
                      </h1>
                      <p
                        className=""
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Providing accurate and up-to-date information is
                        essential to optimize efficiency through the
                        collaborative process.
                      </p>

                      <h5
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        DATA COLLECTION IN 2 EASY STEPS:
                      </h5>
                      <p
                        className="text-white text-opacity-50"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {" "}
                        Digital Form will have 4 categories: Contact, Personal,
                        Athletic, Academic Information. Fill in the form fields,
                        and press the submit button to share the data needed to
                        get started.
                        <br />
                        <i
                          className=" small w3-hide-small w3-hide-medium"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                         All submitted data will be
                          securely stored in your client profile, on our
                          database and used to develop tailored recruiting
                          solutions, assist with marketing, communicate with
                          coaches, and more.
                        </i>
                      </p>
                    </div>
                
                  {/**end INTRO */}

                  <div
                    className="infor-form-container"
                    style={{
                      backgroundColor: "rgb(243, 243, 243)",
                    }}
                  >
                    {error && <p className="text-danger">{error}</p>}
                    {successMessage && (
                      <p className="text-success ">{successMessage}</p>
                    )}

                    <form onSubmit={handleSubmit}>
                      {/**start CONTACT*/}
                      <div className="w3-container w3-padding-16">
                        <h4
                          className="mb-3 text-white fw-lighter"
                          style={{
                            textShadow:
                              "1px 1px 2px white, -1px 1px 2px white, -1px -1px 2px white",
                          }}
                        >
                          CONTACT INFORMATION
                        </h4>
                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              FIRST NAME
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={firstname}
                              placeholder="John"
                              onChange={(e) => setFirstname(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              LAST NAME
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={lastname}
                              placeholder="Doe"
                              onChange={(e) => setLastname(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              EMAIL ADDRESS
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="email"
                              value={email}
                              placeholder="mail@email.com"
                              onChange={(e) => setEmail(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-6 col-lg-6">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              PHONE NUMBER
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="phone"
                              value={phone}
                              placeholder="(123)456-7890"
                              onChange={(e) => setPhone(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              STREET ADDRESS
                            </p>

                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={streetaddress}
                              placeholder="12345 Main St"
                              onChange={(e) => setStreetAddress(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              CITY
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={city}
                              placeholder="Annapolis"
                              onChange={(e) => setCity(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              STATE
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={state}
                              placeholder="Maryland"
                              onChange={(e) => setState(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              ZIP CODE
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={zipcode}
                              placeholder="12345"
                              onChange={(e) => setZipcode(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              X{" "}
                              <i className="text-white text-opacity-50">
                                (Twitter)
                              </i>
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={twitter}
                              placeholder="@Handle"
                              onChange={(e) => setTwitter(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              INSTAGRAM
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={instagram}
                              placeholder="@Handle"
                              onChange={(e) => setInstagram(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              FACEBOOK
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={facebook}
                              placeholder="@Handle"
                              onChange={(e) => setFacebook(e.target.value)}
                              required
                            />
                          </div>
                        </div>
                      </div>
                      {/**end CONTACT */}


 {/**start PERSONAL */}
                      <div className="w3-padding-large w3-padding-16">
                        <hr
                          style={{
                            border: "none",
                            height: "2px",
                            backgroundColor: "white",
                            boxShadow:
                              "inset 4px 4px 12px rgba(255, 255, 255, 0.3)",
                            margin: "16px 0",
                          }}
                        />
                      </div>
                      <div className="w3-container w3-content w3-padding-16">
                        <h4
                          className="mb-3 text-white fw-lighter"
                          style={{
                            textShadow:
                              "1px 1px 2px white, -1px 1px 2px white, -1px -1px 2px white",
                          }}
                        >
                          PERSONAL INFORMATION
                        </h4>
                        <div className="row">
                          <div className="col-sm-12 col-md-8 col-lg-8">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              CURRENT HIGH SCHOOL
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={highschool}
                              placeholder="Youtown High School"
                              onChange={(e) => setHighschool(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              LOCATED AT
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={hsLocation}
                              placeholder="'HS City, State'"
                              onChange={(e) => setHslocation(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              GRAD YEAR
                            </p>

                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={gradYear}
                              placeholder="'2029'"
                              onChange={(e) => setGradYear(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              DATE OF BIRTH
                            </p>

                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={dob}
                              placeholder="'01/01/2001'"
                              onChange={(e) => setDob(e.target.value)}
                              required
                            />
                          </div>

                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              CURRENT YEAR
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={currentYear}
                              placeholder="'Sophomore'"
                              onChange={(e) => setCurrentyr(e.target.value)}
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              PERSONAL BIO...
                            </p>
                            <textarea
                              className="form-control custom-wrapper-class mb-2"
                              rows="5"
                              value={bio}
                              placeholder="'Don't worry about grammar, focus on information...'"
                              onChange={(e) => setBio(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      {/**end PERSONAL */}


 {/**start ATHLETIC DONE */}
                      <div className=" w3-padding-large w3-padding-16">
                        <hr />
                      </div>

                      <div className="w3-container w3-content w3-padding-16">
                        <h4
                          className="mb-3 text-white fw-lighter"
                          style={{
                            textShadow:
                              "1px 1px 2px white, -1px 1px 2px white, -1px -1px 2px white",
                          }}
                        >
                          ATHLETIC INFORMATION
                        </h4>
                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              SPORT OF INTEREST{" "}
                         
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={sport}
                              placeholder="'Wrestling'"
                              onChange={(e) => setSport(e.target.value)}
                              required
                            />
                          </div>

                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              TEAM{" "}
                              <i className="text-white text-opacity-50">
                                (JV/Varsity)
                              </i>
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={hslevel}
                              placeholder="'Varsity'"
                              onChange={(e) => setHsLevel(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-2 col-lg-2">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              HEIGHT
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={height}
                              placeholder="'6ft. 2in.'"
                              onChange={(e) => setHeight(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-2 col-lg-2">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              WEIGHT
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={weight}
                              placeholder="'210lbs'"
                              onChange={(e) => setWeight(e.target.value)}
                              required
                            />
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              POSITION{" "}
                              <i className=" text-light text-opacity-50">
                                {" "}
                                (primary){" "}
                              </i>
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={primaryPosition}
                              placeholder="'Full Back'"
                              onChange={(e) =>
                                setPrimaryPosition(e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              POSITION{" "}
                              <i className=" text-light text-opacity-50">
                                {" "}
                                (secondary){" "}
                              </i>
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={secondaryPosition}
                              placeholder="'Guard'"
                              onChange={(e) =>
                                setSecondaryPosition(e.target.value)
                              }
                              required
                            />
                          </div>
                          <div className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-2 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              HANDEDNESS
                              <i className=" text-light text-opacity-50">
                                {" "}
                                (select one)
                              </i>
                            </p>
                            <Form.Group controlId="handedness-group">
                              <Form.Check
                             style={{ marginLeft: "4px", fontSize: "0.8rem" }}
                                inline
                                label="Right"
                                name="handedness"
                                type="radio"
                                id="inline-radio-right"
                                onChange={() => setHandedness("Right")}
                              />
                              <Form.Check    
                              style={{ marginLeft: "4px", fontSize: "0.8rem" }}
                              LabelStyle={{ fontSize: "0.8rem" }}
                                inline
                                label="Left"
                                name="handedness"
                                type="radio"
                                id="inline-radio-left"
                                onChange={() => setHandedness("Left")}
                              />
                              <Form.Check
                                style={{ marginLeft: "4px", fontSize: "0.8rem" }}
                                inline
                                label="Both"
                                name="handedness"
                                type="radio"
                                id="inline-radio-both"
                                onChange={() => setHandedness("Both")}
                              />
                            </Form.Group>
                          </div>
                        </div>

                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              ADDITIONAL INFO
                            </p>

                            <textarea
                              className="form-control custom-wrapper-class mb-2"
                              rows="5"
                              value={athleticExtra}
                              placeholder="'Honors, Awards, Clubs, Etc...'"
                              onChange={(e) => setAthleticExtra(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                      </div>
                      {/**end ATHLETIC */}

                      <div className=" w3-padding-large w3-padding-16">
                        <hr />
                      </div>

                      {/**start ACADEMIC */}
                      <div className="w3-container w3-content w3-padding-16">
                        <h4
                          className="mb-3 text-white fw-lighter"
                          style={{
                            textShadow:
                              "1px 1px 2px white, -1px 1px 2px white, -1px -1px 2px white",
                          }}
                        >
                          ACADEMIC INFORMATION
                        </h4>
   {/**start ACADEMIC row*/}
                        <div className="row">
                        <div className="col-sm-12 col-md-6 col-lg-6">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              NCAA ID#
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={ncaaid}
                              placeholder="'01012001'"
                              onChange={(e) => setNcaaid(e.target.value)}
                            />
                          </div>
                          <div className="col-sm-6 col-md-3 col-lg-3">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              ACT/SAT{" "}
                              <i className="text-white text-opacity-50">
                                (Scores)
                              </i>
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={testScores}
                              placeholder="'30/1400'"
                              onChange={(e) => setTestScores(e.target.value)}
                              required
                            />
                          </div>
                          <div className="col-sm-6 col-md-3 col-lg-3">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              GPA
                            </p>
                            <MDBInput
                              wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                              className="custom-input"
                              type="text"
                              value={gpa}
                              placeholder="'3.9'"
                              onChange={(e) => setGpa(e.target.value)}
                              required
                            />
                          </div>
                        </div>
     {/**start ACADEMIC textarea */}
                        <div className="row">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              ADDITIONAL INFO
                            </p>

                            <textarea
                              className="form-control custom-wrapper-class mb-2"
                              rows="5"
                              value={academicExtra}
                              placeholder="'Honors, Awards, Clubs, Etc...'"
                              onChange={(e) => setAcademicExtra(e.target.value)}
                            ></textarea>
                          </div>
                        </div>
                          {/**end ACADEMIC textarea */}
                      </div>
                      {/**end ACADEMIC */}

                      {/**start CHECKBOX AND SUBMIT */}
                      <div className="w3-container w3-content w3-padding-16">
                        <div className="row d-flex align-items-center">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                          <div className="text-center small text-white text-opacity-75">
                          <span>
                          <input
  type="checkbox"
  id="platformConsent"
  name="platformConsent"
  checked={platformConsent}
  onChange={(e) => setPlatformConsent(e.target.checked)}
  required
/>
                          </span>
                          <span className="mx-1" style={{ fontSize: "16px" }}>
                            By clicking submit, you confirm that the information
                            provided is accurate and acknowledge your agreement
                            to our{" "}
                          </span>
                          <span>
                            <TermsModal />
                          </span>
                          <span style={{ fontSize: "13px" }}> and </span>{" "}
                          <span>
                            <PrivacyModal />
                          </span>
                        </div>
                          </div>
                          </div>
                          <div className="row d-flex align-items-center">
                          <div className="col-sm-12 col-md-12 col-lg-12">
                           <div className="container-fluid w3-padding-16">
                        <Button
                          variant="outline-light"
                          type="submit"
                          className="py-2 mt-4 mb-3 w-100"
                          style={{ fontSize: "16px" }}
                        >
                          Submit
                        </Button>
                        <div className="text-center align-items-center small text-secondary my-2 mx-2">
                          Have Questions?
                          <Link className="mx-1 link-light">
                            Contact Us for Answers
                          </Link>
                          .
                        </div>
                        </div>
                        </div>
                        </div> 
                </div>
                     
                      {/**END CHECKBOX AND SUBMIT */}
                    </form>
                    {/**END form */}
                  </div>
                </div>
              </div>
            </div>
            {/*end WHOLE ROW */}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Intake;