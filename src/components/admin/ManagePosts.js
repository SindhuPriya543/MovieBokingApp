// ManagePosts.js
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts, hidePost } from '../../redux/postActions';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';

const ManagePosts = () => {
    const dispatch = useDispatch();
    const { posts } = useSelector((state) => state.posts);

    useEffect(() => {
        dispatch(fetchPosts());
    }, [dispatch]);

    const handleHidePost = (postId) => {
        dispatch(hidePost(postId));
    };

    return (
        <Container className="mt-5">
            <Row>
                <Col md={{ span: 8, offset: 2 }}>
                    <h2 className="text-center mb-4">Manage Posts</h2>
                    {posts.map((post) => (
                        <Card key={post.id} className="mb-3 shadow">
                            <Card.Body>
                                <h5>{post.title}</h5>
                                <p>{post.content}</p>
                                {!post.isHidden ? (
                                    <Button variant="danger" onClick={() => handleHidePost(post.id)}>
                                        Hide Post
                                    </Button>
                                ) : (
                                    <p className="text-muted">This post is hidden</p>
                                )}
                            </Card.Body>
                        </Card>
                    ))}
                </Col>
            </Row>
        </Container>
    );
};

export default ManagePosts;