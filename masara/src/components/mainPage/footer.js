import React from 'react';
import { Container, Row, Col, Nav, NavLink } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../../CustomStyle.css'; // Import your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-white pt-4 pb-3 ">
      <Container>
        <Row>
          {/* About Section */}
          <Col md={4} className="mb-3">
            <h5>About Us</h5>
            <p>
              MASRA is dedicated to providing personalized learning experiences and fostering a supportive educational environment. Learn more about our mission and values.
            </p>
          </Col>

          {/* Quick Links Section */}
          <Col md={4} className="mb-3">
            <h5>Quick Links</h5>
            <Nav className="flex-column">
              <NavLink href="#home" className="text-white">Home</NavLink>
              <NavLink href="#about" className="text-white">About Us</NavLink>
              <NavLink href="#services" className="text-white">Services</NavLink>
              <NavLink href="#contact" className="text-white">Contact</NavLink>
            </Nav>
          </Col>

          {/* Contact Section */}
          <Col md={4} className="mb-3">
            <h5>Contact Us</h5>
            <p>Email: info@masra.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Learning Lane, Education City, EC 12345</p>
          </Col>
        </Row>

        {/* Social Media Links */}
        <Row className="justify-content-center mt-3">
          <Col className="text-center">
            <h5>Follow Us</h5>
            <Nav>
              <Nav.Link href="https://facebook.com" target="_blank" className="text-white me-3"><FaFacebookF /></Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank" className="text-white me-3"><FaTwitter /></Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank" className="text-white me-3"><FaInstagram /></Nav.Link>
              <Nav.Link href="https://linkedin.com" target="_blank" className="text-white"><FaLinkedinIn /></Nav.Link>
            </Nav>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="mt-4">
          <Col className="text-center">
            <p className="mb-0">© 2024 MASRA. All rights reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
