import React, { useState, useRef } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import logo from '../../assets/Logo.png';
import useOutsideClick from '../../utils/navClick'; // Import the custom hook
import "../../CustomStyle.css";  // Import the custom CSS for additional styling

function NavScroll() {
  const [isNavOpen, setNavOpen] = useState(false);
  const navRef = useRef(null);

  // Custom hook to handle outside click
  useOutsideClick(() => setNavOpen(false));

  // Close the navbar when an item is selected (for mobile view)
  const handleNavItemClick = () => {
    setNavOpen(false);
  };

  return (
    <Navbar expand="lg" className="navbar-light bg-light shadow-sm sticky-top">
      <Container fluid>
        <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
          <img src={logo} style={{ width: '50px', height: 'auto' }} className="p-1" alt="logo" />
          <h2 className="ms-2 mb-0">Welcome to Masra!</h2>
        </Navbar.Brand>

        {/* Navbar Toggle */}
        <Navbar.Toggle
          aria-controls="navbarSupportedContent"
          onClick={() => setNavOpen(!isNavOpen)} // Toggle navbar open/close
        />

        {/* Navbar Collapse */}
        <Navbar.Collapse id="navbarSupportedContent" ref={navRef} in={isNavOpen}>
          <Nav className="ms-auto mb-2 mb-lg-0">
            {/* About Dropdown */}
            <NavDropdown title="About" id="aboutDropdown">
              <NavDropdown.Item as={Link} to="/about/center" onClick={handleNavItemClick}>
                Center
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/vision" onClick={handleNavItemClick}>
                Vision & Mission
              </NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/ourTeam" onClick={handleNavItemClick}>
                Our Team
              </NavDropdown.Item>
            </NavDropdown>

            {/* Classes Dropdown */}
            <NavDropdown title="Classes" id="classesDropdown">
              <NavDropdown.Item href="#action3" onClick={handleNavItemClick}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#another-action" onClick={handleNavItemClick}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else" onClick={handleNavItemClick}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {/* Registration Dropdown */}
            <NavDropdown title="Registration" id="registrationDropdown">
              <NavDropdown.Item href="#action3" onClick={handleNavItemClick}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#another-action" onClick={handleNavItemClick}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else" onClick={handleNavItemClick}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {/* Events Dropdown */}
            <NavDropdown title="Events" id="eventsDropdown">
              <NavDropdown.Item href="#action3" onClick={handleNavItemClick}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#another-action" onClick={handleNavItemClick}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else" onClick={handleNavItemClick}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {/* Parents Portal Dropdown */}
            <NavDropdown title="Parents Portal" id="parentsPortalDropdown">
              <NavDropdown.Item href="#action3" onClick={handleNavItemClick}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#another-action" onClick={handleNavItemClick}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else" onClick={handleNavItemClick}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {/* Student Portal Dropdown */}
            <NavDropdown title="Student Portal" id="studentPortalDropdown">
              <NavDropdown.Item href="#action3" onClick={handleNavItemClick}>
                Action
              </NavDropdown.Item>
              <NavDropdown.Item href="#another-action" onClick={handleNavItemClick}>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else" onClick={handleNavItemClick}>
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {/* Newsletter Link */}
            <Nav.Link href="#newsletter" onClick={handleNavItemClick}>
              Newsletter
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
