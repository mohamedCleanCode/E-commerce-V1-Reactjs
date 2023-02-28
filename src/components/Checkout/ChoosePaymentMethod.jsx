import React from "react";
import { Col, Form, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const ChoosePaymentMethod = () => {
  return (
    <div className="choose-payment-method">
      <h1 className="my-2">Choose Payment Method</h1>
      <Row className="my-2">
        <Col sm="12">
          <Form className="bg-white p-3 rounded">
            <Form.Check
              className="mb-5"
              name="payment-mathod"
              type="radio"
              id="radio-1"
              label="Payment by card"
            />
            <Form.Check
              name="payment-mathod"
              type="radio"
              id="radio-2"
              label="Payment by Cash"
            />
          </Form>
        </Col>
      </Row>
      <Row>
        <Col sm="12">
          <div className="cart-check-out-total bg-white">$335000</div>
          <Link
            to="/order/payment-method"
            className="btn bg-dark text-white w-100"
          >
            Checkout
          </Link>
        </Col>
      </Row>
    </div>
  );
};

export default ChoosePaymentMethod;
