import React from "react";
import { Card, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import useProductCard from "../../hook/wishlist/useProductCard";

const ProductCard = (product) => {
  const { product: pro } = product;
  const { title, imageCover, price, _id, ratingsAverage } = pro;

  const [color, handleFavorite] = useProductCard(pro);

  return (
    <Col xs="10" sm="10" md="5" lg="3" className="mb-3 m-auto">
      <Card style={{ width: "100%" }}>
        <Link
          to={`/products/${_id}`}
          style={{ color: "#444", textDecoration: "none" }}
        >
          <Card.Img
            variant="top"
            src={imageCover}
            style={{ width: "100%", height: "200px", objectFit: "contain" }}
          />
        </Link>
        <Card.Body>
          <i
            onClick={handleFavorite}
            className="fa-solid fa-heart fs-4"
            style={{ color: color, cursor: "pointer" }}
          ></i>
          <Card.Title>{title}</Card.Title>
          <div className="info d-flex justify-content-between mt-3">
            <p className="price m-0">${price}</p>
            <div className="rate" style={{ color: "gold" }}>
              {ratingsAverage || 0} <i className="fa-solid fa-star"></i>
            </div>
          </div>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default ProductCard;
