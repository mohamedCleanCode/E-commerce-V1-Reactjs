import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminProductsManagment from "../../components/Admin/AdminProductsManagment";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import Pagination from "../../components/Utilities/Pagination";

const AdminProductsManagmentPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <AdminSideBar />
        </Col>
        <Col xs="9">
          <AdminProductsManagment />
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminProductsManagmentPage;
