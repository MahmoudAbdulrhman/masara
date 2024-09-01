// src/components/FooterComponent.js
import React from 'react';
import { Container, Row, Col, Nav } from 'react-bootstrap';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import '../../CustomStyle.css'; // Import your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';


      
const FooterComponent = () => {
  return (
    <footer className="footer bg-dark text-white py-2 " fixed="bottom" >
      <Container>
        <Row className="text-center">
          {/* About Section */}
          <Col xs={12} className="mb-2">
            <p>
              MASRA offers personalized learning experiences and a supportive environment. 
            </p>
          </Col>
        </Row>

        {/* Social Media Links */}
        <Row className="justify-content-center mb-2">
          <Col xs="auto">
            <Nav>
              <Nav.Link href="https://facebook.com" target="_blank" className="text-white me-2"><FaFacebookF /></Nav.Link>
              <Nav.Link href="https://twitter.com" target="_blank" className="text-white me-2"><FaTwitter /></Nav.Link>
              <Nav.Link href="https://instagram.com" target="_blank" className="text-white me-2"><FaInstagram /></Nav.Link>
              <Nav.Link href="https://linkedin.com" target="_blank" className="text-white"><FaLinkedinIn /></Nav.Link>
            </Nav>
          </Col>
        </Row>

        {/* Footer Bottom */}
        <Row className="text-center">
          <Col>
            <p className="mb-0 text-muted">© 2024 MASRA</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

export default FooterComponent;
