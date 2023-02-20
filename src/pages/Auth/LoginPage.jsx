import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const LoginPage = () => {
  return (
    <div className="login-page" style={{ height: "650px" }}>
      <Container>
        <Form
          style={{ width: "50%", margin: "20px auto", textAlign: "center" }}
        >
          <h1>Log In</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="w-100" variant="dark" type="submit">
            Login
          </Button>
        </Form>
        <div className="info w-50 m-auto text-center">
          <p>
            Have'nt an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default LoginPage;
