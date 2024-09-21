import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchFriendRequests, acceptFriendRequest, rejectFriendRequest } from '../../redux/friendActions';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

export const FriendRequests = () => {
    const dispatch = useDispatch();
    const nav = useNavigate();
    const { friendRequests } = useSelector((state) => state.friends);
    const { user } = useSelector((state) => state.auth);

    useEffect(() => {
        if (user) {
            dispatch(fetchFriendRequests(user.id));
        }
    }, [dispatch, user]);

    const handleAccept = (requestId) => {
        dispatch(acceptFriendRequest(requestId));
    };

    const handleReject = (requestId) => {
        dispatch(rejectFriendRequest(requestId));
    };

    const handleGoToUsers = () => {
        nav('/users'); // Navigate to UserList
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 className="text-center mb-4">Friend Requests</h2>
                    <Button
                        variant="secondary"
                        onClick={handleGoToUsers}
                        className="mb-4"
                    >
                        Find Users
                    </Button>
                    {friendRequests.map((request) => (
                        <Card key={request.id} className="mb-3 shadow">
                            <Card.Body>
                                <p><strong>{request.senderName}</strong></p>
                                {request.status === 'pending' ? (
                                    <>
                                        <p>Friend request is pending.</p>
                                        <Button variant="success" onClick={() => handleAccept(request.id)}>
                                            Accept
                                        </Button>
                                        <Button variant="danger" onClick={() => handleReject(request.id)} className="ml-2">
                                            Reject
                                        </Button>
                                    </>
                                ) : (
                                    <>
                                        <p>Friend request accepted.</p>
                                        <Button variant="danger" onClick={() => handleReject(request.id)} className="ml-2">
                                            Unfriend
                                        </Button>
                                    </>
                                )}
                            </Card.Body>
                        </Card>
                    ))}
                    {friendRequests.length === 0 && <p>No friend requests.</p>}
                </Col>
            </Row>
        </Container>
    );
};