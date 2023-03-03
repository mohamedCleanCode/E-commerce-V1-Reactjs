import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserSideBar from "../../components/User/UserSideBar";

const UserOrdersManagment = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <UserSideBar />
        </Col>
        <Col xs="9"></Col>
      </Row>
    </Container>
  );
};

export default UserOrdersManagment;
