import React from 'react';
import { Col, Row, Card } from 'react-bootstrap';
import enroll from "../../assets/enroll.jpg"
import teach from '../../assets/teach.jpg';
import '../../CustomStyle.css'; // Import your custom CSS
import 'bootstrap/dist/css/bootstrap.min.css';

const HorizontalCardComponent = () => (
  <div className="container mt-5">
    {/* Introductory Card without Hover Effect */}
    <Card className='padding shadow'>
      <Card.Body className='lead'>
        <p className="fs-3 fs-md-2 fs-lg-3 p-3">
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
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              {/* test */}
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
                Some quick example text to build on the card title and make up the bulk of the card's content.
              </Card.Text>
              {/* test */}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </div>
  </div>
);

export default HorizontalCardComponent;
