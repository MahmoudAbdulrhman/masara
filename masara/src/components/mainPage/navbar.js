import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import '../../CustomStyle.css';

function NavScroll() {
  return (

   
    <Navbar expand="lg" className="bg-body-tertiary shadow-sm" fixed="top">
      <Container>
        <Navbar.Brand as={Link} to="/" className='font-l'>Welcome to Masra!</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            variant='underline'
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >


            {/* About */}
            <NavDropdown title="About" id="aboutDropdown">
              <NavDropdown.Item as={Link} to="/about/Center">Center</NavDropdown.Item>
              <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Classes */}
            <NavDropdown title="Classes" id="classesDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Registration */}
            <NavDropdown title="Registration" id="registrationDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Events */}
            <NavDropdown title="Events" id="eventsDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Parents Portal */}
            <NavDropdown title="Parents Portal" id="parentsPortalDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Student Portal */}
            <NavDropdown title="Student Portal" id="studentPortalDropdown">
              <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
              <NavDropdown.Item href="#another-action">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#something-else">Something else here</NavDropdown.Item>
            </NavDropdown>

            {/* Newsletter */}
            <Nav.Link href="#newsletter">Newsletter</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
   
  );
}

export default NavScroll;
