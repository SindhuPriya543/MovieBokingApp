// Navbar.js
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/logo.jpeg";
import userLogo from "../images/user.png";
import userLogOut from "../images/logout-8-32.png";
import { logoutUser } from '../redux/authActions';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

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
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/events">Events</Nav.Link>
            <Nav.Link href="/posts">Posts</Nav.Link>
            {isAuthenticated && (
              <>
                <Nav.Link href="/freinds">Freinds</Nav.Link>
                <Nav.Link href="/profile">Profile</Nav.Link>
              </>
            )}
          </Nav>
          <Form inline className="d-flex ms-auto">
            <FormControl type="text" placeholder="Search" className="me-2" />
            <Button variant="outline-success">Search</Button>
          </Form>

          {!isAuthenticated ? (
            <Nav>
              <Nav.Link href="/login">
                <img
                  src={userLogo}
                  alt="Login"
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                />
              </Nav.Link>
            </Nav>) : (
            <Nav>
              <Nav.Link onClick={handleLogout}>
                <img
                  src={userLogOut}
                  alt="Logout"
                  style={{ width: '30px', height: '30px', borderRadius: '50%' }}
                />
              </Nav.Link>
            </Nav>
          )}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};