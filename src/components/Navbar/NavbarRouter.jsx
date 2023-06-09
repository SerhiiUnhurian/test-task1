import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Route, Routes, Link } from 'react-router-dom';

function NavbarRouter () {
  return (
    <div>
          <Navbar bg="light" expand="lg">
               <Container>
               <Navbar.Brand as={Link} to={"/home"}>Educational site</Navbar.Brand>
               <Navbar.Toggle aria-controls="basic-navbar-nav" />
               <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="justify-content-end" style={{ width: "100%" }}>
                    <Nav.Link as={Link} to={"/home"}>Home</Nav.Link>
                    <Nav.Link as={Link} to={"/courses"}>Courses</Nav.Link>
                    <Nav.Link as={Link} to={"/about"}>About Us</Nav.Link>
                    <Nav.Link as={Link} to={"/contactUs"}>Contact Us</Nav.Link>
                    </Nav>
               </Navbar.Collapse>
               </Container>
          </Navbar>
    </div>
  )
}

export default NavbarRouter;