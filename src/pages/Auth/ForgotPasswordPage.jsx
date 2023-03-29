import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import useForgotPasswordPage from "../../hook/auth/useForgotPasswordPage";

const ForgotPasswordPage = () => {
  const [email, loading, onChangeEmail, handleSubmit] = useForgotPasswordPage();
  return (
    <div
      className="forgot-password-page"
      style={{ height: "calc(100vh - 144px)" }}
    >
      <Container>
        <Form
          onSubmit={handleSubmit}
          style={{ width: "50%", margin: "20px auto", textAlign: "center" }}
        >
          <h1>Forgot Password</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              value={email}
              type="email"
              placeholder="Enter email"
              onChange={onChangeEmail}
            />
          </Form.Group>
          <Button
            className="w-100"
            variant="dark"
            type="submit"
            disabled={loading}
          >
            Send Code
          </Button>
        </Form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default ForgotPasswordPage;
