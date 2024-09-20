import React, { useState, useEffect } from "react";
import { Button, Container, Row, Col, Spinner, Alert, Image } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataParallel1 } from '../redux/actions';

export const UpcomingMovies = () => {

  const nav = useNavigate();

  const dispatch = useDispatch();
  const { loading, dataA, dataB, error } = useSelector((state) => state);

  useEffect(() => {
    dispatch(fetchDataParallel1());
  }, [dispatch]);

  if (loading) {
    return (
      <div className="text-center mt-5">
        <Spinner animation="border" role="status">
          <span className="visually-hidden">Loading...</span>
        </Spinner>
      </div>
    );
  }

  if (error) {
    const parsedError = JSON.parse(error); // Parse error if needed
    return (
      <Container>
        <Alert variant="danger" className="mt-4">
          <Alert.Heading>Error: {parsedError.message}</Alert.Heading>
          <p>URL: {parsedError.url}</p>
          <p>Method: {parsedError.method}</p>
          <p>Status: {parsedError.status}</p>
          <p>Response: {JSON.stringify(parsedError.response, null, 2)}</p>
        </Alert>
      </Container>
    );
  }


  function navToMovieDetails(moviedata) {
    nav(`/moviedetails/${moviedata.Title}`, { state: { moviedata } });
  }

  return (
    <Container className="pt-5">
      <h1 className="text-center mt-4">Upcoming Movies</h1>
      <hr />

      <Row className="justify-content-center">
        {dataB && dataB.length > 0 ? (dataB.map((item, index) =>
          <Col key={index} md={3} className="text-center mb-4">
            <img
              src={item.Images}
              alt="Movie Image"
              className="w-100 h-auto mb-2"
            />
            <Button
              className="w-100 bg-success text-white"
              onClick={() => navToMovieDetails(item)}
            >
              View Details
            </Button>
          </Col>
        )) : (
          <p>No images found.</p>
        )}
      </Row>
    </Container>
  );
};