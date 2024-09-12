import React, { useState } from 'react';
import { Col, Row, Card, Modal, Button } from 'react-bootstrap';
import enroll from "../../assets/back.jpg";
import teach from '../../assets/career.jpg';
import '../../CustomStyle.css'; // Import your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const HorizontalCardComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [formUrl, setFormUrl] = useState('');

  const handleShow = (url) => {
    setFormUrl(url);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
   
    <div className="container">
      {/* Introductory Card without Hover Effect */}
      <Card className='padding shadow mt-5'>
        <Card.Body className='lead info-Card'>
          <p className="fs-4 fs-md-2 fs-lg-3 p-3">
            At MASRA, we believe in the power of personalized learning and the
            importance of fostering a love of discovery. We're a community of passionate educators and
            supportive families dedicated to empowering children to thrive in a nurturing environment.
          </p>
        </Card.Body>
      </Card>

      {/* Test Section */}
      <div className="container mt-4">
        <Row>
          {/* Student Enrollment Card without Hover Effect */}
          <Col md={6}>
            <Card className='padding shadow hover-effect'>
              <Card.Img className='padding shadow p-1' variant="top" src={enroll} />
              <Card.Body>
                <Card.Title><h1>Enrollment</h1></Card.Title>
                <Card.Text>
                  <ul className="custom-list">
                    <li><Button variant="link" onClick={() => handleShow('https://docs.google.com/forms/d/e/1FAIpQLScqPAIhioqezy7z8AKlHe1RVrwph0D84Js73COeqAa1dr2KNw/viewform')}>Interest Form</Button></li>
                    <li>Registration Form (coming soon)</li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          {/* Teacher Interest Card with Hover Effect */}
          <Col md={6}>
            <Card className='padding shadow hover-effect'>
              <Card.Img className='padding shadow p-1' variant="top" src={teach} />
              <Card.Body>
                <Card.Title><h1>Career</h1></Card.Title>
                <Card.Text>
                  <ul className="custom-list">
                    <li><Button variant="link" onClick={() => handleShow('https://forms.gle/yiSmiPN7umwLtvpi6')}>Teacher Interest Form</Button></li>
                  </ul>
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </div>

      {/* Modal for Google Form */}
      <Modal show={showModal} onHide={handleClose} size="lg">
        <Modal.Header closeButton>
          <Modal.Title>Google Form</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <iframe
            src={formUrl}
            width="100%"
            height="500px"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Google Form"
          ></iframe>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  
  );
};

export default HorizontalCardComponent;
