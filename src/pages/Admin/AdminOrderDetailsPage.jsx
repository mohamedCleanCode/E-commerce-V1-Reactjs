import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminOrderDetails from "../../components/Admin/AdminOrderDetails";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminOrderDetailsPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <AdminSideBar />
        </Col>
        <Col xs="9">
          <AdminOrderDetails />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetailsPage;
