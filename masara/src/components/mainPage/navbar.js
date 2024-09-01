import React, { useState } from 'react';
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useOutsideClick from '../../utils/navClick'; // Import the custom hook
import '../../CustomStyle.css'; // Import your custom CSS

function NavScroll() {
  const [isNavOpen, setNavOpen] = useState(false);
  const navRef = useOutsideClick(() => setNavOpen(false));

  return (
    <Navbar
      expand="lg"
      className="bg-body-tertiary shadow-sm"
      fixed="top"
      ref={navRef}
    >
      <Container>
        <Navbar.Brand as={Link} to="/" className='font-l'>Welcome to Masra!</Navbar.Brand>
        <Navbar.Toggle
          aria-controls="navbarScroll"
          onClick={() => setNavOpen(!isNavOpen)}
        />
        <Navbar.Collapse
          id="navbarScroll"
          in={isNavOpen}
          className="collapse-navbar"
        >
          <Nav
            className="ms-auto" // Aligns items to the left
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* About */}
            <NavDropdown title="About" id="aboutDropdown" className="me-lg-2">
              <NavDropdown.Item as={Link} to="/about/center">Center</NavDropdown.Item>
              <NavDropdown.Item as={Link} to="/about/vision">Vision & Mission</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Classes */}
            <NavDropdown title="Classes" id="classesDropdown" className="me-lg-2">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Registration */}
            <NavDropdown title="Registration" id="registrationDropdown" className="me-lg-2">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Events */}
            <NavDropdown title="Events" id="eventsDropdown" className="me-lg-2">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Parents Portal */}
            <NavDropdown title="Parents Portal" id="parentsPortalDropdown" className="me-lg-2">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Student Portal */}
            <NavDropdown title="Student Portal" id="studentPortalDropdown" className="me-lg-2">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Newsletter */}
            <Nav.Link href="#newsletter">Newsletter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavScroll;
