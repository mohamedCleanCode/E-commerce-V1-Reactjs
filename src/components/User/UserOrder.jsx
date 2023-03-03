import React from "react";
import { Col } from "react-bootstrap";
import UserOrderCard from "./UserOrderCard";

const UserOrder = () => {
  return (
    <Col xs="12" className="bg-white pt-2 pb-5 mb-2 rounded">
      <h4>Order Num #123456</h4>
      <UserOrderCard />
      <UserOrderCard />
      <div className="user-order-status">
        <p>Status: something</p>
      </div>
    </Col>
  );
};

export default UserOrder;
