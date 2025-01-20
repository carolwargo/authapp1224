import React, { useState } from "react";
import TermsModal from "../components/Modals/TermsModal";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import { MDBCheckbox, MDBInput, MDBRow, MDBCol } from "mdb-react-ui-kit";
import { Link } from "react-router-dom";
import PrivacyModal from "../components/Modals/PrivacyModal";

function InfoForm() {
  const [isChecked, setIsChecked] = useState(false);
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
  const [currenyr, setCurrentyr] = useState("");
  const [dob, setDob] = useState("");
  const [twitter, setTwitter] = useState("");
  const [instagram, setInstagram] = useState("");
  const [facebook, setFacebook] = useState("");

  const [sport, setSport] = useState("");
  const [hslevel, setHsLevel] = useState("");
  const [primaryposition, setPrimaryPosition] = useState("");
  const [secondaryposition, setSecondaryPosition] = useState("");
  const [handedness, setHandedness] = useState("");
  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");

  const [testscores, setTestScores] = useState("");
  const [gpa, setGpa] = useState("");
  const [ncaaid, setNcaaid] = useState("");

  const [athleticextra, setAthleticExtra] = useState("");
  const [academicextra, setAcademicExtra] = useState("");
  const [bio, setBio] = useState("");

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
          bio,
          ncaaid,
          twitter,
          instagram,
          facebook,
          sport,
          hslevel,
          primaryposition,
          secondaryposition,
          handedness,
          height,
          weight,
          testscores,
          gpa,
          athleticextra,
          academicextra,
          isChecked,
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
        <div className="container w3-hide-small w3-hide-medium">
          <div className=" w3-padding-large w3-padding-48">
            {/**start WHOLE ROW */}
            <div className="row justify-content-center">
              <div className="col-sm-12 col-md-10 col-lg-10">
                <div className="container w3-padding-large">
                  {/**start INTRO */}
                  <div className="container">
                    <div className="w3-padding-large w3-padding-16 border">
                      <h2
                        className="text-center"
                        style={{
                          fontFamily: "Montserrat, sans-serif",
                          textShadow:
                            ".5px .5px 1px white, -.5px -.5px 1px white",
                        }}
                      >
                        TELL US ABOUT YOURSELF!
                      </h2>
                      <p
                        className="text-center"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        Providing accurate and up-to-date information is
                        essential to optimize efficiency through the
                        collaborative process.
                      </p>

                      <h4
                        className="text-center"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        DATA COLLECTION IN 2 EASY STEPS:
                      </h4>
                      <p
                        className="text-center text-white text-opacity-50"
                        style={{ fontFamily: "Montserrat, sans-serif" }}
                      >
                        {" "}
                        Digital Form will have 4 categories: Contact, Personal,
                        Athletic, Academic Information. Fill in the form fields,
                        and press the submit button to share the data needed to
                        get started.
                        <br />
                        <i
                          className=" small"
                          style={{ fontFamily: "Montserrat, sans-serif" }}
                        >
                          <b>DISCLAIMER: </b> All submitted data will be
                          securely stored in your client profile, on our
                          database and used to develop tailored recruiting
                          solutions, assist with marketing, communicate with
                          coaches, and more.
                        </i>
                      </p>
                    </div>
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
                        <MDBRow className="contact-row">
                          <MDBCol className="col-sm-12 col-md-6 col-lg-6">
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
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-6 col-lg-6">
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
                          </MDBCol>
                        </MDBRow>

                        <MDBRow className=" contact-row">
                          <MDBCol className="col-sm-12 col-md-6 col-lg-6">
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
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-6 col-lg-6">
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
                          </MDBCol>
                        </MDBRow>

                        <MDBRow className="contact-row">
                          <MDBCol className="col-sm-12 col-md-5 col-lg-5">
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
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-3 col-lg-3">
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
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-2 col-lg-2">
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
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-2 col-lg-2">
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
                          </MDBCol>
                        </MDBRow>

                        <MDBRow className="contact-row">
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                          </MDBCol>
                        </MDBRow>
                      </div>
                      {/**end CONTACT */}
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

                      {/**start PERSONAL */}
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
                        <MDBRow className="highschool-row">
                          <MDBCol className="col-sm-12 col-md-8 col-lg-8">
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
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                              value={hslocation}
                              placeholder="'HS City, State'"
                              onChange={(e) => setHslocation(e.target.value)}
                              required
                            />
                          </MDBCol>
                        </MDBRow>

                        <MDBRow className="highschool-row">
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                              value={gradyear}
                              placeholder="'2029'"
                              onChange={(e) => setGradYear(e.target.value)}
                              required
                            />
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                          </MDBCol>

                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                              value={currenyr}
                              placeholder="'Sophomore'"
                              onChange={(e) => setCurrentyr(e.target.value)}
                            />
                          </MDBCol>
                        </MDBRow>

                        <MDBRow className="athletic-textarea-row">
                          <MDBCol className="col-sm-12 col-md-12 col-lg-12">
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
                          </MDBCol>
                        </MDBRow>
                      </div>
                      {/**end PERSONAL */}

                      <div className=" w3-padding-large w3-padding-16">
                        <hr />
                      </div>

                      {/**start ATHLETIC DONE */}
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
                        <MDBRow className="sport-row">
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              SPORT OF INTEREST{" "}
                              <i className="text-white text-opacity-50">
                                (JV/Varsity)
                              </i>
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
                          </MDBCol>

                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-2 col-lg-2">
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
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-2 col-lg-2">
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
                          </MDBCol>
                        </MDBRow>

                        <MDBRow className="position-row">
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                              value={primaryposition}
                              placeholder="'Full Back'"
                              onChange={(e) =>
                                setPrimaryPosition(e.target.value)
                              }
                              required
                            />
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                              value={secondaryposition}
                              placeholder="'Guard'"
                              onChange={(e) =>
                                setSecondaryPosition(e.target.value)
                              }
                              required
                            />
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                                inline
                                label="Right"
                                name="handedness"
                                type="radio"
                                id="inline-radio-right"
                                onChange={() => setHandedness("Right")}
                              />
                              <Form.Check
                                className=" w3-margin-left"
                                inline
                                label="Left"
                                name="handedness"
                                type="radio"
                                id="inline-radio-left"
                                onChange={() => setHandedness("Left")}
                              />
                              <Form.Check
                                className=" w3-margin-left"
                                inline
                                label="Both"
                                name="handedness"
                                type="radio"
                                id="inline-radio-both"
                                onChange={() => setHandedness("Both")}
                              />
                            </Form.Group>
                          </MDBCol>
                        </MDBRow>

                        <MDBRow className="athletic-textarea-row">
                          <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              ADDITIONAL INFO
                            </p>

                            <textarea
                              className="form-control custom-wrapper-class mb-2"
                              rows="5"
                              value={athleticextra}
                               placeholder="'Honors, Awards, Clubs, Etc...'"
                              onChange={(e) => setAthleticExtra(e.target.value)}
                            ></textarea>
                          </MDBCol>
                        </MDBRow>
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

                        <MDBRow className="acadmics-row">
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                              value={testscores}
                              placeholder="'30/1400'"
                              onChange={(e) => setTestScores(e.target.value)}
                              required
                            />
                          </MDBCol>
                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                          </MDBCol>

                          <MDBCol className="col-sm-12 col-md-4 col-lg-4">
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
                          </MDBCol>
                        </MDBRow>

                        <MDBRow className="academic-textarea-row">
                          <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                            <p
                              className="mt-2 mb-1 text-white"
                              style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                            >
                              ADDITIONAL INFO
                            </p>

                            <textarea
                              className="form-control custom-wrapper-class mb-2"
                              rows="5"
                              value={academicextra}
                              placeholder="'Honors, Awards, Clubs, Etc...'"
                              onChange={(e) => setAcademicExtra(e.target.value)}
                            ></textarea>
                          </MDBCol>
                        </MDBRow>
                      </div>
                      {/**end ACADEMIC */}

                      {/**start CHECKBOX AND SUBMIT */}
                      <div className="w3-container w3-content w3-padding-16">
                        <MDBRow className="d-flex align-items-center">
                          <MDBCol className="col-sm-12 col-md-12 col-lg-12 justify-content-end">
                            <div style={{ marginLeft: "5px" }}>
                              <div
                                style={{
                                  display: "flex",
                                  alignItems: "start", // Align checkbox and text vertically
                                  gap: "10px", // Add spacing between checkbox and text
                                }}
                              ></div>
                            </div>
                          </MDBCol>
                        </MDBRow>
                        <div className=" text-center align-items-center small text-secondary my-2 mx-5">
                          <span>
                            <input
                              type="checkbox"
                              value={isChecked}
                              id="ischecked"
                              name="ischecked"
                              onChange={(e) => setIsChecked(e.target.value)}
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
                          </span>{" "}
                          <span style={{ fontSize: "13px" }}> and </span>{" "}
                          <span>
                            <PrivacyModal />
                          </span>
                        </div>
                        <Button
                          variant="outline-light"
                          type="submit"
                          className="my-3 w-100"
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

        {/************************************start WHOLE ROW **************************************/}

        <div className="w3-hide-large">
          <div
            style={{
              backgroundColor: "rgb(243, 243, 243)",
            }}
          >
            <div className="w3-padding-large w3-padding-48">
              {/**start INTRO */}
              <div className="container">
                <h2 className="text-center">Tell Us About Yourself!</h2>
                <p className="text-center">
                  Providing accurate and up-to-date information is essential to
                  optimize efficiency through the collaborative process.
                </p>

                <h5 className="text-center">
                  <b>Data Collection</b>
                </h5>
                <p className="text-center mb-5">
                  Fill out the intake form and submit to share the details
                  needed to get started. All submitted information will be
                  securely stored in your client profile and used to develop
                  tailored recruiting solutions.
                </p>
              </div>
              {/**end INTRO */}
              <hr className=" w3-padding-16" />
              <div className="information-form-container">
                {error && <p className="text-danger">{error}</p>}
                {successMessage && (
                  <p className="text-success ">{successMessage}</p>
                )}

                <form onSubmit={handleSubmit}>
                  {/**start CONTACT*/}
                  <div className="w3-container w3-padding-24">
                    <h5
                      className="mb-3 text-white "
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className=" opacity-75">1. CONTACT INFORMATION</b>
                    </h5>
                    <MDBRow className="">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          First Name
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="text"
                          value={firstname}
                          placeholder="John"
                          onChange={(e) => setFirstname(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Last Name
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
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
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Email Address
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="email"
                          value={email}
                          placeholder="mail@email.com"
                          onChange={(e) => setEmail(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Phone Number
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
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
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Street Address
                        </p>

                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
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
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          City
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="text"
                          value={city}
                          placeholder="Annapolis"
                          onChange={(e) => setCity(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-3 col-lg-3">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          State
                        </p>
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Zip Code
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
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
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          X (Twitter)
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="text"
                          value={twitter}
                          placeholder="@Handle"
                          onChange={(e) => setTwitter(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Instagram
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="text"
                          value={instagram}
                          placeholder="@Handle"
                          onChange={(e) => setInstagram(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Facebook
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
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

                  <hr />
                  {/**start PERSONAL */}
                  <div className="w3-container w3-content w3-padding-16">
                    <h5
                      className="mb-3 text-white "
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className=" opacity-75">PERSONAL INFORMATION</b>
                    </h5>
                    <MDBRow className="highschool-row">
                      <MDBCol className="col-sm-12 col-md-8 col-lg-8">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Current High School
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="text"
                          value={highschool}
                          placeholder="Youtown High School"
                          onChange={(e) => setHighschool(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Located at
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
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
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Grad Year
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="text"
                          value={gradyear}
                          placeholder="'2029'"
                          onChange={(e) => setGradYear(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Date of Birth
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
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
                  <hr />
                  {/**start ATHLETIC */}
                  <div className="w3-container w3-content w3-padding-16">
                    <h5
                      className="mb-3 text-white "
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className="opacity-75">ATHLETIC INFORMATION</b>
                    </h5>
                    <MDBRow className="sport-row">
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Sport of Interest
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="text"
                          value={sport}
                          placeholder="'Wrestling'"
                          onChange={(e) => setSport(e.target.value)}
                          required
                        />
                      </MDBCol>

                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Team (JV/Varsity)
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
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
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Height
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="text"
                          value={height}
                          placeholder="'6ft. 2in.'"
                          onChange={(e) => setHeight(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Weight
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="text"
                          value={weight}
                          placeholder="'210lbs'"
                          onChange={(e) => setWeight(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-4 col-lg-4">
                        <p
                          className="mt-2 mb-0 fw-bold text-white small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Handedness
                        </p>
                        <Form.Group controlId="handedness-group">
                          <Form.Check
                            inline
                            label="Right"
                            name="handedness"
                            type="radio"
                            id="inline-radio-right"
                            onChange={() => setHandedness("Right")}
                          />
                          <Form.Check
                            className="mx-2"
                            inline
                            label="Left"
                            name="handedness"
                            type="radio"
                            id="inline-radio-left"
                            onChange={() => setHandedness("Left")}
                          />
                          <Form.Check
                            inline
                            label="Both"
                            name="handedness"
                            type="radio"
                            id="inline-radio-both"
                            onChange={() => setHandedness("Both")}
                          />
                        </Form.Group>
                      </MDBCol>
                    </MDBRow>

                    <MDBRow className="athletic-textarea-row">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Additional Information
                        </p>
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
                  <hr />
                  {/**start ACADEMIC */}
                  <div className="w3-container w3-content w3-padding-top-24">
                    <h5
                      className="mb-3 text-white "
                      style={{
                        textShadow: "4px 4px 10px rgba(0, 0, 0, 0.5)",
                        marginLeft: "6px",
                      }}
                    >
                      <b className=" opacity-75">ACADEMIC INFORMATION</b>
                    </h5>

                    <MDBRow className="highschool-row">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Current High School
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
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
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Grad Year
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="text"
                          value={gradyear}
                          placeholder="'2029'"
                          onChange={(e) => setGradYear(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Date of Birth
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
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
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          ACT/SAT Score
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
                          type="text"
                          value={testscores}
                          placeholder="'30/1400'"
                          onChange={(e) => setTestScores(e.target.value)}
                          required
                        />
                      </MDBCol>
                      <MDBCol className="col-sm-12 col-md-6 col-lg-6">
                        <p
                          className="mt-2 mb-0 fw-bold text-secondary small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          GPA
                        </p>
                        <MDBInput
                          wrapperClass="custom-wrapper-class text-secondary px-0 mb-2"
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
                        <p
                          className="mt-2 mb-0 fw-bold text-white small opacity-75"
                          style={{ marginLeft: "4px", fontSize: "0.9rem" }}
                        >
                          Additional Information
                        </p>
                        <textarea
                          className="form-control class-wrapper-class mb-2"
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
                  <div className="w3-container w3-content w3-padding-16">
                    <MDBRow className="d-flex align-items-center">
                      <MDBCol className="col-sm-12 col-md-12 col-lg-12 justify-content-end">
                        <div style={{ marginLeft: "5px" }}>
                          <div
                            style={{
                              display: "flex",
                              alignItems: "start",
                              gap: "10px",
                            }}
                          >
                            <MDBCheckbox
                              className="border border-2"
                              id="terms"
                              required
                              name="terms"
                              checked={isChecked}
                              onChange={(e) => setIsChecked(e.target.checked)}
                            />
                            <div
                              className="text-secondary"
                              style={{ fontSize: "13px" }}
                            >
                              By clicking submit, I certify accuracy of the
                              information provided, and consent to the
                              <span>
                                {" "}
                                <TermsModal />{" "}
                              </span>
                            </div>
                          </div>
                        </div>
                      </MDBCol>
                    </MDBRow>

                    <div className=" align-items-center small text-secondary my-2 mx-2">
                      <span>
                        <input
                          type="checkbox"
                          value={isChecked}
                          id="ischecked"
                          name="ischecked"
                          onChange={(e) => setIsChecked(e.target.value)}
                          required
                        />
                      </span>
                      <span className="mx-1" style={{ fontSize: "13px" }}>
                        By registering I agree to
                      </span>
                      <span>
                        <TermsModal />
                      </span>{" "}
                      <span style={{ fontSize: "13px" }}> and </span>
                    </div>
                    <Button
                      variant="outline-light"
                      type="submit"
                      className="mt-2 w-100"
                      style={{ fontSize: "13px" }}
                    >
                      Register
                    </Button>
                    {/**END CHECKBOX AND SUBMIT */}

                    <div className="text-center text-white my-2">
                      <p style={{ fontSize: "14px" }}>
                        Already have an account?
                        <Link to="/login" className=" link-light">
                          Login
                        </Link>
                      </p>
                    </div>

                    <div>
                      <Button
                        variant="outline-light"
                        type="submit"
                        className="mt-3 w-100"
                        style={{ fontSize: "14px" }}
                      >
                        Submit
                      </Button>
                    </div>
                  </div>
                </form>
                {/**END form */}
              </div>
            </div>
          </div>
          {/*end WHOLE ROW */}
        </div>
      </div>
    </div>
  );
}

export default InfoForm;
