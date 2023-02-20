import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import facebook from "../../assets/images/facebook.png";
import instagram from "../../assets/images/instagram.png";
import phone from "../../assets/images/phone.png";
import twitter from "../../assets/images/twitter.png";

const Footer = () => {
  return (
    <div
      className="footer d-flex align-items-center"
      style={{ backgroundColor: "silver" }}
    >
      <Container>
        <Row>
          <Col xm="12" sm="12" md="6" lg="6" className="d-flex">
            <p className="me-2">Terms and Conditions</p>
            <p className="me-2">privacy policy</p>
            <p className="me-2">Call us</p>
          </Col>
          <Col
            xm="12"
            sm="12"
            md="6"
            lg="6"
            className="d-flex align-itams-center"
          >
            <img src={facebook} alt="" />
            <img src={instagram} alt="" />
            <img src={twitter} alt="" />
            <p className="m-0">
              01234567890 <img src={phone} alt="" />
            </p>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Footer;
