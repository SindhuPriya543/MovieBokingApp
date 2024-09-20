import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { registerUser } from '../../redux/authActions';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

export const Register = () => {
    const dispatch = useDispatch();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(registerUser(formData));
    };

    return (
        <Container className="d-flex justify-content-center align-items-center min-vh-100">
            <Row className="w-100">
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className="p-4 shadow">
                        <Card.Body>
                            <h2 className="text-center mb-4">Register</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicName" className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        size="lg"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicEmail" className="mb-3">
                                    <Form.Label>Email Address</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        size="lg"
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mb-4">
                                    <Form.Label>Password</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
                                        size="lg"
                                    />
                                </Form.Group>

                                <Button variant="primary" type="submit" className="w-100" size="lg">
                                    Register
                                </Button>
                            </Form>
                            <div className="mt-3 text-center">
                                <small>
                                    Already have an account? <a href="/login">Sign In</a>
                                </small>
                            </div>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};