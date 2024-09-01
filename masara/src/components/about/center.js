import "../about/about.css"
import { Container, Row, Col, Card } from 'react-bootstrap';
 


const Center = ()=>{
    return (
    <><Container className="mt-4 custom-shadow">
            <Row className='top  align-items-center'>
                <Col md={4} className="text-center text-white fw-bold custom-text"><p>Our center</p></Col>
            </Row>
        </Container>
         <Container className="mt-3">
                <Card>
                    <Card.Body >
                        <p className="text-center fw-bold fs-5">At MASRA, we believe in the power of personalized learning and the importance of
                            fostering a love of discovery. We're a community of passionate educators and supportive families dedicated to empowering children to thrive in a nurturing environment. </p>
                    </Card.Body>
                </Card>
            </Container></> 
    )
}

export default Center;