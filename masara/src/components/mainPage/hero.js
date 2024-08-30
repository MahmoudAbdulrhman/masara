import React from 'react';
import { Container, Row, Col} from 'react-bootstrap';
import '../../CustomStyle.css'; // Optional: for custom CSS

// Import your background image
// import girl from '../../assets/c1.jpg'
import boy from '../../assets/c2.webp'
// import family from '../../assets/c3.webp'
import heroImage from '../../assets/small.jpg';

function Hero() {
    return (
        <div className="hero-section" style={{ backgroundImage: `url(${heroImage})` }}>
            <Container fluid className="h-100 d-flex align-items-center">
                <Row className="w-100">
                    <Col md={6} className="text-black text-center text-md-left">
                    <br/>
                    <br/>
                        <h1 className="display-4 white-heading fontSize">MASRA</h1>
                        <p className="lead">HOMESCHOOLING</p>                                            
                    </Col>
                    <Col>
                    <img className='boy' src={boy} alt='boy study'/>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Hero;
