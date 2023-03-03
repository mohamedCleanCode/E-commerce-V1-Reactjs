import { Col, Container, Row } from "react-bootstrap";
import UserEditAddress from "../../components/User/UserEditAddress";
import UserSideBar from "../../components/User/UserSideBar";
const UserEditAddressPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <UserSideBar />
        </Col>
        <Col xs="9">
          <UserEditAddress />
        </Col>
      </Row>
    </Container>
  );
};

export default UserEditAddressPage;
