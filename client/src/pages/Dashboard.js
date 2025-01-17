import React, { useState, useEffect, useContext } from "react";
import axios from "axios";
import { UserContext } from "../context/UserContext";

function Dashboard() {
  const { setUser } = useContext(UserContext);
  const [userData, setUserData] = useState(null);

  useEffect(() => {
    axios
      .get("/users/me") // Replace with your authenticated user endpoint
      .then((response) => {
        setUserData(response.data);
        setUser(response.data); // Update context with user data
      })
      .catch((error) => {
        console.error("Error fetching user data:", error);
        // Handle errors such as redirecting to login
        window.location.href = "/login";
      });
  }, [setUser]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  function handleLogout() {
    localStorage.removeItem("authToken");
    setUser(null); // Clear user context
    window.location.href = "/login"; // Redirect to login page
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {userData.name}!</h1>
      <p>Email: {userData.email}</p>
      <button onClick={handleLogout}>Logout</button>


      <div className="container w3-padding-large w3-padding-48">
                <h2 className="text-center">Tell Us About Yourself!</h2>
                <p className="text-center">
                  Providing accurate and up-to-date information is essential to optimize efficiency through the collaborative process.
                </p>

<h5 className="text-center"><b>Data Collection</b></h5>
                <p className="text-center mb-5">
                   Fill out the intake form and submit to
                 share the details needed to get started. All submitted information will be securely stored in
                  your client profile and used to develop tailored
                  recruiting solutions.              
                </p>
                </div>
    </div>
  );
}

export default Dashboard;
