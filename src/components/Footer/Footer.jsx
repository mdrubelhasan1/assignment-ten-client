import React from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = () => {
    return (
        <Container className=' bg-secondary text-white mt-5'>
            <div className='d-flex justify-content-between p-5'>
            <div>
                <Link className='text-white'><p>Contact us</p></Link>
                <p>Al-Aqsha-Avenue</p>
                <p>Kabul, Afganistan</p>
            </div>
            <div>
                <p>Follow Us</p>
                <p>Facebook</p>
                <p>Instragram</p>
            </div>
            <div>
                <h2>Stay connected!</h2>
                <p><small>Subscribe to receive our latest news!
                </small></p>
                <Form>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        
                        <Form.Control type="text" placeholder="Name" />
                        
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="email" placeholder="Email" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicCheckbox">
                       
                    </Form.Group>
                    <Button className='w-100' variant="warning" type="submit">
                        Submit
                    </Button>
                </Form>
            </div>
            </div>
            <p  className='text-info text-center p-4'><small>All right reserved</small></p>
        </Container>
    );
};

export default Footer;