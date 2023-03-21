import React from "react";
import { Card, Col } from "react-bootstrap";

const AdminProductsManagmentCard = ({ product }) => {
  return (
    <Col xs="10" sm="10" md="5" lg="3" className="mb-3 m-auto">
      <Card className="position-relative" style={{ width: "100%" }}>
        <div className="ddmin-products-managment-card-icons position-absolute">
          <p>Edit</p>
          <p>Remove</p>
        </div>
        <Card.Img
          variant="top"
          src={product?.imageCover}
          style={{ width: "100%", height: "200px", objectFit: "contain" }}
        />
        <Card.Body>
          <i className="fa-regular fa-heart"></i>
          <Card.Title>{product?.title}</Card.Title>
          <div className="info d-flex justify-content-between mt-3">
            <p className="price m-0">${product?.price}</p>
            <div className="rate" style={{ color: "gold" }}>
              4.5 <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default AdminProductsManagmentCard;
