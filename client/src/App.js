import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import "@fortawesome/fontawesome-free/css/all.min.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ErrorBoundary from "./ErrorBoundary";
import InfoForm from "./pages/InfoForm.jsx";

// Info Layout
import InfoLayout from "./components/Layout/InfoLayout";
// Info Layout Slides
import IntroSlide from "./components/InfoForm/IntroSlide";
import ContactSlide from "./components/InfoForm/ContactSlide";
import PersonalSlide from "./components/InfoForm/PersonalSlide";
import AthleticSlide from "./components/InfoForm/AthleticSlide";
import AcademicSlide from "./components/InfoForm/AcademicSlide";
import FinishedSlide from "./components/InfoForm/FinishedSlide";
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

            <Route path="/infolayout" element={<InfoLayout />}>
              <Route path="intro" element={<IntroSlide />} />
              <Route path="contact" element={<ContactSlide />} />
              <Route path="personal" element={<PersonalSlide />} />
              <Route path="athletic" element={<AthleticSlide />} />
              <Route path="academic" element={<AcademicSlide />} />
              <Route path="finished" element={<FinishedSlide />} />
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
