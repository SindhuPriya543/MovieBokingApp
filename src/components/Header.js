// Navbar.js
import React from 'react';
import { Navbar, Nav, Form, FormControl, Button, Container } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.min.css';
import logo from "../images/ecube.jpeg";
import userLogo from "../images/user.png";
import userLogOut from "../images/logout-8-32.png";
import { logoutUser } from '../redux/authActions';

export const Header = () => {
  const dispatch = useDispatch();
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { user } = useSelector((state) => state.auth);

  const handleLogout = () => {
    dispatch(logoutUser());
  };

  return (
    <Navbar bg="light" expand="lg" sticky="top">
      <Container>
        <LinkContainer to="/">
          <Navbar.Brand >
            <img
              src={logo}
              alt="Logo"
              style={{ width: '150px', height: '50px' }}
            />
          </Navbar.Brand>
        </LinkContainer>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <LinkContainer to="/home">
              <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/movies">
              <Nav.Link>Movies</Nav.Link>
            </LinkContainer>

            <LinkContainer to="/events">
              <Nav.Link>Events</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/posts">
              <Nav.Link>Posts</Nav.Link>
            </LinkContainer>
            {isAuthenticated && (
              <>
                <LinkContainer to="/freinds">
                  <Nav.Link>Freinds</Nav.Link>
                </LinkContainer>
                <LinkContainer to="/profile">
                  <Nav.Link>User Profile</Nav.Link>
                </LinkContainer>
              </>
            )}
            {isAuthenticated && user && user.isAdmin && (
              <LinkContainer to="/admin/dashboard">
                <Nav.Link>Admin Dashboard</Nav.Link>
              </LinkContainer>
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