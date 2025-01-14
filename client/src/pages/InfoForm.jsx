import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import IntroSlide from "../components/InfoForm/IntroSlide";

function InfoForm() {

  return (
    <div style={{backgroundImage: 'linear-gradient(120deg, #737373 0%, #424141 100%)'
    }}>
      <div className="w3-padding-large w3-padding-48">

        <MDBContainer className="my-5 gradient-form">
   
   <IntroSlide />
      </MDBContainer>

      </div>
   
    </div>
  );
}

export default InfoForm;
