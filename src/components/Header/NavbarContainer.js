import React from "react";
import {Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import CartWidget from "../Cart/CartWidget";

export default function NavbarContainer() {
  return (
    <div>
     <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">VHS Horror Films</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Inicio</Nav.Link>
      <Nav.Link href="#pricing">Contacto</Nav.Link>
      <NavDropdown title="Categorias" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Gore</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Slasher</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Anime</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
    <CartWidget />
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
    </div>
  );
}
