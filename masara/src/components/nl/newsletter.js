// src/components/NewsletterPage.js
import React, { useState } from 'react';
import './Newsletter.css'; // Custom CSS for styling
import 'animate.css';
import { Container, Card, Button } from 'react-bootstrap';
// import news from '../../assets/newl1.jpg'; // Path to your hero image

function NewsletterPage() {
  const [showForm, setShowForm] = useState(false);

  const handleButtonClick = () => {
    setShowForm(true);
  };

  return (
    <Container className="newsletter-page">
      <div className="hero-section animate__animated animate__fadeIn">
        <h1>Join Our Newsletter</h1>
        <p>Stay updated with the latest news and offers by subscribing to our newsletter.</p>
      </div>

      <div className="card-section">
        <Card className="animate__animated animate__fadeIn">
          <Card.Body>
            <Card.Title>Why Subscribe?</Card.Title>
            <Card.Text>
              Our newsletter brings you the latest updates, special offers, and insider news directly to your inbox. Stay informed and never miss out on what's happening.
            </Card.Text>
            <Button variant="primary" onClick={handleButtonClick}>Subscribe Now</Button>
          </Card.Body>
        </Card>
      </div>

      {showForm && (
        <div className="form-container animate__animated animate__fadeIn">
          <iframe
            src="https://docs.google.com/forms/d/e/1FAIpQLSdsuqzl1zmJSiokXuW4U5Ek0snrhG1ySv_FSbM5LG0l6GKmEQ/viewform"
            width="100%"
            height="800px"
            frameBorder="0"
            marginHeight="0"
            marginWidth="0"
            title="Newsletter Signup Form"
          >
            Loading…
          </iframe>
        </div>
      )}
    </Container>
  );
}

export default NewsletterPage;
