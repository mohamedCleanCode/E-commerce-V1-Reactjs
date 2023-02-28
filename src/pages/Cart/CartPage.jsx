import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartCheckOut from "../../components/Cart/CartCheckOut";
import ProductCart from "../../components/Cart/ProductCart";

const CartPage = () => {
  return (
    <Container style={{ minHeight: "72vh" }}>
      <h1 className="my-2">Your Cart</h1>
      <Row>
        <Col xs="12" sm="8" lg="9">
          <ProductCart />
        </Col>
        <Col xs="12" sm="4" lg="3">
          <CartCheckOut />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
