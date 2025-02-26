import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom"; // Import useParams for dynamic user ID
import Profile from "../assets/images/Profile.png"; // Import default profile image

const ProfileViewer = () => {
  const [user, setUser] = useState(null);
  const [selectedPDF, setSelectedPDF] = useState(null);
  const [imageLoaded, setImageLoaded] = useState(false); // Track image load state
  const { userId } = useParams(); // Extract userId from URL parameters

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const token = localStorage.getItem("token");
        const response = await axios.get(`http://localhost:5000/api/users/${userId}`, {
          headers: { Authorization: `Bearer ${token}` },
        });
        setUser(response.data);
        const firstAvailablePDF = Object.values(response.data.pdfLinks || {}).find(Boolean);
        setSelectedPDF(firstAvailablePDF || null); // Fallback if no PDFs are available
      } catch (error) {
        console.error("Error fetching user data:", error);
        alert("Failed to load user data. Please try again.");
      }
    };

    fetchUser();
  }, [userId]);

  const handlePDFSelect = (pdf) => {
    setSelectedPDF(pdf);
  };

  if (!user) {
    return <p>Loading...</p>; // User loading feedback
  }

  const selectedProfileImage = user.profileImage || Profile;

  return (
    <div style={{ backgroundColor: "#f1f1f1" }}>
      <div className="row d-flex align-start w3-padding-large">
        {/* Left Menu */}
        <div className="col-sm-12 col-md-2 col-lg-2">
          <div className="d-flex flex-column align-items-center w3-padding-24">
            {/* Profile Image */}
            {!imageLoaded && <div className="image-placeholder">Loading...</div>}
            <img
              src={selectedProfileImage}
              alt={user?.name || "Default Profile Image"}
              style={{ width: "70%" }}
              className={`w3-padding-small w3-image rounded-circle ${!imageLoaded ? "hidden" : ""}`}
              onLoad={() => setImageLoaded(true)}
              onError={(e) => {
                e.target.src = Profile;
                setImageLoaded(true);
              }}
            />
            <h4 className="text-dark-emphasis fw-bold">{user.name}</h4>
            <h6 className="text-dark-emphasis fw-bold">Download Menu</h6>
          </div>

          {/* Buttons Container */}
          <div className="d-flex flex-column">
            {Object.entries(user.pdfLinks || {}).length > 0 ? (
              Object.entries(user.pdfLinks).map(([key, link]) => (
                <button
                  key={key}
                  className={`w3-button w3-block rounded ${selectedPDF === link ? "active" : ""}`}
                  onClick={() => handlePDFSelect(link)}
                >
                  {key.charAt(0).toUpperCase() + key.slice(1)}
                </button>
              ))
            ) : (
              <p>No PDFs available for download.</p>
            )}
          </div>
        </div>

        {/* Right Container to Display Selected PDF */}
        <div className="col-sm-12 col-md-10 col-lg-10">
          <div className="container">
            {selectedPDF ? (
              <iframe
                src={selectedPDF}
                title="Selected PDF"
                width="100%"
                height="500"
                style={{
                  borderLeft: "2px solid #232323",
                  maxHeight: "100vh",
                  borderRadius: "5px",
                }}
              ></iframe>
            ) : (
              <p className="text-black">No PDF selected. Please choose a file to preview.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileViewer;
