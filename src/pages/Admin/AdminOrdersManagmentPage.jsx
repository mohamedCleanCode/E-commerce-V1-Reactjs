import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import AdminOrdersManagment from "../../components/Admin/AdminOrdersManagment";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import Pagination from "../../components/Utilities/Pagination";

const OrdersManagmentPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <AdminSideBar />
        </Col>
        <Col xs="9">
          <AdminOrdersManagment />
          <Pagination />
        </Col>
      </Row>
    </Container>
  );
};

export default OrdersManagmentPage;
