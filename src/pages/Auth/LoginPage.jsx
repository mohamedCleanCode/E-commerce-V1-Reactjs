import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useLoginPage from "../../hook/auth/useLoginPage";

const LoginPage = () => {
  const [
    email,
    password,
    onChangeEmail,
    onChangePassword,
    loading,
    handleSubmit,
  ] = useLoginPage();
  return (
    <div className="login-page" style={{ height: "calc(100vh - 144px)" }}>
      <Container>
        <Form
          onSubmit={handleSubmit}
          style={{ width: "50%", margin: "20px auto", textAlign: "center" }}
        >
          <h1>Log In</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              value={email}
              type="email"
              placeholder="Enter email"
              onChange={onChangeEmail}
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
          <Button
            className="w-100"
            variant="dark"
            type="submit"
            disabled={loading}
          >
            Login
          </Button>
        </Form>
        <div className="info w-50 m-auto text-center">
          <p>
            <Link to="/user/forgot-password">Forgot Password?</Link>
          </p>
          <p>
            Have'nt an account? <Link to="/signup">Sign Up</Link>
          </p>
        </div>
      </Container>
      <Link to="/admin/orders-managment">login with admin</Link>
      <Link to="/user/orders-managment">login with admin</Link>
      <ToastContainer />
    </div>
  );
};

export default LoginPage;
