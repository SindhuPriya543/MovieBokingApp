import React, { useState } from "react";
import { Container, Row, Col, Button, Form, Card } from "react-bootstrap";
import { useLocation, useNavigate } from "react-router-dom";
import MyDatePicker from "./MyDatePicker";

export const TicketBooking = () => {
  const location = useLocation();
  const { moviedata } = location.state; // Retrieving the passed movie data
  const nav = useNavigate();
  const timings = ["5:45 p.m.", "6:45 p.m.", "8:00 p.m.", "9:30 p.m."];

  const [selectedSeats, setSelectedSeats] = useState(1);
  const [selectedTime, setSelectedTime] = useState(""); // State for selected time
  const [selectedDate, setSelectedDate] = useState(new Date()); // State for selected date

  const handleSeatChange = (e) => {
    setSelectedSeats(e.target.value);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleDateChange = (date) => {
    setSelectedDate(date);
  };


  function NavToFinalBooking() {
    nav("/finalbooking", {
      state: {
        moviedata,
        selectedSeats,
        selectedTime,
        selectedDate
      },
    }); // Passing all necessary information
  }

  return (
    <Container className="pt-5">
      <h1 className="text-center mt-4">Ticket Booking for {moviedata.Title}</h1>
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
                  <h4>Select Date</h4>
                </Col>
                <Col md={6}>
                  <MyDatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
                </Col>
              </Row>
            </Card.Body>

            <Card.Body>
              <Row className="mb-3">
                <Col md={6}>
                  <h4>Choose Number Of Seats</h4>
                </Col>
                <Col md={6}>
                  <Form.Control as="select" value={selectedSeats} onChange={handleSeatChange}>
                    {[...Array(10).keys()].map((index) => (
                      <option key={index + 1} value={index + 1}>
                        {index + 1}
                      </option>
                    ))}
                  </Form.Control>
                </Col>
              </Row>
            </Card.Body>

            <Card.Body>
              <Row className="mb-3">
                <Col md={6}>
                  <h4>Available Show Timings</h4>
                </Col>
                <Col md={6}>
                  {timings.map((time, index) => (
                    <Button
                      variant={time === selectedTime ? "primary" : "outline-primary"}
                      className="m-2"
                      key={index}
                      onClick={() => handleTimeSelect(time)} // Set selected time
                    >
                      {time}
                    </Button>
                  ))}
                </Col>
              </Row>
            </Card.Body>
          </Card>

          <Row className="justify-content-center">
            <Button variant="success" size="lg" className="mt-3" onClick={NavToFinalBooking}>
              Book Now
            </Button>
          </Row>
        </Col>
      </Row>
    </Container>
  );
};