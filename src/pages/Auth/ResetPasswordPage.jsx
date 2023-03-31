import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import useResetPasswordPage from "../../hook/auth/useResetPasswordPage";

const ResetPasswordPage = () => {
  const [
    email,
    password,
    loading,
    onChangeEmail,
    onChangePassword,
    handleSubmit,
  ] = useResetPasswordPage();
  return (
    <div
      className="verify-password-page"
      style={{ height: "calc(100vh - 144px)" }}
    >
      <Container>
        <Form
          onSubmit={handleSubmit}
          style={{ width: "50%", margin: "20px auto", textAlign: "center" }}
        >
          <h1>Reset Password</h1>
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
              placeholder="Enter a new password"
              onChange={onChangePassword}
            />
          </Form.Group>
          <Button
            className="w-100"
            variant="dark"
            type="submit"
            disabled={loading}
          >
            Save
          </Button>
        </Form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default ResetPasswordPage;
