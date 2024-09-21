import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { postMessage } from '../../redux/messageActions';
import { Form, Button, Container, Row, Col, Card, Alert } from 'react-bootstrap';

export const PostMessage = () => {
    const dispatch = useDispatch();
    const { user } = useSelector((state) => state.auth);
    const [message, setMessage] = useState('');
    const [notification, setNotification] = useState('');
    const [isHidden, setIsHidden] = useState(false); // State for visibility

    const handleSubmit = (e) => {
        e.preventDefault();
        if (user) {
            const newMessage = {
                userId: user.id,
                userName: user.name,
                content: message,
                timestamp: new Date().toISOString(),
                isHidden, // Include visibility status
            };
            dispatch(postMessage(newMessage));
            setMessage(''); // Reset the message input field after posting
            setNotification('Message posted successfully!'); // Set notification
            setTimeout(() => {
                setNotification(''); // Clear notification after 3 seconds
            }, 3000);
        }
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className="p-4 shadow">
                        <Card.Body>
                            <h2 className="text-center mb-4">Post a Message</h2>
                            {notification && <Alert variant="success">{notification}</Alert>} {/* Notification */}
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formMessage" className="mb-3">
                                    <Form.Label>Message</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Write your message here..."
                                        value={message}
                                        onChange={(e) => setMessage(e.target.value)}
                                    />
                                </Form.Group>
                                <Form.Group controlId="formHidePost" className="mb-3">
                                    <Form.Check
                                        type="checkbox"
                                        label="Hide this post"
                                        checked={isHidden}
                                        onChange={(e) => setIsHidden(e.target.checked)}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Post Message
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};