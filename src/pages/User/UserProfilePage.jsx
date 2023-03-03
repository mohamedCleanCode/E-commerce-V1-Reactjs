import { Col, Container, Row } from "react-bootstrap";
import UserProfile from "../../components/User/UserProfile";
import UserSideBar from "../../components/User/UserSideBar";

const UserProfilePage = () => {
  return (
    <Container className="my-3" style={{ minHeight: "72vh" }}>
      <Row>
        <Col xs="3">
          <UserSideBar />
        </Col>
        <Col xs="9">
          <UserProfile />
        </Col>
      </Row>
    </Container>
  );
};

export default UserProfilePage;
