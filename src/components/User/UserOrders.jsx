import React from "react";
import { Row } from "react-bootstrap";
import UserOrder from "./UserOrder";

const UserOrders = ({ orders }) => {
  return (
    <div>
      <h1>Welcome Mohamed</h1>
      <Row>
        {orders?.length >= 1 &&
          orders.map((order) => {
            return <UserOrder key={order?._id} order={order} />;
          })}
      </Row>
    </div>
  );
};

export default UserOrders;
