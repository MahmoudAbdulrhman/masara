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
                    <p>Our Creative Writing course invites you to dive into your imagination and develop your writing skills through engaging exercises and storytelling techniques. This course is designed to help you express your creativity while refining your abilities as a writer.

In the Adventure Through Stories and Art course, you’ll immerse yourself in the world of literature and art. By blending storytelling with creative expression, you’ll embark on a unique learning journey that combines the art of narrative with artistic skills.

The Debate and Public Speaking course focuses on enhancing your critical thinking and communication abilities. Through learning effective debate strategies and public speaking techniques, this course aims to build your confidence and improve your presentation skills.</p>
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
