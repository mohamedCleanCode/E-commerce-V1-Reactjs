import React from "react";
import { Row } from "react-bootstrap";
import AdminOrderDetailsCard from "./AdminOrderDetailsCard";
import AdminOrderDetailsUser from "./AdminOrderDetailsUser";

const AdminOrderDetails = () => {
  return (
    <>
      <h1>Order Details Num #123</h1>
      <Row className="justify-content-end">
        <AdminOrderDetailsCard />
        <AdminOrderDetailsCard />
      </Row>
      <Row>
        <AdminOrderDetailsUser />
      </Row>
    </>
  );
};

export default AdminOrderDetails;
