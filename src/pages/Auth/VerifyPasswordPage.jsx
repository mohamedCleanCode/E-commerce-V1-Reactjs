import React from "react";
import { Button, Container, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import useVerifyPasswordPage from "../../hook/auth/useVerifyPasswordPage";

const VerifyPasswordPage = () => {
  const [code, loading, onChangeCode, handleSubmit] = useVerifyPasswordPage();
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
          <h1>Type Code From Inbox</h1>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Control
              required
              value={code}
              type="text"
              placeholder="Enter code"
              onChange={onChangeCode}
            />
          </Form.Group>
          <Button
            className="w-100"
            variant="dark"
            type="submit"
            disabled={loading}
          >
            Submit
          </Button>
        </Form>
      </Container>
      <ToastContainer />
    </div>
  );
};

export default VerifyPasswordPage;
