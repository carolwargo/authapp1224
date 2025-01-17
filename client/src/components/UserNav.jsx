import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";

function UserNav() {
  const { user } = useContext(UserContext);

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        {/* Home Icon */}
        <Navbar.Brand as={Link} to="/">
          <i className="fas fa-home"></i>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Conditionally Rendered Profile or Auth Links */}
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  <i className="fas fa-user"></i> {user.name}
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard">
                  <i className="fas fa-tachometer-alt"></i> Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/logout">
                  <i className="fas fa-sign-out-alt"></i> Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  <i className="fas fa-lock"></i> Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  <i className="fas fa-user-plus"></i> Signup
                </Nav.Link>
              </>
            )}
            <Nav.Link as={Link} to="/infoform">
              InfoForm
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNav;
