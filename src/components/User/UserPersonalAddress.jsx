import React from "react";
import { Col, Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import useUserAddAddress from "../../hook/address/useUserAddAddress";

const UserPersonalAddress = ({ address }) => {
  const [
    alias,
    details,
    phone,
    city,
    postalCode,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
    onChangeCity,
    onChangePostalCode,
    handleSubmit,
    removeAddress,
  ] = useUserAddAddress();
  return (
    <Col xs="12" className="mb-2">
      <div className="user-personl-address bg-white p-3 rounded">
        <Row>
          <Col
            xs="12"
            className="d-flex justify-content-between align-items-center"
          >
            <h4 className="mb-0">{address?.alias}</h4>
            <div className="user-personl-address-actions d-flex">
              <Link
                to="/user/edit-address"
                className="btn"
                style={{ fontSize: "14px" }}
              >
                Edit <i className="fa-solid fa-gear"></i>
              </Link>
              <button
                onClick={() => removeAddress(address?._id)}
                className="btn"
                style={{ fontSize: "14px" }}
              >
                Remove <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </Col>
        </Row>
        <Row className="mb-2">
          <Col xs="12">
            <div className="user-personl-address-full-address">
              {address?.details}
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <div className="user-personl-address-phone text-dark fs-5">
              Phone Number:
              <span className="text-black-50 fs-6">{address?.phone}</span>
            </div>
          </Col>
        </Row>
        <Row>
          <Col xs="12">
            <div className="user-personl-address-phone text-dark fs-5">
              City: {address?.city}
            </div>
          </Col>
        </Row>
      </div>
    </Col>
  );
};

export default UserPersonalAddress;
