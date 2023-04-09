import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import useUserAddAddress from "../../hook/address/useUserAddAddress";

const UserAddAddress = () => {
  const [] = useUserAddAddress();
  return (
    <div>
      <h1>Add A New Address</h1>
      <Form>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Control type="text" placeholder="type an address" />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="full address">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
          />
        </FloatingLabel>
        <Form.Group className="my-3" controlId="formBasicNumber">
          <Form.Control type="text" placeholder="type a number" />
        </Form.Group>
        <Form.Group className="my-3" controlId="formBasicCity">
          <Form.Control type="text" placeholder="type a city" />
        </Form.Group>
        <Form.Group className="my-3" controlId="formBasicPostalCode">
          <Form.Control type="text" placeholder="type a postal code" />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
};

export default UserAddAddress;
