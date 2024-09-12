import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import 'animate.css';
import './classes.css'; // Import custom CSS for additional styling

const HeroSection = () => {
  return (
    <div className="herosc-section">
      <Container className="herosc-content text-center">
        <Row>
          <Col>
            <h1 className="display-4 text-white animate__animated animate__fadeIn">
              Masra Homeschooling Center Schedule
            </h1>
            <p className="lead text-white animate__animated animate__fadeIn animate__delay-1s">
              Masra Homeschooling Center Offers a Well-rounded Program That Includes Both Core and Enrichment Courses. Explore Our Offerings To See How We Can Support Your Child's Educational Journey.
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

const Schedule = () => {
  return (
    <div className="background-custom">
      <HeroSection />
      <Container className="my-5">
        {/* Core Courses Section */}
        <Row className="mb-4">
          <Col>
            <h2 className="text-center mb-4 fs-1">Core Courses</h2>
            <Row className="justify-content-center fs-3">Coming soon</Row>
            {/* <Row className="justify-content-center">
              <Col md={4} className="mb-4">
                <Card className="animate__animated animate__fadeInUp animate__delay-1s">
                  <Card.Body>
                    <Card.Title>Language Arts</Card.Title>
                    <Card.Text>
                      Develop essential reading, writing, and communication skills through engaging literature and interactive activities.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="animate__animated animate__fadeInUp animate__delay-2s">
                  <Card.Body>
                    <Card.Title>Math</Card.Title>
                    <Card.Text>
                      Build critical thinking and problem-solving abilities with a comprehensive math curriculum suitable for all levels.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={4} className="mb-4">
                <Card className="animate__animated animate__fadeInUp animate__delay-3s">
                  <Card.Body>
                    <Card.Title>Science</Card.Title>
                    <Card.Text>
                      Explore the natural world and scientific inquiry with hands-on experiments and interactive lessons.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row> */}
          </Col>
        </Row>

        {/* Enrichment Courses Section */}
        <Row className="mb-4">
          <Col>
            <h2 className="text-center mb-4">Enrichment Courses</h2>
            <Row className="justify-content-center fs-3">Coming soon</Row>
            {/* <Row className="justify-content-center">
              <Col md={6} className="mb-4">
                <Card className="animate__animated animate__fadeInUp animate__delay-1s">
                  <Card.Body>
                    <Card.Title>Creative Writing</Card.Title>
                    <Card.Text>
                      Unleash your imagination and enhance your writing skills through various creative exercises and storytelling techniques.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="animate__animated animate__fadeInUp animate__delay-2s">
                  <Card.Body>
                    <Card.Title>Storytelling and Art</Card.Title>
                    <Card.Text>
                      Dive into literature and art, combining storytelling with artistic expression for a unique learning experience.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="animate__animated animate__fadeInUp animate__delay-3s">
                  <Card.Body>
                    <Card.Title>Debate</Card.Title>
                    <Card.Text>
                      Develop critical thinking and effective communication skills through structured debate practice.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
              <Col md={6} className="mb-4">
                <Card className="animate__animated animate__fadeInUp animate__delay-4s">
                  <Card.Body>
                    <Card.Title>Public Speaking</Card.Title>
                    <Card.Text>
                      Build confidence and public speaking abilities with courses focused on delivering impactful presentations.
                    </Card.Text>
                  </Card.Body>
                </Card>
              </Col>
            </Row> */}
          </Col>
        </Row>

        {/* Call to Action */}
        <Row className="text-center">
          <Col>
            <p className="lead animate__animated animate__fadeInUp animate__delay-5s">
              Interested in learning more about our courses? Feel free to reach out to us for more information or to discuss enrollment.
            </p>
            <Button variant="primary" href="mailto:info@masraha.org" className="animate__animated animate__fadeIn animate__delay-6s">
              Email Us
            </Button>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Schedule;
