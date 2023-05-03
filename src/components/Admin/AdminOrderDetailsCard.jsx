import React from "react";
import { Col, Row } from "react-bootstrap";

const AdminOrderDetailsCard = ({ item }) => {
  return (
    <Row className="product-cart">
      <Col xs="12" sm="12" md="4" lg="3">
        <img src={item?.product?.imageCover} alt="mobile" />
      </Col>
      <Col xs="12" sm="12" md="8" lg="9">
        <div className="product-cart-info">
          <p className="product-cart-info-title product-info-title">
            {item?.product?.title}
            <span className="product-info-rat fs-6 ms-2">
              {item?.product?.ratingsQuantity}
            </span>
          </p>
          <div className="product-cart-info-color"></div>
          <input
            type="number"
            className="product-cart-info-quantity"
            value={item?.count}
          />
          <p className="product-cart-info-price">$ {item?.price}</p>
        </div>
      </Col>
    </Row>
  );
};

export default AdminOrderDetailsCard;
