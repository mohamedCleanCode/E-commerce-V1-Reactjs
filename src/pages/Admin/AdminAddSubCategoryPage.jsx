import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAddSubCategory from "../../components/Admin/AdminAddSubCategory";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminAddSubCategoryPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <AdminSideBar />
        </Col>
        <Col xs="9">
          <AdminAddSubCategory />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddSubCategoryPage;
