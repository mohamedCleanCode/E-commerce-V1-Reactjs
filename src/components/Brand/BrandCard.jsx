import React from "react";
import { Card, Col } from "react-bootstrap";

const BrandCard = ({ src }) => {
  return (
    <Col
      xm="12"
      sm="6"
      md="4"
      lg="3"
      className="mb-2"
      style={{
        height: "150px",
      }}
    >
      <Card style={{ width: "100%", height: "100%" }}>
        <Card.Img
          variant="top"
          src={src}
          style={{
            width: "100%",
            height: "100%",
            objectPosition: "top",
          }}
        />
      </Card>
    </Col>
  );
};

export default BrandCard;
