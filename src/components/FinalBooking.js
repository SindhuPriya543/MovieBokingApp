import React from "react";
import { Container, Row, Col, Card, Image } from "react-bootstrap";
import { useLocation } from "react-router-dom";
import { QRCodeSVG } from "qrcode.react"; // Import QRCodeSVG

export const FinalBooking = () => {
  const location = useLocation();
  const { moviedata, selectedSeats, selectedTime, selectedDate } = location.state;
  console.log(selectedDate);
  // Create a string with the ticket information
  const ticketInfo = {
    movieName: moviedata.Title,
    date: selectedDate.toLocaleDateString(),
    time: selectedTime,
    seats: selectedSeats,
    location: "Bhubaneswar",
  };


  return (
    <Container className="mt-5">
      <h1 className="text-center mb-4">Your Ticket Booking Confirmation</h1>
      <hr />
      <Row className="my-5">
        <Col md={4} className="d-flex justify-content-center align-items-center">
          <img src={moviedata.Images} alt={moviedata.Title} style={{ height: "24rem" }} />
        </Col>
        <Col md={8}>
          <Card className="mb-3">
            <Card.Body>
              <Row className="mb-3">
                <Col md={6}>
                  <h4>Movie Name</h4>
                </Col>
                <Col md={6}>
                  <h4>{moviedata.Title}</h4>
                </Col>
              </Row>
            </Card.Body>

            <Card.Body>
              <Row className="mb-3">
                <Col md={6}>
                  <h4>Movie Date & Time</h4>
                </Col>
                <Col md={6}>
                  <h4>{selectedDate.toLocaleDateString()} at {selectedTime}</h4>
                </Col>
              </Row>
            </Card.Body>

            <Card.Body>
              <Row className="mb-3">
                <Col md={6}>
                  <h4>No of Seats</h4>
                </Col>
                <Col md={6}>
                  <h4>{selectedSeats}</h4>
                </Col>
              </Row>
            </Card.Body>
            <Card.Body>
              <Row className="mb-3">
                <Col md={6}>
                  <h4>Location</h4>
                </Col>
                <Col md={6}>
                  <h4>Bhubaneswar</h4>
                </Col>
              </Row>
            </Card.Body>
          </Card>
        </Col>
      </Row>

      <Card className="mb-4">
        <Row>

          <Col md={4} className="d-flex justify-content-center ">
            <QRCodeSVG value={ticketInfo} size={200} /> {/* Generate QR code */}
          </Col>
          <Col md={8} className="d-flex justify-content-center  align-items-center ">
            <h2>Scan QR for Movie Details</h2>
          </Col>
        </Row>
      </Card>
    </Container>
  );
};