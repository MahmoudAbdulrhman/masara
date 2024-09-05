import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'animate.css';
import './regTab.css'; // Import custom CSS for additional styling

const Registration = () => {
  return (
    <div className="heror-section">
      <Container className="text-center">
        <Row className="justify-content-center align-items-center min-vh-100">
          <Col xs={12} md={8} lg={6} className="animate__animated animate__fadeIn">
            <div className="hero-content p-2">
              <h1 className="display-3 text-black animate__animated animate__fadeIn animate__delay-1s ">
                Coming Soon
              </h1>
              <p className="lead text-black animate__animated animate__fadeIn animate__delay-2s">
                We're working hard to get our new site up and running. Stay tuned!
              </p>
              <Button variant="primary" className="animate__animated animate__fadeIn animate__delay-3s">
                Learn More
              </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Registration;
