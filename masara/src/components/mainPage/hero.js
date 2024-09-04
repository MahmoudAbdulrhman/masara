import React from "react";
import { Card } from "react-bootstrap";
import "../../CustomStyle.css"; // Optional: for custom CSS
import "../../CustomStyle.css"; // Import your custom CSS

function Hero() {
  return (
    
      <Card className="hero-section " style={{ width: '850px' }}>
        <Card.Body className="d-flex flex-column align-items-center ">
          <p className="display-4 white-heading fontSize">MASRA</p>
          <p>HOMESCHOOLING</p>
        </Card.Body>
      </Card>

      
    
  );
}

export default Hero;
