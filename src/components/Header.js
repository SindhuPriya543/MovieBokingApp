// Navbar.js
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.jpeg";
import userLogo from "../images/user.png"; // Ensure you have the correct path

export const Header = () => {
  // const nav = useNavigate();
  // function navToLatestMovies() {
  //   nav("/latestmovies");
  // }

  // function navToUpcomingMovies() {
  //   nav("/upcomingmovies");
  // }

  // function navToNearByEvents() {
  //   nav("/nearbyevents");
  // }
  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <Navbar.Brand href="#home">
          <img
            src={logo}
            alt="Logo"
            style={{ width: '150px', height: '50px' }}
          />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="movies">Movies</Nav.Link>
            <Nav.Link href="events">Events</Nav.Link>
            <Nav.Link href="#section4">Contact</Nav.Link>
          </Nav>
          <Form inline className="d-flex ms-auto">
            <FormControl type="text" placeholder="Search" className="me-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
          <Nav>
            <Nav.Link href="#user-profile">
              <img
                src={userLogo}
                alt="User"
                style={{ width: '30px', height: '30px', borderRadius: '50%' }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};