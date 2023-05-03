import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AdminOrderDetails from "../../components/Admin/AdminOrderDetails";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import useViewOrderDetails from "../../hook/admin/useViewOrderDetails";

const AdminOrderDetailsPage = () => {
  const { id } = useParams();
  console.log(id);
  const [order] = useViewOrderDetails(id);
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
