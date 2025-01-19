import React, { useContext } from "react";
import { UserContext } from "../context/UserContext";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import '../styles/nav.css';


function UserNav() {
  const { user } = useContext(UserContext);

  return (
    <Navbar className="custom-navbar" expand="lg">
      <Container fluid>
        {/* Home Icon */}
        <Navbar.Brand as={Link} to="/">
          <i className="fas fa-home"></i>
        </Navbar.Brand>
        <Navbar.Toggle className=".navbar-toggler-icon" aria-controls="basic-navbar-nav"/>
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {/* Conditionally Rendered Profile or Auth Links */}
            {user ? (
              <>
                <Nav.Link as={Link} to="/profile">
                  <i className="fas fa-user"></i> {user.name}
                </Nav.Link>
                <Nav.Link as={Link} to="/dashboard">
                  <i className="fas fa-tachometer-alt"
                  style={{fontSize:'13px'}}></i> Dashboard
                </Nav.Link>
                <Nav.Link as={Link} to="/logout">
                  <i className="fas fa-sign-out-alt"
                   style={{fontSize:'13px'}}></i> Logout
                </Nav.Link>
              </>
            ) : (
              <>
                <Nav.Link as={Link} to="/login">
                  <i className="fas fa-lock"
                   style={{fontSize:'13px'}}></i>
                </Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default UserNav;
