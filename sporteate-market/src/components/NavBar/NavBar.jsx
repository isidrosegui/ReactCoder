import React from 'react'
import { Navbar, Nav, Container, NavDropdown } from 'react-bootstrap'
import CartWidget from './CartWidget'

const NabBar = () => {
    return (
        <div>
           <Navbar bg="light" expand="lg" className='container'>
            <Container>
              <Navbar.Brand href="#home">SPORTEATE MARKET</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="me-auto">
                  <Nav.Link href="/">Home</Nav.Link>
                  <NavDropdown title="Deportistas" id="basic-nav-dropdown">
                    <NavDropdown.Item href="#action/3.1">Ofertas</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="/categoria/1">Indumentaria</NavDropdown.Item>
                    <NavDropdown.Item href="/categoria/2">Paletas/Raquetas</NavDropdown.Item>
                    <NavDropdown.Item href="#action/3.4">Otro</NavDropdown.Item>
                  </NavDropdown>
                </Nav>
              </Navbar.Collapse>
              <CartWidget/>    
            </Container> 
            
          </Navbar>
        </div>
    )
}

export default NabBar

