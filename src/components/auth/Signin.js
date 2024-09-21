import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../../redux/authActions';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const SignIn = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    // State to handle success message
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(loginUser({ email, password }))
            .then((response) => {
                if (response && response.type === 'LOGIN_SUCCESS') {
                    // Clear any existing messages
                    setMessage('');
                } else {
                    // Show error message on login failure
                    setMessage('Invalid credentials. Please try again.');
                }
            })
            .catch(() => {
                // In case of other errors
                setMessage('An error occurred. Please try again.');
            });

        // Clear the message after 3 seconds
        setTimeout(() => setMessage(''), 3000);
    };

    // Redirect to home if logged in
    useEffect(() => {
        if (isAuthenticated) {
            navigate('/home');
        }
    }, [isAuthenticated, navigate]);

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className="p-4 shadow">
                        <Card.Body>
                            <h2 className="text-center mb-4">Sign In</h2>
                            {message && (
                                <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
                                    {message}
                                </div>
                            )}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicEmail" className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                        size="lg"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        size="lg"
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100" size="lg">
                                    Sign In
                                </Button>
                            </Form>
                            <div className="mt-3 text-center">
                                <small>
                                    Don't have an account? <a href="/register">Sign up</a>
                                </small>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};