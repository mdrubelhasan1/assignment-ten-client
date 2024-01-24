import React, { useContext } from 'react';
import { Button, Container, Nav,  Navbar } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';
import './NavigationBar.css'

const NavigationBar = () => {

    const { user, logOut, googleSignIn, gitHubSignIn } = useContext(AuthContext)

    const handleGoogleSignIn = () => {
        googleSignIn()
            .then(result => {
                const user = result.user
                console.log(user)
            })
            .catch(error => {
                console.log(error)
            })
    }

    const handleGithubSignIn = () => {
        gitHubSignIn()
            .then(result=>{
                const user = result.user
                console.log(user)
            })
            .catch(error =>{
                console.log(error)
            })
    }

    const handleLogout = () => {
        logOut()
            .then()
            .catch(error => console.log(error))
    }

    return (
        <Navbar collapseOnSelect expand="lg" className="bg-body-tertiary sticky-md-top">
            <Container>
                <Navbar.Brand href="#home">Afganistani Famous Food</Navbar.Brand>
                <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                <Navbar.Collapse id="responsive-navbar-nav">
                    <Nav className="ms-auto gap-4 ">
                        <NavLink className='link-underline-light' to='/'>Home</NavLink>
                        <NavLink className='link-underline-light' to='/blog'>Blog</NavLink>
                        <NavLink className='mr-4 link-underline-light' to='/register'>Register</NavLink>


                        {user ?
                            <Button
                                onClick={handleLogout} variant="secondary">Logout
                            </Button> :
                            <div>
                                <Link to='/login'>
                                    <Button className='mr-4'  variant="secondary">Login</Button>
                                </Link>
                                <Button onClick={handleGoogleSignIn} variant="warning">SignIn With Google</Button> 
                                <Button onClick={handleGithubSignIn} variant="warning">SignIn With Github</Button>
                            </div>
                        }

                    </Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
    );
};

export default NavigationBar;