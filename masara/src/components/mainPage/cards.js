
import enroll from '../../assets/enroll.jpg'
import hiring from '../../assets/hiring.webp'
import teach from '../../assets/teach.jpg'
import '../../CustomStyle.css'; // Optional: for custom CSS
// src/HorizontalCardComponent.js
import React from 'react';
import { Card, Button } from 'react-bootstrap';

const HorizontalCardComponent = () => (
  <div className="container mt-5 ">
    <Card className='padding shadow'>
      <Card.Body className='lead'>
       <p className="fs-3 fs-md-2 fs-lg-3 p-3"> At MASRA, we believe in the power of personalized learning and the
         importance of fostering a love of discovery.
          We're a community of passionate educators and 
          supportive families dedicated to empowering children to 
          thrive in a nurturing environment.</p>
      </Card.Body>
    </Card>

    <div className="row">
      {/* Card 1 */}
      <div className="col-md-12 mb-4">
        <Card className="d-flex flex-row padding shadow">
          <Card.Img
            variant="top"
            className='padding '
            src={enroll}
            style={{ width: '150px', height: 'auto' }} />
          <Card.Body>
            <Card.Title>Enrollment</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>

      {/* Card 2 */}
      <div className="col-md-12 mb-4">
        <Card className="d-flex flex-row padding shadow">

          <Card.Body>
            <Card.Title>Career</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
          <Card.Img
          className='padding'
            variant="top"
            src={hiring}
            style={{ width: '150px', height: 'auto' }} />
        </Card>
      </div>

      {/* Card 3 */}
      <div className="col-md-12 mb-4">
        <Card className="d-flex flex-row padding shadow">
          <Card.Img
          className='padding'
            variant="top"
            src={teach}
            style={{ width: '150px', height: 'auto' }} />
          <Card.Body>
            <Card.Title>Teacher Interest Form</Card.Title>
            <Card.Text>
              Some quick example text to build on the card title and make up the bulk of the card's content.
            </Card.Text>
            <Button variant="primary">Go somewhere</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  </div>
);

export default HorizontalCardComponent;


