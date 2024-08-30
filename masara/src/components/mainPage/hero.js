import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import '../../CustomStyle.css'; // Optional: for custom CSS
import logo from '../../assets/Logo.png';
// import heroImage from '../../assets/small.jpg';
import '../../CustomStyle.css'; // Import your custom CSS

function Hero() {
    return (
        <div className="hero-section h-50">
            <Container fluid className="h-100 d-flex align-items-center">
                <Row className="w-100 align-items-center text-center text-md-start">
                    <Col md={4} className="d-flex flex-column justify-content-center align-items-center align-items-md-start">
                        <h1 className="display-4 white-heading fontSize">MASRA</h1>
                        <h2 className="lead">HOMESCHOOLING</h2>
                    </Col>
                    <Col md={4}>
                        {/* You can add other content here if needed */}
                    </Col>
                    <Col md={4} className="d-flex justify-content-center justify-content-md-end align-items-start">
                        <img src={logo} className='w-50' alt='logo'/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
