import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import laptops from "../../assets/images/laptops.png";
const DiscountSection = () => {
  return (
    <Container style={{ backgroundColor: "#00000069", borderRadius: "10px" }}>
      <Row className="align-items-center my-3">
        <Col sm="6">
          <p className="m-0 text-white fw-bold fs-6 text-center">
            Discount up to 30% on laptop devices
          </p>
        </Col>
        <Col sm="6">
          <img className="w-100 h-100" src={laptops} alt="laptops" />
        </Col>
      </Row>
    </Container>
  );
};

export default DiscountSection;
