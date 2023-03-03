import { Col, Container, Row } from "react-bootstrap";
import UserAddAddress from "../../components/User/UserAddAddress";
import UserSideBar from "../../components/User/UserSideBar";

const UserAddAddressPage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <UserSideBar />
        </Col>
        <Col xs="9">
          <UserAddAddress />
        </Col>
      </Row>
    </Container>
  );
};

export default UserAddAddressPage;
