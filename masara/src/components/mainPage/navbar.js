import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import '../../CustomStyle.css'


function NavScroll() {
  return (
    <Container className='custom-shadow padding'>
      <Row className="justify-content-md-center">
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm "  fixed="top">
      <Container fluid>
        <Col xs={3} >
        {/* <img src='../images/logo.jpg' alt="logo" className='item'/> */}
        
        <Navbar.Brand href="#" className='font-l'>Welcome to Masra!</Navbar.Brand>
        </Col>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            
            variant='underline' 
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            {/* Nav Bar Container */}
           
            <Nav.Link href="#action1">Home</Nav.Link>
           

            {/* About */}
            <NavDropdown title="About" id="navbarScrollingDropdown" className="align-items-right">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {/* Classes */}
            <NavDropdown title="Classes" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
              </NavDropdown>
             
              {/* Registration */}
              <NavDropdown title="Registration" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

              {/* Events */}
              <NavDropdown title="Events" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {/* Parents Portal */}
            <NavDropdown title="Parents Portal" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {/* Student Portal */}
            <NavDropdown title="Student Portal" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action4">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
                Something else here
              </NavDropdown.Item>
            </NavDropdown>

            {/* Newalettre */}
            <Nav.Link href="#action1">Newsletter</Nav.Link>
  
          </Nav>
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </Row>
    </Container>
  );
}

export default NavScroll;