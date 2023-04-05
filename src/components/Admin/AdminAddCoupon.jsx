import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";

const AdminAddCoupon = () => {
  const handleSubmit = () => {};
  return (
    <Col xs="12">
      <h1>Add A New Coupon</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId="formBasicName">
          <Form.Control
            type="text"
            className="admin-add-brand-name"
            placeholder="Coupon name"
          />
        </Form.Group>
        <Form.Group controlId="formBasicDate">
          <Form.Control
            type="date"
            className="admin-add-brand-name"
            placeholder="Date expire"
          />
        </Form.Group>
        <Form.Group controlId="formBasicDiscount">
          <Form.Control
            type="number"
            className="admin-add-brand-name"
            placeholder="Discount"
          />
        </Form.Group>
        <Button variant="dark" type="submit">
          Save
        </Button>
      </Form>
      <ToastContainer />
    </Col>
  );
};

export default AdminAddCoupon;
