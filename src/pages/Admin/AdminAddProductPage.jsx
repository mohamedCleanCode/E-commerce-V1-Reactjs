import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAddProduct from "../../components/Admin/AdminAddProduct";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminAddProductPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <AdminSideBar />
        </Col>
        <Col xs="9">
          <AdminAddProduct />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddProductPage;
