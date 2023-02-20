import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";

const SignupPage = () => {
  return (
    <div className="signup-page" style={{ height: "calc(100vh - 144px)" }}>
      <Container>
        <Form
          style={{ width: "50%", margin: "20px auto", textAlign: "center" }}
        >
          <h1>Sign Up</h1>
          <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Control type="text" placeholder="Enter username" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control type="email" placeholder="Enter email" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control type="password" placeholder="Password" />
          </Form.Group>
          <Button className="w-100" variant="dark" type="submit">
            Signup
          </Button>
        </Form>
        <div className="info w-50 m-auto text-center">
          <p>
            Already have an account? <Link to="/login">Login</Link>
          </p>
        </div>
      </Container>
    </div>
  );
};

export default SignupPage;
