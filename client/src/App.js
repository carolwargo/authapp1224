import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ErrorBoundary from "./ErrorBoundary";
import InfoForm from "./pages/InfoForm.jsx";

// Profile Layout
import ProfileLayout from "./components/Layout/ProfileLayout";
import ProfilePage from "./pages/ProfilePage";  

import Dashboard from "./pages/Dashboard.js";
import UserNav from "./components/UserNav.jsx";

function App() {
  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter basename="authapp1224">
        <UserNav />
          <Routes>
            {/* Public Routes */}
            <Route path="/" element={<Home />} />
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/infoform" element={<InfoForm />} />

            {/* Nested Routes under InfoLayout */}
            {/* Info Layout with Nested Routes */}
            {/*infolayout/infoform */}




            <Route path="/profilelayout" element={<ProfileLayout />}>
              <Route path="profile" element={<ProfilePage />} />
            </Route>
           
            {/* Catch-All for Undefined Routes */}
            <Route path="*" element={<h1>404: Page Not Found</h1>} />
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;
