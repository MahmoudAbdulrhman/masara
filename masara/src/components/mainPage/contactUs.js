// src/ContactUs.js

import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'animate.css';
import './ContactUs.css';

const ContactUs = () => {
  return (
    <div>
      {/* Hero Section */}
      <header className="hero-section d-flex align-items-center justify-content-center text-center">
        <div className="hero-content animate__animated animate__fadeIn">
          <h1 className="display-3 text-dark">Get in Touch with Us</h1>
          <p className="lead text-dark">We’re here to help you with any questions you may have.</p>
        </div>
      </header>

      {/* Contact Us Content */}
      <Container fluid className="py-5">
        <Row className="justify-content-center text-center">
          <Col md={8}>
            <Card className="text-center p-4 animate__animated animate__fadeIn">
              <Card.Body>
                <Card.Title className="display-4 mb-3">Masra Homeschooling</Card.Title>
                <Card.Text className="lead">
                  <div className="mb-3">
                    <p>4234 Green River Rd, Unit 101</p>
                    <p>Corona, Ca 92880</p>
                  </div>
                  <div className="mb-3">
                    <a href="http://www.masrahs.org" target="_blank" rel="noopener noreferrer">www.masrahs.org</a>
                  </div>
                  <div className="mb-3">
                    <a href="mailto:Info@masrahs.org">Info@masrahs.org</a>
                  </div>
                  <div className="mb-3">
                    <p>Tel: (951) 251-4234</p>
                  </div>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ContactUs;
