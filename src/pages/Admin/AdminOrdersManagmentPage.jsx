import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminOrdersManagment from "../../components/Admin/AdminOrdersManagment";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const OrdersManagmentPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="2" md="3">
          <AdminSideBar />
        </Col>
        <Col xs="10" md="9">
          <AdminOrdersManagment />
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersManagmentPage;
