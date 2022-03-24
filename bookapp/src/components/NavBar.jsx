import {Nav, NavDropdown, Form, FormControl,Navbar, Button} from "react-bootstrap";
import {Link} from 'react-router-dom'

const NavBar =()=> (
  <>
 <Navbar bg="light" expand="lg">
  <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
  <Navbar.Toggle aria-controls="navbarScroll" />
  <Navbar.Collapse id="navbarScroll">
    <Nav
      className="mr-auto my-2 my-lg-0"
      style={{ maxHeight: '100px' }}
      navbarScroll
    >
       <Link to="/">Home</Link>
     <Link to="/registration">Registration</Link>
  
    </Nav>
    <Form className="d-flex">
      <FormControl
        type="search"
        placeholder="Search"
        className="mr-2"
        aria-label="Search"
      />
      <Button variant="outline-success">Search</Button>
    </Form>
  </Navbar.Collapse>
</Navbar>
  </>
)

export default NavBar