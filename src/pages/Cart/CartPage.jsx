import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import ProductCart from "../../components/Cart/ProductCart";

const CartPage = () => {
  return (
    <Container style={{ minHeight: "72vh" }}>
      <h1 className="my-2">Your Cart</h1>
      <Row>
        <Col xs="9">
          <ProductCart />
        </Col>
        <Col xs="3">weqrqwe</Col>
      </Row>
    </Container>
  );
};

export default CartPage;
