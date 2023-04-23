import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import CartCheckOut from "../../components/Cart/CartCheckOut";
import ProductCart from "../../components/Cart/ProductCart";
import useGetCart from "../../hook/cart/useGetCart";

const CartPage = () => {
  const [cart, removeItemFromCart, clearCart] = useGetCart();

  return (
    <Container style={{ minHeight: "72vh" }}>
      <h1 className="my-2">Your Cart</h1>
      <Row>
        <Col xs="12" sm="8" lg="9">
          {cart?.items?.length >= 1 ? (
            cart.items.map((item) => {
              return (
                <ProductCart
                  key={item?._id}
                  product={item}
                  removeItemFromCart={removeItemFromCart}
                />
              );
            })
          ) : (
            <p>there are not any items in cart</p>
          )}
        </Col>
        <Col xs="12" sm="4" lg="3">
          <CartCheckOut
            clearCart={clearCart}
            totalCartPrice={cart?.totalCartPrice}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default CartPage;
