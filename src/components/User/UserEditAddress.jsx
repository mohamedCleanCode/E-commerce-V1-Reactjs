import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";

const UserEditAddress = () => {
  return (
    <div>
      <h1>Edit Address</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="type an address" />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="full address">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Form.Group className="my-3" controlId="formBasicEmail">
          <Form.Control type="text" placeholder="type a number" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserEditAddress;
