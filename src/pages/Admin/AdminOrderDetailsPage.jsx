import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import AdminOrderDetails from "../../components/Admin/AdminOrderDetails";
import AdminSideBar from "../../components/Admin/AdminSideBar";
import useViewOrderDetails from "../../hook/admin/useViewOrderDetails";

const AdminOrderDetailsPage = () => {
  const { id } = useParams();
  const [order] = useViewOrderDetails(id);
  console.log(order?.order);

  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <AdminSideBar />
        </Col>
        <Col xs="9">
          <AdminOrderDetails
            orderNum={order?.order?.data?.id}
            items={order?.order?.data?.cartItems}
            user={order?.order?.data?.user}
            totalOrderPrice={order?.order?.data?.totalOrderPrice}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default AdminOrderDetailsPage;
