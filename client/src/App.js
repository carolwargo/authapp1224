import React, { useEffect, useState } from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import "./App.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Dashboard from "./pages/Dashboard"; // Example of a protected route
import Header from "./components/Header";


function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Check for token in localStorage when the app loads
  useEffect(() => {
    const token = localStorage.getItem("authToken");
    if (token) {
      setIsAuthenticated(true);  // You could add more checks here (e.g., token expiry)
    }
  }, []);

  return (
    <div className="App">
      <BrowserRouter basename="authapp1224">
        <Header isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />  
        <Routes>
          {/* Redirect root path to /login */}
          <Route path="/" element={<Home />} />

          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />

          {/* Protected Route Example */}
          <Route
            path="/dashboard"
            element={
              isAuthenticated ? <Dashboard /> : <Navigate to="/login" />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
