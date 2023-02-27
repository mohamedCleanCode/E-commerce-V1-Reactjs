import React from "react";
import { Col, Row } from "react-bootstrap";
import ProductGallery from "./ProductGallery";

const ProductDetails = () => {
  return (
    <Row style={{ height: "50vh" }}>
      <Col xs="12" md="6" lg="4">
        <ProductGallery />
      </Col>
      <Col xs="12" md="6" lg="8">
        rewgre
      </Col>
    </Row>
  );
};

export default ProductDetails;
