import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { postAdvertisement } from '../../redux/adminActions';
import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';

const PostAdvertisement = () => {
    const [content, setContent] = useState('');
    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(postAdvertisement(content));
        setContent('');
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 6, offset: 3 }}>
                    <Card className="p-4 shadow">
                        <Card.Body>
                            <h2 className="text-center mb-4">Post Advertisement</h2>
                            <Form onSubmit={handleSubmit}>
                                <Form.Group controlId="formContent" className="mb-3">
                                    <Form.Label>Advertisement Content</Form.Label>
                                    <Form.Control
                                        as="textarea"
                                        rows={3}
                                        placeholder="Write your ad here..."
                                        value={content}
                                        onChange={(e) => setContent(e.target.value)}
                                    />
                                </Form.Group>
                                <Button variant="primary" type="submit" className="w-100">
                                    Post Advertisement
                                </Button>
                            </Form>
                        </Card.Body>
                    </Card>
                </Col>
            </Row>
        </Container>
    );
};

export default PostAdvertisement;