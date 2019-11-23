import React from 'react';
import Button from "../components/Button";
import '../App.css';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import NavDropdown from 'react-bootstrap/NavDropdown';
//import Form from 'react-bootstrap/Form';
// import FormControl from 'react-bootstrap/FormControl';

function NavBar() {
    return (
<Navbar bg="dark" className="text-white" expand="lg">
  <Navbar.Brand href="/">Mental Float</Navbar.Brand>
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav className="mr-auto">
      <NavDropdown title="Methods" id="basic-nav-dropdown">
        <NavDropdown.Item href="/sleep">Sleep</NavDropdown.Item>
        <NavDropdown.Item href="/motivation">Motivation</NavDropdown.Item>
        <NavDropdown.Item href="/meditate">Meditate</NavDropdown.Item>
        <NavDropdown.Item href="/therapy">Therapy</NavDropdown.Item>
      </NavDropdown>
    </Nav>
   
  </Navbar.Collapse>
</Navbar>
    )
}


export default NavBar