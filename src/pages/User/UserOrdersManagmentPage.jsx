import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserOrders from "../../components/User/UserOrders";
import UserSideBar from "../../components/User/UserSideBar";
import useViewOrdersOfUser from "../../hook/order/useViewOrdersOfUser";

const UserOrdersManagmentPage = () => {
  const [order] = useViewOrdersOfUser();

  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <UserSideBar />
        </Col>
        <Col xs="9">
          <UserOrders
            orders={order?.orders?.data}
            result={order?.orders?.results}
          />
        </Col>
      </Row>
    </Container>
  );
};

export default UserOrdersManagmentPage;
