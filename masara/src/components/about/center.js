// src/pages/Center.js
import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "../about/about.css"; // Ensure the path is correct

const Center = () => {
  return (
    <>
      <Container className="mt-4 custom-shadow">
        <Row className="top align-items-center">
          <Col md={4} className="text-center text-white fw-bold custom-text">
            <p>Our center</p>
          </Col>
        </Row>
      </Container>
      <Container className="mt-3">
        <Card>
          <Card.Body>
            <p className="text-center fw-bold fs-5">
              At MASRA, we believe in the power of personalized learning and the
              importance of fostering a love of discovery. We're a community of
              passionate educators and supportive families dedicated to
              empowering children to thrive in a nurturing environment.
            </p>
          </Card.Body>
        </Card>
        <Card className="mt-1">
          <Card.Body>
            <p className="text-left fs-5">
              At MASRA, we understand that every child learns differently.
              That's why we are tailoring our approach to unlock each child's
              unique potential. We believe in fostering a love of discovery,
              igniting a natural curiosity that fuels a lifelong passion for
              learning. 
              <br/>
              <br/>
              Our secret ingredient? A powerful community. Imagine a
              vibrant mix of passionate educators who guide and inspire, and
              supportive families who create a nurturing environment. At MASRA,
              this is exactly what you'll find. Our teachers are dedicated to
              empowering children, not just filling them with facts. They create
              a space where exploration is encouraged, and questions are
              celebrated.
              <br/>
              <br/>
               Our philosophy goes beyond academics. We believe in
              fostering the whole child, creating a safe space where they can
              thrive emotionally, socially, and intellectually. If you're
              looking for an educational environment that values your child's
              individuality and ignites their love of learning, then MASRA might
              be the perfect fit. 
              <br/>
              <br/>
              Our dedicated teachers go beyond rote
              memorization. They create a space where children can explore their
              interests, ask questions, and truly understand the world around
              them. We nurture the whole child, fostering emotional, social, and
              intellectual growth. At MASRA, your child will thrive in a safe
              and stimulating environment designed to unlock their full
              potential. Ready to unleash your child's love of learning? Contact
              MASRA today to learn more!
            </p>
          </Card.Body>
        </Card>
      </Container>
    </>
  );
};

export default Center;
