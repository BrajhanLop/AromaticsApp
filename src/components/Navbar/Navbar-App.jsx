import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from '../../images/logo.png'

import '../styles/navbar.css'

const NavbarApp = () => {
    return (
        <Navbar className='containerNav' expand="lg">
        <Container className='' >
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Brand className='logoNav ' href="/"><img src={logo} alt="Aromaticas" /></Navbar.Brand>
          <Navbar.Collapse id="basic-navbar-nav" className='navItem '>
            <Nav className="me-5">
              <Nav.Link className='item' href="/">HOME</Nav.Link>           
              <Nav.Link className='item' href="/plantas">PLANTAS</Nav.Link>
              <Nav.Link className='item' href="/contacto">CONTACTO</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    );
}

export default NavbarApp;
