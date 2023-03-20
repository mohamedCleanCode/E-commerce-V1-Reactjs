import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

const ProductCard = (product) => {
  const { product: pro } = product;
  const { title, imageCover, price, _id } = pro;
  return (
    <Col xs="10" sm="10" md="5" lg="3" className="mb-3 m-auto">
      <Link
        to={`/products/${_id}`}
        style={{ color: "#444", textDecoration: "none" }}
      >
        <Card style={{ width: "100%", cursor: "pointer" }}>
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
      </Link>
    </Col>
  );
};

export default ProductCard;
