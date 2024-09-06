import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'animate.css/animate.min.css';
import '../../CustomStyle.css'; // Custom styles
// Replace with your actual image

const Center = () => {
  return (
    <div className="bg-light-peach p-3">
      {/* Hero Section */}
      <header className="heroct-section text-white text-center py-5 animate__animated animate__fadeIn">
        <Container>
          <Row className="justify-content-center">
            <Col md={10}>
              <h1 className="display-4">Welcome to Our Learning Center</h1>
              <p className="lead fs-3">Empowering students through personalized and innovative education.</p>
            </Col>
          </Row>
        </Container>
      </header>

      {/* Introduction Section */}
      <section className="py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={10} className="text-center animate__animated animate__fadeInUp custom-col-width">
              <h2>Why Choose Us?</h2>
              <p className='fs-3'>
                At MASRA, we believe in the power of personalized learning and the importance of fostering a love of discovery. We're a community of passionate educators and supportive families dedicated to empowering children to thrive in a nurturing environment.
                <br /><br />
                We understand that every child learns differently. That's why we tailor our approach to unlock each child's unique potential. We foster a love of discovery, igniting a natural curiosity that fuels a lifelong passion for learning.
                <br /><br />
                Our secret ingredient? A powerful community. Imagine a vibrant mix of passionate educators who guide and inspire, and supportive families who create a nurturing environment. At MASRA, you'll find exactly that. Our teachers are dedicated to empowering children, not just filling them with facts. They create a space where exploration is encouraged, and questions are celebrated.
                <br /><br />
                Our philosophy goes beyond academics. We believe in fostering the whole child, creating a safe space where they can thrive emotionally, socially, and intellectually. If you're looking for an educational environment that values your child's individuality and ignites their love of learning, MASRA might be the perfect fit.
                <br /><br />
                Ready to unleash your child's love of learning? Contact MASRA today to learn more!
              </p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Features Section */}
      <section className="bg-light py-5">
        <Container>
          <Row className="justify-content-center">
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <div className="feature-icon mb-3">
                <i className="fa fa-lightbulb fa-3x"></i>
              </div>
              <h3>Innovative Learning Methods</h3>
              <p>We employ cutting-edge teaching methods and educational technology to create an engaging learning environment.</p>
            </Col>
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <div className="feature-icon mb-3">
                <i className="fa fa-users fa-3x"></i>
              </div>
              <h3>Supportive Community</h3>
              <p>Join a supportive network of educators and families who are dedicated to the academic and personal growth of every student.</p>
            </Col>
            <Col md={4} className="text-center animate__animated animate__fadeInUp">
              <div className="feature-icon mb-3">
                <i className="fa fa-calendar fa-3x"></i>
              </div>
              <h3>Flexible Learning Options</h3>
              <p>Our flexible scheduling and program options allow families to integrate education seamlessly into their daily lives.</p>
            </Col>
          </Row>
        </Container>
      </section>

      {/* Call-to-Action Section */}
      <section className="text-center py-5">
        <Container>
          <h2 className="animate__animated animate__fadeInUp">Ready to Learn More?</h2>
          <p className="animate__animated animate__fadeInUp">Discover how MASRA Learning Center can make a difference in your child's educational journey.</p>
          <Button href="#contact" variant="success" className="animate__animated animate__fadeInUp">Contact Us</Button>
        </Container>
      </section>
    </div>
  );
};

export default Center;
