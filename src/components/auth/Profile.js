import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Form, Button, Container, Row, Col, Card } from 'react-bootstrap';
import { getUserProfile, updateUserProfile } from '../../redux/profileActions';

export const Profile = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const { profile } = useSelector((state) => state.profile);

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        password: '',
    });

    // State to handle success message
    const [message, setMessage] = useState('');
    // Populate the form with user profile data
    useEffect(() => {
        if (user) {
            dispatch(getUserProfile(user.id));
        }
    }, [dispatch, user]);

    useEffect(() => {
        if (profile) {
            setFormData({
                name: profile.name || '',
                email: profile.email || '',
                password: '', // Password remains empty unless user changes it
            });
        }
    }, [profile]);

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateUserProfile(user.id, formData))
            .then(() => {
                // Set success message on successful update
                setMessage('Profile updated successfully!');
            })
            .catch(() => {
                // Set error message if needed
                setMessage('Failed to update profile.');
            });

        // Clear the message after 3 seconds
        setTimeout(() => setMessage(''), 3000);
    };


    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className="p-4 shadow">
                        <Card.Body>
                            <h2 className="text-center mb-4">User Profile</h2>
                            {message && (
                                <div className={`alert ${message.includes('successfully') ? 'alert-success' : 'alert-danger'}`} role="alert">
                                    {message}
                                </div>
                            )}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formBasicName" className="mb-3">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control
                                        type="text"
                                        placeholder="Enter name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
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
                                    />
                                </Form.Group>

                                <Form.Group controlId="formBasicPassword" className="mb-3">
                                    <Form.Label>New Password </Form.Label>
                                    <Form.Control
                                        type="password"
                                        placeholder="Enter new password"
                                        name="password"
                                        value={formData.password}
                                        onChange={handleChange}
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