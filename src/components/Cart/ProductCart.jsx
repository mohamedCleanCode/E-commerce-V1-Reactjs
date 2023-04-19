import React from "react";
import { Col, Row } from "react-bootstrap";

const ProductCart = ({ product }) => {
  return (
    <Row className="product-cart">
      <Col xs="12" sm="12" md="4" lg="3">
        <img src={product?.product?.imageCover} alt={product?.product?.title} />
      </Col>
      <Col xs="12" sm="12" md="8" lg="9">
        <div className="product-cart-info">
          <div className="product-cart-info-header d-flex justify-content-between">
            <p className="product-cart-info-cat product-info-cat">
              {product?.product?.category?.name}
            </p>
            <button className="product-cart-info-remove-from-cart btn text-dark">
              Remove <i className="fa-solid fa-trash"></i>
            </button>
          </div>
          <p className="product-cart-info-title product-info-title">
            {product?.product?.title}
            <span className="product-info-rat fs-6 ms-2">
              {product?.product?.ratingsAverage}
            </span>
          </p>
          <p className="product-cart-info-brand product-info-brand">
            Brand:
            <span className="brand-name">{product?.product?.brand?.name}</span>
          </p>
          <div className="product-cart-info-color"></div>
          <input
            type="number"
            className="product-cart-info-quantity"
            value={product?.count}
          />
          <p className="product-cart-info-price">${product?.price}</p>
        </div>
      </Col>
    </Row>
  );
};

export default ProductCart;
