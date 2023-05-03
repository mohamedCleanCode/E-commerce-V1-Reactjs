import React from "react";
import { Row } from "react-bootstrap";
import AdminOrderDetailsCard from "./AdminOrderDetailsCard";
import AdminOrderDetailsUser from "./AdminOrderDetailsUser";

const AdminOrderDetails = ({ orderNum, items, user, totalOrderPrice }) => {
  return (
    <>
      <h1>Order Details Num #{orderNum}</h1>
      <Row className="justify-content-center">
        {items?.length >= 1 &&
          items.map((item) => {
            return <AdminOrderDetailsCard key={item?._id} item={item} />;
          })}
      </Row>
      <Row className="bg-white rounded">
        <AdminOrderDetailsUser user={user} totalOrderPrice={totalOrderPrice} />
      </Row>
    </>
  );
};

export default AdminOrderDetails;
