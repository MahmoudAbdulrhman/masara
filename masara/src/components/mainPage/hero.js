

import React from "react";
import { Card } from "react-bootstrap";
import "../mainPage/HeroStyles.css"; // Import your custom CSS
import logo from "../../assets/Logo.png"; // Adjust the path to your logo image
import heroBackground from "../../assets/small3.jpg"; // Adjust the path to your background image

function Hero() {
  return (
    <div className="hero-container">
      <Card className="hero-card animated fadeIn">
        <Card.Img 
          variant="top" 
          src={heroBackground} 
          className="hero-image animated fadeIn"
          style={{ height: '100%', objectFit: 'cover' }}
        />
        <Card.Body className="d-flex flex-column align-items-center justify-content-center text-center">
          {/* Logo */}
          <img src={logo} alt="MASRA Logo" className="hero-logo animated bounceInDown" />
          {/* Headings */}
          <h1 className="hero-title animated zoomIn">MASRA</h1>
          <p className="hero-subtitle animated zoomIn">HOMESCHOOLING</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Hero;
