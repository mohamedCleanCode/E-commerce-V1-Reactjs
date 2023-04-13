import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useParams } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import useUserEditAddress from "../../hook/address/useUserEditAddress";

const UserEditAddress = () => {
  const { id } = useParams();
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
  ] = useUserEditAddress(id);
  return (
    <div>
      <h1>Edit Address</h1>
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

export default UserEditAddress;
