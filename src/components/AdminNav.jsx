import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { UserContext } from "../contexts/UserContext";
import { useState, useEffect } from "react";

export const AdminNav = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    if (localStorage.getItem("adminToken")) {
      setIsLoggedIn(true);
    }
  }, []);

  return isLoggedIn ? (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#">
          <div className="brand-container d-flex">
            <h1>PetSelling</h1>
          </div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav className="me-auto mx-auto my-2 my-lg-0">
            <NavDropdown title="edit : " id="navbarScrollingDropdown">
              <NavDropdown.Item href="/pet_type">Pet types </NavDropdown.Item>
              <NavDropdown.Item href="/admin/ads">User Ads </NavDropdown.Item>
              <NavDropdown.Item href="/city"> City </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <div className="actions">
            <button
              className="Sign-Out-Button"
              onClick={() => {
                localStorage.removeItem("adminToken");
                setIsLoggedIn(false);
                window.location.reload();
              }}
            >
              Logout
            </button>
          </div>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  ) : (
    <div></div>
  );
};
