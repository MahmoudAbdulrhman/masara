// // src/pages/Center.js
// import React from "react";
// import { Container, Row, Col, Card } from "react-bootstrap";
// import "../about/about.css"; // Ensure the path is correct

// const Vision = () => {
//   return (
//     <>
//       <Container className="mt-4 custom-shadow">
//         <Row className="vision align-items-center">
//           <Col md={4} className="text-center text-white fw-bold custom-text">
//             <p>Vision & Mission</p>
//           </Col>
//         </Row>
//       </Container>
//       <Container className="mt-3">
//         <Card>
//           <Card.Body>
//             <p className="text-left fw-bold fs-2">Our Vision:</p>
//             <p className="text-left fs-5 ">
//               Empowering lifelong learners: MASRA envisions a future where
//               homeschoolers become passionate, self-directed learners equipped
//               to thrive in a dynamic world.
//             </p>
//           </Card.Body>
//         </Card>
//         <Card className="mt-1">
//           <Card.Body>
//           <p className="text-left fw-bold fs-2">Our Mission:</p>
//           <p className="text-left fs-5 ">
//               Nurturing academic excellence and exploration: MASRA is dedicated
//               to providing high-quality core classes and enriching programs that
//               cater to the individual needs of homeschoolers. We foster a
//               supportive and collaborative environment where children can
//               cultivate their unique talents and discover the joy of lifelong
//               learning.
//             </p>
//           </Card.Body>
//         </Card>
//       </Container>
//     </>
//   );
// };

// export default Vision;

import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'animate.css/animate.min.css';
import '../../CustomStyle.css'; // Custom styles
import vision from '../../assets/vision4.jpg';

const Vision = () => {
  return (
    <div className="bg-light-peach p-3">
      {/* Hero Section */}
      <header className="hero-section text-white text-center py-5 animate__animated animate__fadeIn">
        <Container>
          <Row className="justify-content-center">
            <Col md={8}>
              <h1 className="display-4">Our Vision</h1>
              <p className="lead fs-3">Nurturing academic excellence and exploration.</p>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Introduction Section */}
      <section className="py-5">
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
          <Button href="#contact" variant="success" className="animate__animated animate__fadeInUp">Contact Us</Button>
        </Container>
      </section>


    </div>
  );
}

export default Vision;

