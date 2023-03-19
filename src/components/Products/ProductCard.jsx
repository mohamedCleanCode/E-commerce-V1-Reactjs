import React from "react";
import { Card, Col } from "react-bootstrap";

const ProductCard = (product) => {
  const { product: pro } = product;
  const { title, imageCover, price } = pro;
  return (
    <Col xs="10" sm="10" md="5" lg="3" className="mb-3 m-auto">
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={imageCover}
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />
        <Card.Body>
          <i className="fa-regular fa-heart"></i>
          <Card.Title>{title}</Card.Title>
          <div className="info d-flex justify-content-between mt-3">
            <p className="price m-0">${price}</p>
            <div className="rate" style={{ color: "gold" }}>
              4.5 <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
