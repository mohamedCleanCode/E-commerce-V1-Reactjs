import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminAddCoupon from "../../components/Admin/AdminAddCoupon";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminAddCouponPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <AdminSideBar />
        </Col>
        <Col xs="9">
          <AdminAddCoupon />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminAddCouponPage;
