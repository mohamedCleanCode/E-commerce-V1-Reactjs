import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";

const AdminOrdersManagmentCard = ({ item }) => {
  return (
    <Link to={`/admin/order/${item?._id}`}>
      <Row className="product-cart">
        <Col xs="12" sm="12" md="8" lg="9">
          <div className="product-cart-info">
            <div className="product-cart-info-header d-flex justify-content-between">
              <p className="product-cart-info-cat product-info-cat">
                Order num #{item?.id}
              </p>
            </div>
            <p className="product-cart-info-title product-info-title">
              Order By...{item?.user?.name}
              <span className="product-info-rat fs-6 ms-2">
                {item?.user?.phone}
              </span>
            </p>
            <div className="user-order-status">
              <p>
                Delivered:
                {item?.isDelivered === true ? "Delivered" : "Not Delivered"}
              </p>
              <p>Paid: {item?.isPaid === true ? "Paid" : "Not Paid"}</p>
              <p>
                Method: {item?.paymentMethodType === "cash" ? "Cash" : "Visa"}
              </p>
            </div>
            <p className="product-cart-info-price">${item?.totalOrderPrice}</p>
          </div>
        </Col>
      </Row>
    </Link>
  );
};

export default AdminOrdersManagmentCard;
