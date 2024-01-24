import React, { useContext, useState } from 'react';
import { Button, Container, Form } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AuthContext } from '../providers/AuthProviders';


const Register = () => {

    const { createUser } = useContext(AuthContext);
    const [accepted, setAccepted] = useState(false);
    const [error, setError] = useState('');
    const [success, setSuccess] = useState('');

    const handleRegister = (event) => {
        event.preventDefault();
        setSuccess(''); 
        setError('');
        const form = event.target;

        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;

        // validate password
        if (!/(?=.*[A-Z])/.test(password)) {
            setError('Please add at least one uppercase')
            return;
        }
        else if (!/(?=.*[0-9])/.test(password)) {
            setError('Please add at least two numbers')
            return;
        }
        else if (!/(?=.*[!#$%&? "])/.test(password)) {
            setError('Please add a special character')
            return;
        }
        else if (password.length < 6) {
            setError('Please add at least 6 characters in your password')
            return
        }

        createUser(email, password)
            .then(result => {
                const createdUser = result.user;
                console.log(createdUser);
                setSuccess('User has been created successfully')
            })
            .catch(error => {
                console.log(error);
            })
        form.reset();


    }

    const handleAccepted = (event) => {
        setAccepted(event.target.checked);
    }

    return (
        <Container className='w-50 mx-auto'>
            <h3 className='text-primary'>Please Register</h3>
            <Form onSubmit={handleRegister}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Name</Form.Label>
                    <Form.Control type="text" name='name' placeholder="Enter name" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Photo Url</Form.Label>
                    <Form.Control type="text" name='photo' placeholder="photo url" required />

                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" name='email' placeholder="Enter email" required />

                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" name='password' placeholder="Password" required />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                    <Form.Check
                        onClick={handleAccepted}
                        type="checkbox"
                        name='accept'
                        label={<>Accept <Link to='/terms'>Terms and conditions</Link></>} />
                </Form.Group>

                <Button variant="primary" disabled={!accepted} type="submit">
                    Register
                </Button>
                <br />
                <Form.Text className="">
                    Already have an account? <Link to='/login'>Login</Link>
                </Form.Text>

                <Form.Text className="text-danger">

                </Form.Text>
                <Form.Text className="text-success">

                </Form.Text>
            </Form>
            <p className='text-danger'>{error}</p>
            <p className='text-success'>{success}</p>
        </Container>
    );
};

export default Register;