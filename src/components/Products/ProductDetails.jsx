import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

const ProductDetails = () => {
  return (
    <Row style={{ minHeight: "60vh", alignItems: "center" }}>
      <Col xs="12" md="6" lg="4">
        <ProductGallery />
      </Col>
      <Col xs="12" md="6" lg="8">
        <ProductInfo />
      </Col>
    </Row>
  );
};

export default ProductDetails;
