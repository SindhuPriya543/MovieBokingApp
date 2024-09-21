import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers } from '../../redux/userActions'; // Action to fetch users
import { sendFriendRequest } from '../../redux/friendActions';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

export const UserList = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.users);
    const { user } = useSelector((state) => state.auth); // Get logged-in user

    useEffect(() => {
        dispatch(fetchUsers()); // Fetch all users on component mount
    }, [dispatch]);

    const handleSendRequest = (recipientId, recipientName) => {
        const request = {
            senderId: user.id,
            recipientId,
            senderName: user.name,
            status: 'pending',
        };
        dispatch(sendFriendRequest(request));
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 className="text-center mb-4">Users</h2>
                    {users.map((u) => (
                        <Card key={u.id} className="mb-3 shadow">
                            <Card.Body>
                                <p><strong>{u.name}</strong></p>
                                <Button
                                    variant="primary"
                                    onClick={() => handleSendRequest(u.id, u.name)}
                                >
                                    Send Friend Request
                                </Button>
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};