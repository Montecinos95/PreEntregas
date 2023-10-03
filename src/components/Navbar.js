import React, { useState } from 'react';
import CartWidget from './CartWidget';
import { Navbar, Nav, Container } from 'react-bootstrap';
import { Link } from 'react-router-dom'; // Importa Link

function AppNavbar() {
  const [expanded, setExpanded] = useState(false);

  const toggleNavbar = () => {
    setExpanded(!expanded);
  };

  return (
    <Navbar
      expand="lg"
      bg="dark"
      variant="dark"
      expanded={expanded}
      onToggle={toggleNavbar}
    >
      <Container>
        <Navbar.Brand >Logo</Navbar.Brand> {/* Usa Link para la marca */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <CartWidget />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ml-auto">
            <Nav.Link >Home</Nav.Link> {/* Usa Link para los enlaces */}
            <Nav.Link >About</Nav.Link> {/* Por ejemplo, '/about' */}
            <Nav.Link >iPhone</Nav.Link> {/* '/iphone' */}
            <Nav.Link >Mac</Nav.Link> {/* '/mac' */}
            <Nav.Link >Accessories</Nav.Link> {/* '/accessories' */}
            <Nav.Link >Contact</Nav.Link> {/* '/contact' */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default AppNavbar;
