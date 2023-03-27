import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import useSignupPage from "../../hook/auth/useSignupPage";

const SignupPage = () => {
  const [
    name,
    email,
    phone,
    password,
    passwordConfirm,
    loading,
    onChangeName,
    onChangeEmail,
    onChangePhone,
    onChangePassword,
    onChangePasswordConfirm,
    handleSubmit,
  ] = useSignupPage();
  return (
    <div className="signup-page" style={{ height: "calc(100vh - 144px)" }}>
      <Container>
        <Form
          onSubmit={handleSubmit}
          style={{ width: "50%", margin: "20px auto", textAlign: "center" }}
        >
          <h1>Sign Up</h1>
          <Form.Group className="mb-3" controlId="formBasictext">
            <Form.Control
              required
              value={name}
              type="text"
              placeholder="Enter username"
              onChange={onChangeName}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              value={email}
              type="email"
              placeholder="Enter email"
              onChange={onChangeEmail}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicphone">
            <Form.Control
              required
              value={phone}
              type="number"
              placeholder="Enter phone"
              onChange={onChangePhone}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              required
              value={password}
              type="password"
              placeholder="Password"
              onChange={onChangePassword}
            />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPasswordConfirm">
            <Form.Control
              required
              value={passwordConfirm}
              type="password"
              placeholder="Confirm Password"
              onChange={onChangePasswordConfirm}
            />
          </Form.Group>
          <Button
            className="w-100"
            variant="dark"
            type="submit"
            disabled={loading}
          >
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
