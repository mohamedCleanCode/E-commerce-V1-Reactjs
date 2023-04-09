import React from "react";
import { Row } from "react-bootstrap";
import { Link } from "react-router-dom";
import UserPersonalAddress from "./UserPersonalAddress";

const UserPersonalAddresses = ({ addresses, loading }) => {
  console.log(addresses);
  console.log(loading);
  return (
    <div>
      <h1>Notebook Addresses</h1>
      <Row>
        {loading ? (
          <p>there are not addresses yet!!!</p>
        ) : (
          addresses?.data?.map((address) => {
            return <UserPersonalAddress key={address?._id} address={address} />;
          })
        )}
      </Row>
      <Link to="/user/add-address" className="btn text-white bg-dark">
        Add a new address
      </Link>
    </div>
  );
};

export default UserPersonalAddresses;
