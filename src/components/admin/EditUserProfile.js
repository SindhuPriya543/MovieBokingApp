// src/components/EditUserProfile.js
import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import { updateUser, fetchUser } from '../../redux/adminActions';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';

const EditUserProfile = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { userId } = useParams();
    const user = useSelector((state) => state.admin.users.find(u => u.id === userId));

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState(''); // Add password state

    useEffect(() => {
        if (user) {
            setName(user.name);
            setEmail(user.email);
            // Password is not set in state to avoid displaying it
        } else {
            dispatch(fetchUser(userId));
        }
    }, [dispatch, userId, user]);

    const handleSubmit = (e) => {
        e.preventDefault();

        // Create formData including password only if it's provided
        const formData = {
            id: userId,
            name,
            email,
            // Only include password if it is provided
            ...(password && { password })
        };

        dispatch(updateUser(formData)).then(() => {
            navigate('/admin/manage-users'); // Redirect after update
        });
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className="p-4 shadow">
                        <Card.Body>
                            <h2 className="text-center mb-4">Edit User Profile</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicName" className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        value={name}
                                        onChange={(e) => setName(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicEmail" className="mb-3">
                                    <Form.Label>Email</Form.Label>
                                    <Form.Control
                                        type="email"
                                        placeholder="Enter email"
                                        value={email}
                                        onChange={(e) => setEmail(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formBasicPassword" className="mb-3">
                                    <Form.Label>Password (leave blank to keep current)</Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter new password"
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Update Profile
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default EditUserProfile;