// src/pages/Center.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../about/about.css"; // Ensure the path is correct

const Vision = () => {
  return (
    <>
      <Container className="mt-4 custom-shadow">
        <Row className="vision align-items-center">
          <Col md={4} className="text-center text-white fw-bold custom-text">
            <p>Vision & Mission</p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        <Card>
          <Card.Body>
            <p className="text-left fw-bold fs-2">Our Vision:</p>
            <p className="text-left fs-5 ">
              Empowering lifelong learners: MASRA envisions a future where
              homeschoolers become passionate, self-directed learners equipped
              to thrive in a dynamic world.
            </p>
          </Card.Body>
        </Card>
        <Card className="mt-1">
          <Card.Body>
          <p className="text-left fw-bold fs-2">Our Mission:</p>
          <p className="text-left fs-5 ">
              Nurturing academic excellence and exploration: MASRA is dedicated
              to providing high-quality core classes and enriching programs that
              cater to the individual needs of homeschoolers. We foster a
              supportive and collaborative environment where children can
              cultivate their unique talents and discover the joy of lifelong
              learning.
            </p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Vision;
