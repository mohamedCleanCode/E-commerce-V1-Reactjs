import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserFavoriteProducts from "../../components/User/UserFavoriteProducts";
import UserSideBar from "../../components/User/UserSideBar";

const UserFavoriteProductsPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <UserSideBar />
        </Col>
        <Col xs="9">
          <UserFavoriteProducts />
        </Col>
      </Row>
    </Container>
  );
};

export default UserFavoriteProductsPage;
