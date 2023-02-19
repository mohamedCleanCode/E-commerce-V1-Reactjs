import React from "react";
import { Card, Col } from "react-bootstrap";
import item from "../../assets/images/item.png";

const ProductCard = ({ src, title, price, rate }) => {
  return (
    <Col xs="12" sm="6" md="4" lg="3" className="mb-3">
      <Card style={{ width: "100%" }}>
        <Card.Img
          variant="top"
          src={item}
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />
        <Card.Body>
          <i className="fa-regular fa-heart"></i>
          <Card.Title>Card Title</Card.Title>
          <div className="info d-flex justify-content-between mt-3">
            <p className="price m-0">$880</p>
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
