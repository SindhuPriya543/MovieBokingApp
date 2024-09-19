import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import MoviesImageSlider from "./MoviesImageSlider";
import { Container, Row, Col, Button } from "react-bootstrap";
import "../css/home.css"; // Custom CSS if needed

export const Home = () => {
  const nav = useNavigate();
  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://gist.githubusercontent.com/saniyusuf/406b843afdfb9c6a86e25753fe2761f4/raw/523c324c7fcc36efab8224f9ebb7556c09b69a14/Film.JSON"
      )
      .then((response) => setData(response.data));
  }, []);

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
          <MoviesImageSlider style={{ height: "30vh" }} />
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
        {data.slice(1, 5).map((item, index) => (
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
              Book
            </Button>
          </Col>
        ))}
      </Row>
    </Container>
  );
};