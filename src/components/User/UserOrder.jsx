import React from "react";
import { Col } from "react-bootstrap";
import UserOrderCard from "./UserOrderCard";

const UserOrder = ({ order }) => {
  console.log(order);
  return (
    <Col xs="12" className="bg-white pt-2 mb-2 rounded">
      <h4>Order Num #{order?.id}</h4>
      {order?.cartItems?.length >= 1 &&
        order.cartItems.map((item) => {
          return <UserOrderCard key={item?._id} item={item} />;
        })}
      <div className="user-order-status">
        <p>
          Status: {order?.isDelivered === true ? "Delivered" : "Not Delivered"}
        </p>
      </div>
    </Col>
  );
};

export default UserOrder;
