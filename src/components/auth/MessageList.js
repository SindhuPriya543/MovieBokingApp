import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchMessages } from '../../redux/messageActions';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";

export const MessageList = () => {
    const nav = useNavigate();
    const dispatch = useDispatch();
    const { messages } = useSelector((state) => state.messages);
    const { user } = useSelector((state) => state.auth); // Get user info

    const handleCreatePost = () => {
        nav('/post-message'); // Adjust the path to your post message route
    };

    useEffect(() => {
        dispatch(fetchMessages());
    }, [dispatch]);

    // Filter messages based on visibility
    const filteredMessages = messages.filter((message) => {
        if (message.isHidden) {
            // Show hidden messages only to the logged-in user
            return user && message.userId === user.id;
        }
        return true; // Show public messages to everyone
    });

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 className="text-center mb-4">Messages</h2>

                    <Button
                        variant="primary"
                        onClick={handleCreatePost}
                        className="mb-4"
                    >
                        Create a New Post
                    </Button>

                    {filteredMessages.length > 0 ? (
                        filteredMessages.map((message) => (
                            <Card key={message.id} className="mb-3 shadow">
                                <Card.Body>
                                    <p><strong>{message.userName}</strong> said:</p>
                                    <p>{message.content}</p>
                                    <small className="text-muted">
                                        {new Date(message.timestamp).toLocaleString()}
                                    </small>
                                </Card.Body>
                            </Card>
                        ))
                    ) : (
                        <p className="text-center">No messages to display.</p>
                    )}
                </Col>
            </Row>
        </Container>
    );
};