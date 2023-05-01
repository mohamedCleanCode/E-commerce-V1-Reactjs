import React from "react";
import { Row } from "react-bootstrap";
import UserOrder from "./UserOrder";

const UserOrders = ({ orders, result }) => {
  return (
    <div>
      <h1>#{result} Results</h1>
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
