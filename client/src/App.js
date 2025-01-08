import React from "react";
import { BrowserRouter, Route, Routes} from "react-router-dom";
import "./App.css";

import Signup from "./pages/Signup";
import Login from "./pages/Login";
import Home from "./pages/Home";
import ErrorBoundary from "./ErrorBoundary";

function App() {

  return (
    <div className="App">
      <ErrorBoundary>
        <BrowserRouter basename="authapp1224">
          <Routes>
            {/* Redirect to Home or Login based on authentication */}
         <Route path="/" element={<Home />} />  
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />

            {/* Protected Route Example */}
        
          </Routes>
        </BrowserRouter>
      </ErrorBoundary>
    </div>
  );
}

export default App;

