import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
import ContactSlide from "../components/InfoForm/ContactSlide";
import IntroSlide from "../components/InfoForm/IntroSlide";
import PersonalSlide from "../components/InfoForm/PersonalSlide";
import AthleticSlide from "../components/InfoForm/AthleticSlide";
import AcademicSlide from "../components/InfoForm/AcademicSlide";


function InfoForm() {

  return (
    <div style={{backgroundImage: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)'
    }}>
      <div className="w3-padding-large w3-padding-48" style={{}}>

        <MDBContainer className="my-5 gradient-form">
   
   <IntroSlide />
      </MDBContainer>

        <MDBContainer className="my-5 gradient-form">
   
     <ContactSlide />
        </MDBContainer>

        <MDBContainer className="my-5 gradient-form">
   
   <PersonalSlide />
      </MDBContainer>

      
      <MDBContainer className="my-5 gradient-form">
   
   <AthleticSlide />
      </MDBContainer>

      
      <MDBContainer className="my-5 gradient-form">
   
   <AcademicSlide />
      </MDBContainer>
      </div>
   
    </div>
  );
}

export default InfoForm;
