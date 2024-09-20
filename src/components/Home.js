import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import MoviesImageSlider from "./MoviesImageSlider";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/home.css"; // Custom CSS if needed
import { useDispatch, useSelector } from 'react-redux';
import { fetchDataParallel1 } from '../redux/actions';


export const Home = () => {
  const nav = useNavigate();


  const dispatch = useDispatch();
  const { loading, dataA, dataB, error } = useSelector((state) => state.api);

  useEffect(() => {
    dispatch(fetchDataParallel1());
  }, [dispatch]);


  if (loading) return <p>Loading...</p>;
  if (error) {
    const parsedError = JSON.parse(error); // Parse error if needed
    return (
      <div>
        <p>Error: {parsedError.message}</p>
        <p>URL: {parsedError.url}</p>
        <p>Method: {parsedError.method}</p>
        <p>Status: {parsedError.status}</p>
        <p>Response: {JSON.stringify(parsedError.response, null, 2)}</p>
      </div>
    );
  }

  function navToLatestMovies() {
    nav("/movies");
  }

  function navToUpcomingMovies() {
    nav("/newmovies");
  }

  function navToNearByEvents() {
    nav("/events");
  }

  function navToMovieDetails(moviedata) {
    nav(`/moviedetails/${moviedata.Title}`, { state: { moviedata } });
  }



  return (
    <Container className="mt-4">
      {/* First Row for Latest Movies, Upcoming Movies, and Nearby Events */}
      <Row className="text-center mb-4">
        <Col md={4} >
          <Button
            className="w-100 p-4 bg-info text-white fw-bold btn-hover-effect"
            onClick={navToLatestMovies}
          >
            Latest Movies
          </Button>
        </Col>
        <Col md={4}>
          <Button
            className="w-100 p-4 bg-info text-white fw-bold btn-hover-effect"
            onClick={navToUpcomingMovies}
          >
            Upcoming Movies
          </Button>
        </Col>
        <Col md={4}>
          <Button
            className="w-100 p-4 bg-info text-white fw-bold btn-hover-effect"
            onClick={navToNearByEvents}
          >
            Nearby Events
          </Button>
        </Col>
      </Row>

      {/* Movies Image Slider */}


      <Row className="justify-content-center">
        <Col md={12}>
          {/* Full-width but only takes 30% height of the screen */}
          <MoviesImageSlider dataA={dataA} style={{ height: "30vh" }} />
        </Col>
      </Row>

      <hr className="my-4" />

      {/* Recommended Movies */}
      <Row className="mb-4">
        <Col>
          <h1 className="text-center">Recommended Movies</h1>
        </Col>
      </Row>

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