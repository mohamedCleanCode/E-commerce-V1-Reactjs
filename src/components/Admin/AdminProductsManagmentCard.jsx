import React from "react";
import { Button, Card, Col, Modal } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProductsManagmentCard from "../../hook/admin/useProductsManagmentCard";

const AdminProductsManagmentCard = ({ product }) => {
  const [show, handleClose, handleShow, handleDelete] =
    useProductsManagmentCard(product);

  return (
    <Col xs="10" sm="10" md="5" lg="3" className="mb-3 m-auto">
      <Modal show={show} onHide={handleClose}>
        <Modal.Body>Are you sure!</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="danger" onClick={handleDelete}>
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
      <Card className="position-relative" style={{ width: "100%" }}>
        <div className="ddmin-products-managment-card-icons position-absolute">
          <p>Edit</p>
          <p onClick={handleShow}>Remove</p>
        </div>
        <Link
          to={`/products/${product?._id}`}
          style={{ color: "#444", textDecoration: "none" }}
        >
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
        </Link>
      </Card>
    </Col>
  );
};

export default AdminProductsManagmentCard;
