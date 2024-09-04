import React from 'react';
import { Card, Container, Row, Col } from 'react-bootstrap';
import 'animate.css'; // Import animate.css
import '../about/about.css'; // Import custom styles

const teamMembers = [
  {
    name: "Neveen Shadafan",
    role: "",
    imgSrc: "https://via.placeholder.com/150",
    description:
      "In a career spanning many years, Neveen Shadafan, an accomplished business professional and leader, has held positions of increasing scope and responsibility. Neveen is highly-experienced in day-to-day business operations and has overseen operations which have met all bottom-line expectations. She has also worked extensively within education and training, refining her instructional and training skills. Neveen holds a Doctor of Business Administration in Strategic Management from CMU, along with other degrees including an MBA, an MA in English, and a BA in English Arabic Translation. Fluent in English and Arabic, she also speaks other languages.",
  },
  {
    name: "Ranin Zubi",
    role: "",
    imgSrc: "https://via.placeholder.com/150",
    description: "BA communication skills from CSS, event director at Pat Davis Group, teaching certification from Basira Education, Ambassador of Screenstrong, and homeschooling for 11 years.",
  },
  {
    name: "Nudrat Siddiqi",
    role: "",
    imgSrc: "https://via.placeholder.com/150",
    description: "Islamic Studies teacher in Hawthorne masjid, working on a Master's in Islamic education from Guidance, has a background in youth leadership development and event planning, homeschooling for 4 years.",
  },
  {
    name: "Samar Asfour",
    role: "",
    imgSrc: "https://via.placeholder.com/150",
    description: "One of the first people to start Islamic homeschooling in Anaheim. A teacher by occupation by default.",
  },
  {
    name: "Sana Sirajudeen",
    role: "",
    imgSrc: "https://via.placeholder.com/150",
    description: "An engineering background, executed many education events and programs for kids and youth. She has a lot of experience with project management, budgeting, and administrative issues.",
  }
];

const OurTeam = () => {
  return (
    <Container className="our-team-container mt-4">
      <h2 className="text-center mb-4">Our Team</h2>
      {teamMembers.map((member, index) => (
        <Card 
          key={index} 
          className={`mb-4 team-card animate__animated ${index % 2 === 0 ? 'animate__fadeInLeft' : 'animate__fadeInRight'}`}
          style={{ animationDelay: `${index * 0.2}s` }} // Delaying each card slightly for a nice effect
        >
          <Row className="d-flex align-items-center">
            {/* Conditionally set the image to the left or right on larger screens and always on top for mobile */}
            {index % 2 === 0 ? (
              <>
                <Col xs={12} md={4} className="order-md-1 order-1">
                  <Card.Img variant="top" src={member.imgSrc} className="team-img" />
                </Col>
                <Col xs={12} md={8} className="order-md-2 order-2">
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                    <Card.Text>{member.description}</Card.Text>
                  </Card.Body>
                </Col>
              </>
            ) : (
              <>
                <Col xs={12} md={8} className="order-md-1 order-2">
                  <Card.Body>
                    <Card.Title>{member.name}</Card.Title>
                    <Card.Subtitle className="mb-2 text-muted">{member.role}</Card.Subtitle>
                    <Card.Text>{member.description}</Card.Text>
                  </Card.Body>
                </Col>
                <Col xs={12} md={4} className="order-md-2 order-1">
                  <Card.Img variant="top" src={member.imgSrc} className="team-img" />
                </Col>
              </>
            )}
          </Row>
        </Card>
      ))}
    </Container>
  );
};

export default OurTeam;
