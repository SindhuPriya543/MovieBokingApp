import React from "react";
import { Container, Row, Col, Button, Image, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";

export const MovieDetails = () => {
  const location = useLocation();
  const { moviedata } = location.state;
  const nav = useNavigate();


  function NavToTicketBooking(moviedata) {
    nav(`/ticketbooking/${moviedata.Title}`, { state: { moviedata } });
  }

  return (
    <Container className="pt-5">
      <h1 className="text-center mt-4">Movie Details</h1>
      <hr />
      <Row className="my-5">
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <Image src={moviedata.Images} fluid style={{ height: "24rem" }} />
        </Col>
        <Col md={8}>

          <Card className="mb-3">

            <Card.Body >
              <Row >
                <Col md={6}>
                  <h3>Movie Name:</h3>
                </Col>
                <Col md={6}>
                  <h3>{moviedata.Title}</h3>
                </Col>
              </Row>
            </Card.Body>
          </Card>
          <Card className="mb-3">
            <Card.Body>
              <Row >
                <Col md={6}>
                  <h3>Released:</h3>
                </Col>
                <Col md={6}>
                  <h3>{moviedata.Released}</h3>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body>
              <Row >
                <Col md={6}>
                  <h3>Duration:</h3>
                </Col>
                <Col md={6}>
                  <h3>{moviedata.Runtime}</h3>
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Card className="mb-3">
            <Card.Body >
              <Row >
                <Col md={6}>
                  <h3>Rating:</h3>
                </Col>
                <Col md={6}>
                  <h3>{moviedata.imdbRating}</h3>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>


      </Row >

      <Row className="justify-content-center">
        <Button variant="primary" size="lg" className="mt-3" onClick={() => NavToTicketBooking(moviedata)}>
          Book Now
        </Button>
      </Row>
    </Container >
  );
};