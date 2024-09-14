import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'animate.css';
import '../regTab/regTab.css'

         // Import custom CSS for additional styling

const Portal = () => {
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
              <Button variant="primary" href="mailto:info@masraha.org" className="animate__animated animate__fadeIn animate__delay-6s">
              Email Us
            </Button>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Portal;
