import React from "react";
import { Card } from "react-bootstrap";
import "../../CustomStyle.css"; // Import your custom CSS
import logo from "../../assets/Logo.png"; // Adjust the path to your logo image

function Hero() {
  return (
    <div className="hero-body">
      <Card className="hero-section">
        <Card.Body className="d-flex flex-column align-items-center">
          {/* Logo */}
          <img src={logo} alt="MASRA Logo" className="hero-logo" />
          {/* Headings */}
          <p className="display-4 white-heading fontSize">MASRA</p>
          <p className="white-heading">HOMESCHOOLING</p>
        </Card.Body>
      </Card>
    </div>
  );
}

export default Hero;
