import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAddCategory from "../../components/Admin/AdminAddCategory";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminAddCategoryPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <AdminSideBar />
        </Col>
        <Col xs="9">
          <AdminAddCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddCategoryPage;
