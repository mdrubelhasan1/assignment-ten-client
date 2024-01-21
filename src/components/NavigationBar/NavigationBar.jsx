import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const NavigationBar = () => {
    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Afganistani Famous Food</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-4">
                        <Link to='/'>Home</Link>
                        <Link to='/blog'>Blog</Link>
                        
                        
                    </Nav>
                   
                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;