import React from 'react';
import { Container, Row, Col, Button } from 'react-bootstrap';
import { useNavigate } from 'react-router-dom';

const AdminDashboard = () => {
    const navigate = useNavigate();

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 className="text-center mb-4">Admin Dashboard</h2>
                    <Button variant="danger" className="w-100 mb-3" onClick={() => navigate('/admin/manage-users')}>
                        Manage Users
                    </Button>
                    <Button variant="primary" className="w-100 mb-3" onClick={() => navigate('/admin/post-ad')}>
                        Post Advertisement
                    </Button>
                    <Button variant="secondary" className="w-100 mb-3" onClick={() => navigate('/admin/manage-users')}>
                        Manage Profile Details
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AdminDashboard;