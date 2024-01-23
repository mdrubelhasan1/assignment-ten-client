import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';

const NavigationBar = () => {

    const { user, logOut } = useContext(AuthContext)

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary">
            <Container>
                <Navbar.Brand href="#home">Afganistani Famous Food</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-4">
                        <Link to='/'>Home</Link>
                        <Link to='/blog'>Blog</Link>
                        <Link className='mr-4' to='/register'>Register</Link>
                        <Link to='/'> chef</Link>
                        
                        {user ?
                            <Button
                                onClick={handleLogout} variant="secondary">Logout
                            </Button> :
                            <Link to='/login'>
                                <Button variant="secondary">Login</Button>
                            </Link>}

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;