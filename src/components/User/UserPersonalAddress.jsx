import React from "react";
import { Col, Row } from "react-bootstrap";

const UserPersonalAddress = () => {
  return (
    <Col xs="12" className="mb-2">
      <div className="user-personl-address bg-white p-3 rounded">
        <Row>
          <Col
            xs="12"
            className="d-flex justify-content-between align-items-center"
          >
            <h4 className="mb-0">Home</h4>
            <div className="user-personl-address-actions d-flex">
              <button className="btn" style={{ fontSize: "14px" }}>
                Edit <i className="fa-solid fa-gear"></i>
              </button>
              <button className="btn" style={{ fontSize: "14px" }}>
                Remove <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="12">
            <div className="user-personl-address-full-address">
              Egypt, Cairo, Nasr City
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <div className="user-personl-address-phone text-dark fs-5">
              Phone Number:{" "}
              <span className="text-black-50 fs-6">01023456799</span>
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default UserPersonalAddress;
