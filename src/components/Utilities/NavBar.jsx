import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import CartIcon from "../../assets/images/cart.png";
import LoginIcon from "../../assets/images/login.png";
import Logo from "../../assets/images/logo.png";

const NavBar = () => {
  return (
    <Navbar
      bg="dark"
      expand="lg"
      className="sticky-top"
      style={{ minHeight: "76px" }}
    >
      <Container>
        <a className="navbar-brand" href="/">
          <img
            src={Logo}
            alt="Logo"
            className="logo-img"
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />
        </a>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form.Control
            className="w-100"
            type="search"
            placeholder="Search..."
          />
          <Nav className="me-auto">
            <Nav.Link
              href="#link"
              className=" text-light"
              style={{ width: "100px" }}
            >
              Login
              <img
                src={LoginIcon}
                alt="LoginIcon"
                style={{
                  width: "20px",
                  height: "20px",
                  marginLeft: "10px",
                }}
              />
            </Nav.Link>
            <Nav.Link
              href="#link"
              className=" text-light"
              style={{ width: "100px" }}
            >
              Cart
              <img
                src={CartIcon}
                alt="CartIcon"
                style={{
                  width: "20px",
                  height: "20px",
                  marginLeft: "10px",
                }}
              />
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
