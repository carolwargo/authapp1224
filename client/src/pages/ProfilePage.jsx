import React, { useContext, useState } from "react";
import { UserContext } from "../context/UserContext";
import { Link } from "react-router-dom";
import Intake from "../components/InfoForm/Intake";

function ProfilePage() {
  const { user } = useContext(UserContext);
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen((prev) => !prev);
  };

  if (!user) {
    return   <p className="text-white">
    Please <Link to="/login">log in</Link> to view your profile.
  </p>;
  }

  return (
    <div>
      <h1>Welcome, {user.name}!</h1>
      <p>Email: {user.email}</p>

      {/* Navbar */}
      <div className="w3-top">
        <div className="w3-bar w3-theme-d2 w3-left-align w3-large">
          <button
            className="w3-bar-item w3-button w3-hide-medium w3-hide-large w3-right w3-padding-large w3-hover-white w3-large w3-theme-d2"
            onClick={toggleNav}
          >
            <i className="fa fa-bars"></i>
          </button>
          <a href="/" className="w3-bar-item w3-button w3-padding-large w3-theme-d4">
            <i className="fa fa-home w3-margin-right"></i>Logo
          </a>
          <a
            href="/"
            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            title="News"
          >
            <i className="fa fa-globe"></i>
          </a>
          <a
            href="/"
            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            title="Account Settings"
          >
            <i className="fa fa-user"></i>
          </a>
          <a
            href="/"
            className="w3-bar-item w3-button w3-hide-small w3-padding-large w3-hover-white"
            title="Messages"
          >
            <i className="fa fa-envelope"></i>
          </a>
          <div className="w3-dropdown-hover w3-hide-small">
            <button className="w3-button w3-padding-large" title="Notifications">
              <i className="fa fa-bell"></i>
              <span className="w3-badge w3-right w3-small w3-green">3</span>
            </button>
            <div className="w3-dropdown-content w3-card-4 w3-bar-block" style={{ width: "300px" }}>
              <a href="/" className="w3-bar-item w3-button">
                One new friend request
              </a>
              <a href="/" className="w3-bar-item w3-button">
                John Doe posted on your wall
              </a>
              <a href="/" className="w3-bar-item w3-button">
                Jane likes your post
              </a>
            </div>
          </div>
          <a
            href="/"
            className="w3-bar-item w3-button w3-hide-small w3-right w3-padding-large w3-hover-white"
            title="My Account"
          >
            <img
              src="/w3images/avatar2.png"
              className="w3-circle"
              style={{ height: "23px", width: "23px" }}
              alt="Avatar"
            />
          </a>
        </div>
      </div>

      {/* Navbar on small screens */}
      {isNavOpen && (
        <div id="navDemo" className="w3-bar-block w3-theme-d2 w3-large">
          <a href="/" className="w3-bar-item w3-button w3-padding-large">
            Link 1
          </a>
          <a href="/" className="w3-bar-item w3-button w3-padding-large">
            Link 2
          </a>
          <a href="/" className="w3-bar-item w3-button w3-padding-large">
            Link 3
          </a>
          <a href="/" className="w3-bar-item w3-button w3-padding-large">
            My Profile
          </a>
        </div>
      )}

      {/* Page Content */}
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
          <div className="col-sm-12 col-md-4 col-lg-4"></div>
        </div>
      </div>

      {/* Intake Form */}
      <Intake />
    </div>
  );
}

export default ProfilePage;
