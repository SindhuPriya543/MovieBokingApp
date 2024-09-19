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

  const images = [
    "https://i.ytimg.com/vi/u2NuUWuwPCM/hq720.jpg?sqp=-oaymwEhCK4FEIIDSFryq4qpAxMIARUAAAAAGAElAADIQj0AgKJD&rs=AOn4CLAOCoIl_z_mh65aeD8irtoicup6-w",
    "https://m.media-amazon.com/images/S/pv-target-images/58e8a7988c6ba4b1979709adb606ca5b59a39eaf6fb02060bcdfef01ef1d8909.jpg",
    "https://i.ytimg.com/vi/Sz71FoG5z2g/maxresdefault.jpg",
    "https://prod-ripcut-delivery.disney-plus.net/v1/variant/disney/6EFE5D659E7C958E1177440F847E6CDAEBFD90F3162991ABE61FB584231DDAC1/scale?width=1200&aspectRatio=1.78&format=webp",
  ];

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
          <MoviesImageSlider images={images} style={{ height: "30vh" }} />
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