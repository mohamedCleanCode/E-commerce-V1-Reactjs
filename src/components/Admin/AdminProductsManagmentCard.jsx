import React, { useState } from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminProductsManagmentCard = ({ product }) => {
  const [show, setShow] = useState(false);
  const handleClose = () => {};
  const handleDelete = () => {};
  return (
    <Col xs="10" sm="10" md="5" lg="3" className="mb-3 m-auto">
      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Modal heading</Modal.Title>
        </Modal.Header>
        <Modal.Body>Woohoo, you're reading this text in a modal!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleClose}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Link
        to={`/products/${product?._id}`}
        style={{ color: "#444", textDecoration: "none" }}
      >
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
      </Link>
    </Col>
  );
};

export default AdminProductsManagmentCard;
