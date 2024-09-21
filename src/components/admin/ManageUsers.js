import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchUsers, blockUser, unblockUser } from '../../redux/adminActions';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ManageUsers = () => {
    const dispatch = useDispatch();
    const { users } = useSelector((state) => state.admin);

    useEffect(() => {
        dispatch(fetchUsers());
    }, [dispatch]);

    const handleBlockUser = (userId) => {
        dispatch(blockUser(userId)).then(() => {
            dispatch(fetchUsers());
        });
    };

    const handleUnblockUser = (userId) => {
        dispatch(unblockUser(userId)).then(() => {
            dispatch(fetchUsers());
        });
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 className="text-center mb-4">Manage Users</h2>
                    {users.map((user) => (
                        <Card key={user.id} className="mb-3 shadow">
                            <Card.Body>
                                <p><strong>{user.name}</strong></p>
                                <p>{user.email}</p>
                                <Button variant="success" onClick={() => handleUnblockUser(user.id)}>
                                    Edit User Profile
                                </Button>
                                {user.isBlocked ? (
                                    <Button variant="success" onClick={() => handleUnblockUser(user.id)}>
                                        Unblock User
                                    </Button>
                                ) : (
                                    <Button variant="danger" onClick={() => handleBlockUser(user.id)}>
                                        Block User
                                    </Button>
                                )}
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default ManageUsers;