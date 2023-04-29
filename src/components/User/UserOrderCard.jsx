import React from "react";
import { Col, Row } from "react-bootstrap";

const UserOrderCard = ({ item }) => {
  return (
    <Row className="product-cart h-50">
      <Col xs="12" sm="12" md="4" lg="3">
        <img src={item?.products?.imageCover} alt="mobile" />
      </Col>
      <Col xs="12" sm="12" md="8" lg="9">
        <div className="product-cart-info">
          <div className="product-cart-info-header d-flex justify-content-between">
            <p className="product-cart-info-cat product-info-cat">Electrons</p>
            <button className="product-cart-info-remove-from-cart btn text-dark">
              Remove <i className="fa-solid fa-trash"></i>
            </button>
          </div>
          <p className="product-cart-info-title product-info-title">
            {item?.products?.title}
            <span className="product-info-rat fs-6 ms-2">
              {item?.products?.ratingsQuantity}
            </span>
          </p>
          <p className="product-cart-info-brand product-info-brand">
            Brand: <span className="brand-name">Apple</span>
          </p>
          <div className="product-cart-info-color"></div>
          <input
            type="number"
            className="product-cart-info-quantity"
            value={item?.count}
          />
          <p className="product-cart-info-price">${item?.price}</p>
        </div>
      </Col>
    </Row>
  );
};

export default UserOrderCard;
