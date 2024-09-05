import React from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import 'animate.css';
import '../regTab/regTab.css';

const Form = () => {
  return (
    <div className="bg-light py-5">
      <Container>
        <Row className="justify-content-center">
          <Col md={10} lg={8}> {/* Adjusted width */}
            <Card className="shadow-lg animate__animated animate__fadeIn animate__delay-1s">
              <Card.Body>
                <h2 className="text-center mb-4 animate__animated animate__fadeIn animate__delay-2s">
                  Intrest Form
                </h2>
                <iframe
                  title="Google Form"
                  src="https://docs.google.com/forms/d/e/1FAIpQLScqPAIhioqezy7z8AKlHe1RVrwph0D84Js73COeqAa1dr2KNw/viewform?embedded=true"
                  width="100%"
                  height="1200"
                  frameBorder="0"
                  marginHeight="0"
                  marginWidth="0"
                  className="animate__animated animate__fadeIn animate__delay-3s"
                >
                  Loading…
                </iframe>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Form;
