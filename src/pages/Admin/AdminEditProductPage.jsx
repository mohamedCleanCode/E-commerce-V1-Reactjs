import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AdminEditProduct from "../../components/Admin/AdminEditProduct";
import AdminSideBar from "../../components/Admin/AdminSideBar";

const AdminEditProductPage = () => {
  const { id } = useParams();
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <AdminSideBar />
        </Col>
        <Col xs="9">
          <AdminEditProduct />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminEditProductPage;
