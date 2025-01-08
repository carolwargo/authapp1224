import React from "react";
import { MDBContainer } from "mdb-react-ui-kit";
//import { UserContext } from "../UserContext";


function HomePage() {

  return (
    <div>
      <div className="w3-padding-large w3-padding-48" style={{}}>
        <MDBContainer className="my-5 gradient-form">
            <h1>HOME</h1>
     <p> Redirect to the home page after login</p>
        </MDBContainer>
      </div>
   
    </div>
  );
}

export default HomePage;
