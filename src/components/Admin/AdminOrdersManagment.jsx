import React from "react";
import { Row } from "react-bootstrap";
import AdminOrdersManagmentCard from "./AdminOrdersManagmentCard";

const AdminOrdersManagment = () => {
  return (
    <>
      <h1>Orders Managment</h1>
      <Row className="justify-content-end">
        <AdminOrdersManagmentCard />
      </Row>
    </>
  );
};

export default AdminOrdersManagment;
