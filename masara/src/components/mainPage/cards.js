import React, { useState, useEffect } from 'react';
import { Col, Row, Card, Modal, Button, Spinner } from 'react-bootstrap';
import enroll from "../../assets/back.jpg";
import teach from '../../assets/career.jpg';
import '../mainPage/HorizontalCardStyles.css'; // Import your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const HorizontalCardComponent = () => {
  const [showModal, setShowModal] = useState(false);
  const [formUrl, setFormUrl] = useState('');
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setLoading(false), 1000); // 1-second delay
    return () => clearTimeout(timer);
  }, []);

  const handleShow = (url) => {
    setFormUrl(url);
    setShowModal(true);
  };

  const handleClose = () => setShowModal(false);

  return (
    <div className="horizontal-card-container">
      {/* Introductory Card */}
      <Card className={`intro-card animated fadeInUp ${loading ? 'loading' : ''}`}>
        {loading ? (
          <div className="loading-spinner">
            <Spinner animation="border" />
          </div>
        ) : (
          <Card.Body className='intro-text'>
            <h3 className="intro-description">
              At MASRA, we believe in the power of personalized learning and the
              importance of fostering a love of discovery. We're a community of passionate educators and
              supportive families dedicated to empowering children to thrive in a nurturing environment.
            </h3>
          </Card.Body>
        )}
      </Card>

      {/* Test Section */}
      <div className="card-section mt-4">
        <Row>
          {/* Student Enrollment Card */}
          <Col md={6}>
            <Card className={`info-card animated flipInX ${loading ? 'loading' : ''}`}>
              {loading ? (
                <div className="loading-spinner">
                  <Spinner animation="border" />
                </div>
              ) : (
                <>
                  <Card.Img className='card-img' variant="top" src={enroll} />
                  <Card.Body>
                    <Card.Title><h2>Enrollment</h2></Card.Title>
                    <Card.Text>
                      <ul className="info-list">
                        <li>
                          <Button 
                            variant="primary" 
                            className="info-button hover-effect"
                            onClick={() => handleShow('https://docs.google.com/forms/d/e/1FAIpQLScqPAIhioqezy7z8AKlHe1RVrwph0D84Js73COeqAa1dr2KNw/viewform')}
                          >
                            Open Interest Form
                          </Button>
                        </li>
                        <li>Registration Form (coming soon)</li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </>
              )}
            </Card>
          </Col>

          {/* Teacher Interest Card */}
          <Col md={6}>
            <Card className={`info-card animated flipInX ${loading ? 'loading' : ''}`}>
              {loading ? (
                <div className="loading-spinner">
                  <Spinner animation="border" />
                </div>
              ) : (
                <>
                  <Card.Img className='card-img' variant="top" src={teach} />
                  <Card.Body>
                    <Card.Title><h2>Career</h2></Card.Title>
                    <Card.Text>
                      <ul className="info-list">
                        <li>
                          <Button 
                            variant="primary" 
                            className="info-button hover-effect"
                            onClick={() => handleShow('https://forms.gle/yiSmiPN7umwLtvpi6')}
                          >
                            Open Teacher Interest Form
                          </Button>
                        </li>
                      </ul>
                    </Card.Text>
                  </Card.Body>
                </>
              )}
            </Card>
          </Col>
        </Row>
      </div>

      {/* Modal for Google Form */}
      <Modal show={showModal} onHide={handleClose} size="lg" className="animated fadeInUp">
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
