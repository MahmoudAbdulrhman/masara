import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../../CustomStyle.css'; // Optional: for custom CSS



// import boy from '../../assets/c2.webp'

import heroImage from '../../assets/small.jpg';

function Hero() {
    return (
        <div className="hero-section h-50" style={{ backgroundImage: `url(${heroImage})` }}>
            <Container fluid className="h-100  d-flex align-items-center">
                <Row className="w-100 align-items-center">
                    <Col md={6} className="text-black">
                    <br/>
                    <br/>
                        <h1 className="display-4 white-heading fontSize  text-center">MASRA</h1>
                        <p className="lead text-center">HOMESCHOOLING</p>                                            
                    </Col>                   
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
