import React from 'react';
import { Navbar, Nav, Container, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './NavigationBar.css'; // Import custom CSS for further styling

const NavigationBar = () => {
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        {/* Navbar Brand / Logo */}
        <Navbar.Brand as={Link} to="/">
          <strong>
          Digi-Flex
          </strong>
        </Navbar.Brand>

        {/* Hamburger Toggle */}
        <Navbar.Toggle aria-controls="basic-navbar-nav" />

        {/* Collapsible Navbar Links */}
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link as={Link} to="/" activeClassName="active-link"><strong>Home</strong></Nav.Link>
            <Nav.Link as={Link} to="/Shop" activeClassName="active-link"><strong>Shop</strong></Nav.Link>
            <Nav.Link as={Link} to="/Contact" activeClassName="active-link"><strong>Contact Us</strong></Nav.Link>
            
            {/* Dropdown Example */}
            
          </Nav>

          {/* Search Bar */}
         
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavigationBar;
