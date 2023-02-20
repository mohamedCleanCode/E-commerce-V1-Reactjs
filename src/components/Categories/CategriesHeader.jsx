import React from "react";
import { Col, Row } from "react-bootstrap";

const CategriesHeader = () => {
  return (
    <div className="categries-header">
      <Row className="w-100">
        <Col className="d-flex flex-wrap" xm="12" sm="12" md="12" lg="12">
          <div>all</div>
          <div>electronics</div>
          <div>clothes</div>
          <div>electricals</div>
          <div>discounts</div>
          <div>discounts</div>
          <div>discounts</div>
          <div>discounts</div>
          <div>discounts</div>
          <div>more</div>
        </Col>
      </Row>
    </div>
  );
};

export default CategriesHeader;
