import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserPersonalAddress from "./UserPersonalAddress";

const UserPersonalAddresses = () => {
  return (
    <div>
      <h1>Notebook Addresses</h1>
      <Row>
        <UserPersonalAddress />
        <UserPersonalAddress />
      </Row>
      <Link to="/user/add-address" className="btn text-white bg-dark">
        Add a new address
      </Link>
    </div>
  );
};

export default UserPersonalAddresses;
