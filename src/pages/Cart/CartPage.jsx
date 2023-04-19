import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartCheckOut from "../../components/Cart/CartCheckOut";
import ProductCart from "../../components/Cart/ProductCart";
import useCartPage from "../../hook/cart/useCartPage";

const CartPage = () => {
  const [cart] = useCartPage();
  return (
    <Container style={{ minHeight: "72vh" }}>
      <h1 className="my-2">Your Cart</h1>
      <Row>
        <Col xs="12" sm="8" lg="9">
          {cart?.items?.products ? (
            cart?.items?.products.map((product) => {
              return <ProductCart key={product?._id} product={product} />;
            })
          ) : (
            <p>there are not cart</p>
          )}
        </Col>
        <Col xs="12" sm="4" lg="3">
          <CartCheckOut totalCartPrice={cart?.totalCartPrice} />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
