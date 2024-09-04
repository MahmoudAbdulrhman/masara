import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import 'animate.css';
import '../classes/classes.css';

const Courses = () => {
  return (
    <div>
      {/* Hero Image Section */}
      <div className='heroc-image'></div>

      {/* Content Section Below Hero Image */}
      <div className='heroc-content'>
        <Container className="my-5">
          <Row className="text-center mb-4">
            <Col>
              <h1 className="animate__animated animate__fadeIn">Our Courses</h1>
              <p className="animate__animated animate__fadeIn animate__delay-1s fs-3">
                Welcome to Masra Homeschooling Center's Courses page! We offer a diverse range of classes designed to meet core educational needs and inspire creative growth. Whether you're looking for foundational subjects or enrichment opportunities, we have something for every student.
              </p>
            </Col>
          </Row>

          {/* Centered Cards Container */}
          <Row className="card-container">
            <Col md={6} lg={4} className="mb-4">
              <Card className="animate__animated animate__fadeIn animate__delay-2s">
                <Card.Body>
                  <Card.Title>Core Requirements</Card.Title>
                  <div className="card-text">
                    <ul>
                      <li><strong>Language Arts:</strong> Develop essential reading, writing, and communication skills through engaging literature and writing exercises.</li>
                      <li><strong>Math:</strong> Build critical thinking and problem-solving abilities with our comprehensive math curriculum, designed for all skill levels.</li>
                      <li><strong>Science:</strong> Explore the wonders of the natural world and scientific inquiry with hands-on experiments and interactive lessons.</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>

            <Col md={6} lg={4} className="mb-4">
              <Card className="animate__animated animate__fadeIn animate__delay-3s">
                <Card.Body>
                  <Card.Title>Enrichment Courses</Card.Title>
                  <div className="card-text">
                    <ul>
                      <li><strong>Creative Writing:</strong> Unleash your imagination and enhance your writing skills through various creative exercises and storytelling techniques.</li>
                      <li><strong>Adventure Through Stories and Art:</strong> Dive into the world of literature and art, combining storytelling with artistic expression for a unique learning experience.</li>
                      <li><strong>Debate and Public Speaking:</strong> Develop your critical thinking and communication skills with courses focused on debate strategies and effective public speaking.</li>
                    </ul>
                  </div>
                </Card.Body>
              </Card>
            </Col>
          </Row>

          <Row className="text-center">
            <Col>
              <div className="animate__animated animate__fadeIn animate__delay-4s">
                <p>If you can't find what you're looking for or have specific questions about our courses, our team is here to help. Please feel free to reach out:</p>
                <Button variant="primary" href="mailto:info@masraha.org">
                  Email us at info@masraha.org
                </Button>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </div>
  );
};

export default Courses;
