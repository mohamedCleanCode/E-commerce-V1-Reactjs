import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserOrders from "../../components/User/UserOrders";
import UserSideBar from "../../components/User/UserSideBar";
import useViewOrdersOfUser from "../../hook/checkout/useViewOrdersOfUser";

const UserOrdersManagmentPage = () => {
  const [checkout] = useViewOrdersOfUser();
  console.log(checkout.orders);

  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <UserSideBar />
        </Col>
        <Col xs="9">
          <UserOrders orders={checkout?.orders?.data} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrdersManagmentPage;
