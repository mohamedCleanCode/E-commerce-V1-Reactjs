import React from "react";
import { Container, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIcon from "../../assets/images/cart.png";
import LoginIcon from "../../assets/images/login.png";
import Logo from "../../assets/images/logo.png";
import useNavBar from "../../hook/search/useNavBar";

const NavBar = () => {
  const [searchWord, onSearchInputChange] = useNavBar();
  let word = localStorage.getItem("searchWord");
  return (
    <Navbar
      bg="dark"
      expand="lg"
      className="sticky-top"
      style={{ minHeight: "76px" }}
    >
      <Container>
        <Link className="navbar-brand" to="/">
          <img
            src={Logo}
            alt="Logo"
            className="logo-img"
            style={{ width: "50px", height: "50px", objectFit: "contain" }}
          />
        </Link>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Form.Control
            className="w-100"
            type="search"
            placeholder="Search..."
            value={word}
            onChange={onSearchInputChange}
          />
          <Nav className="me-auto">
            <Link
              to="/login"
              className=" text-light nav-link"
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
            </Link>
            <Link
              to="/cart"
              className=" text-light nav-link"
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
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
