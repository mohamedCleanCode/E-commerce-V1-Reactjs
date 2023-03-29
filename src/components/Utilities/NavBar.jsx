import React, { useEffect, useState } from "react";
import { Container, Dropdown, Form, Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import CartIcon from "../../assets/images/cart.png";
import LoginIcon from "../../assets/images/login.png";
import Logo from "../../assets/images/logo.png";
import useNavBar from "../../hook/search/useNavBar";

const NavBar = () => {
  const [searchWord, onSearchInputChange] = useNavBar();
  let word = localStorage.getItem("searchWord");
  const [user, setUser] = useState("");
  const logOut = (e) => {
    e.preventDefault();
    localStorage.removeItem("user");
  };
  // const dispatch = useDispatch();
  // const auth = useSelector((state) => state.auth);
  useEffect(() => {
    // dispatch(getLoggedUser());
    setUser(JSON.parse(localStorage.getItem("user")));
  }, []);
  // console.log(auth);
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
            {user ? (
              <Dropdown>
                <Dropdown.Toggle variant="success" id="dropdown-basic">
                  {user.name}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Link to="/user/profile" className="dropdown-item">
                    Profile
                  </Link>
                  <div className="dropdown-item" onClick={logOut}>
                    Log out
                  </div>
                </Dropdown.Menu>
              </Dropdown>
            ) : (
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
            )}
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
