import React from 'react';
import { LinkContainer } from 'react-router-bootstrap';
import { Nav, Navbar } from 'react-bootstrap';

const Header = () => {
 return (
     <container>
         <Navbar bg="dark" expand="lg">
  <Navbar.Brand style={{ color: 'white' }}>Notes App</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <LinkContainer to='/'>
      <Nav.Link style={{ color: 'white' }}>Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/notes'>
      <Nav.Link style={{ color: 'white' }}>Notes</Nav.Link>
      </LinkContainer>
      <LinkContainer to='/create'>
      <Nav.Link style={{ color: 'white' }}>Create</Nav.Link>
      </LinkContainer>
     
     
    </Nav>
  </Navbar.Collapse>
</Navbar>
     </container>
 );
}

export default Header;
