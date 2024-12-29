// src/pages/Dashboard.js
import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [userData, setUserData] = useState(null);

  // Fetch user data or any other necessary information when the Dashboard loads
  useEffect(() => {
    axios
      .get("/users/me")  // Replace with the appropriate endpoint for the authenticated user
      .then((response) => setUserData(response.data))
      .catch((error) => {
        console.error("Error fetching user data:", error);
        // Handle errors such as redirecting to login
      });
  }, []);

  if (!userData) {
    return <div>Loading...</div>; // You can display a loading spinner or message here
  }

  return (
    <div className="dashboard">
      <h1>Welcome, {userData.name}!</h1>
      <p>Email: {userData.email}</p>
      {/* Add more user information as necessary */}
      <button onClick={() => handleLogout()}>Logout</button>
    </div>
  );

  function handleLogout() {
    // Remove token or clear authentication state
    localStorage.removeItem("authToken");
    window.location.href = "/login"; // Redirect to login page
  }
}

export default Dashboard;
