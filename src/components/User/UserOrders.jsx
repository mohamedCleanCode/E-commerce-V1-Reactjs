import React from "react";
import { Row } from "react-bootstrap";
import UserOrder from "./UserOrder";

const UserOrders = () => {
  return (
    <div>
      <h1>Welcome Mohamed</h1>
      <Row>
        <UserOrder />
        <UserOrder />
        <UserOrder />
      </Row>
    </div>
  );
};

export default UserOrders;
