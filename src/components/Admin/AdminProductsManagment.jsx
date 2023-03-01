import React from "react";
import { Row } from "react-bootstrap";
import AdminProductsManagmentCard from "./AdminProductsManagmentCard";

const AdminProductsManagment = () => {
  return (
    <>
      <h1>Products Managment</h1>
      <Row>
        <AdminProductsManagmentCard />
        <AdminProductsManagmentCard />
        <AdminProductsManagmentCard />
        <AdminProductsManagmentCard />
      </Row>
    </>
  );
};

export default AdminProductsManagment;
