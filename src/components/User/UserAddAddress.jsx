import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import useUserAddAddress from "../../hook/address/useUserAddAddress";

const UserAddAddress = () => {
  const [
    alias,
    details,
    phone,
    city,
    postalCode,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
    onChangeCity,
    onChangePostalCode,
    handleSubmit,
  ] = useUserAddAddress();
  return (
    <div>
      <h1>Add A New Address</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group className="mb-3" controlId="formBasicAddress">
          <Form.Control
            type="text"
            placeholder="type an address"
            value={alias}
            onChange={onChangeAlias}
          />
        </Form.Group>
        <FloatingLabel controlId="floatingTextarea2" label="full address">
          <Form.Control
            as="textarea"
            placeholder="Leave a comment here"
            style={{ height: "100px" }}
            value={details}
            onChange={onChangeDetails}
          />
        </FloatingLabel>
        <Form.Group className="my-3" controlId="formBasicNumber">
          <Form.Control
            type="text"
            placeholder="type a number"
            value={phone}
            onChange={onChangePhone}
          />
        </Form.Group>
        <Form.Group className="my-3" controlId="formBasicCity">
          <Form.Control
            type="text"
            placeholder="type a city"
            value={city}
            onChange={onChangeCity}
          />
        </Form.Group>
        <Form.Group className="my-3" controlId="formBasicPostalCode">
          <Form.Control
            type="text"
            placeholder="type a postal code"
            value={postalCode}
            onChange={onChangePostalCode}
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Submit
        </Button>
      </Form>
      <ToastContainer />
    </div>
  );
};

export default UserAddAddress;
