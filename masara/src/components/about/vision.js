

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'animate.css/animate.min.css';
import '../../CustomStyle.css'; // Custom styles
import vision from '../../assets/vision4.jpg';

const Vision = () => {
  return (
    <div className=" ccolor p-3">
      {/* Hero Section */}
      <header className="heros-section text-white text-center py-5 animate__animated animate__fadeIn">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="display-4">Our Vision</h1>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Introduction Section */}
      <section className="py-5">
        <Row className='py-5 text-center animate__animated animate__fadeIn'>
            <h2 className="lead fs-1">Nurturing Academic Excellence and Exploration.</h2>
        </Row>
        <Container>
          
          <Row className="align-items-center">

            <Col md={6} className="animate__animated animate__fadeInUp">
              <h2>Why We Do What We Do</h2>
              <p className='fs-4'>MASRA is dedicated
               to providing high-quality core classes and enriching programs that              cater to the individual needs of homeschoolers. We foster a             supportive and collaborative environment where children can
              cultivate their unique talents and discover the joy of lifelong
             learning.</p>
            </Col>
            <Col md={6} className="animate__animated animate__fadeInUp">
              <img
                src={vision}
                alt="Educational Vision"
                className="img-fluid"
              />
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <Container>
          <Row>
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <div className="feature-icon">
                <i className="fa fa-lightbulb fa-3x"></i>
              </div>
              <h3>Innovative Approach</h3>
              <p>We use the latest educational strategies and tools to create a unique learning environment.</p>
            </Col>
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <div className="feature-icon">
                <i className="fa fa-users fa-3x"></i>
              </div>
              <h3>Community Support</h3>
              <p>Join a community of like-minded families who are committed to quality education.</p>
            </Col>
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <div className="feature-icon">
                <i className="fa fa-calendar fa-3x"></i>
              </div>
              <h3>Flexible Scheduling</h3>
              <p>Our flexible scheduling options make it easier for families to integrate learning into their daily lives.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center py-5">
        <Container>
          <h2 className="animate__animated animate__fadeInUp">Ready to Get Started?</h2>
          <p className="animate__animated animate__fadeInUp">Join us in revolutionizing education and creating a personalized learning experience for your child.</p>
          <Button variant="primary" href="mailto:info@masraha.org" className="animate__animated animate__fadeIn animate__delay-6s">
              Email Us
            </Button>
        </Container>
      </section>
    </div>
  );
}

export default Vision;

