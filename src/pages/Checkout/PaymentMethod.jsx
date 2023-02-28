import React from "react";
import { Container } from "react-bootstrap";
import ChoosePaymentMethod from "../../components/Checkout/ChoosePaymentMethod";

const PaymentMethod = () => {
  return (
    <Container style={{ minHeight: "71vh" }}>
      <ChoosePaymentMethod />
    </Container>
  );
};

export default PaymentMethod;
