import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import UserPersonalAddresses from "../../components/User/UserPersonalAddresses";
import UserSideBar from "../../components/User/UserSideBar";
import useUserPersonalAddressesPage from "../../hook/address/useUserPersonalAddressesPage";

const UserPersonalAddressesPage = () => {
  const [addresses, loading] = useUserPersonalAddressesPage();
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <UserSideBar />
        </Col>
        <Col xs="9">
          <UserPersonalAddresses addresses={addresses} loading={loading} />
        </Col>
      </Row>
    </Container>
  );
};

export default UserPersonalAddressesPage;
