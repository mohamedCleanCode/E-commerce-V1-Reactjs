import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAddBrand from "../../components/Admin/AdminAddBrand";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminAddBrandPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <AdminSideBar />
        </Col>
        <Col xs="9">
          <AdminAddBrand />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddBrandPage;
