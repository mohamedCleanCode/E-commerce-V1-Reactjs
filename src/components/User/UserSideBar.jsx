import React from "react";
import { Link } from "react-router-dom";

const UserSideBar = () => {
  return (
    <ul className="admin-side-bar">
      <li className="admin-side-bar-item">
        <Link to="/user/orders-managment" className="admin-side-bar-item-link">
          Oreders Managment
        </Link>
      </li>
      <li className="admin-side-bar-item">
        <Link to="/user/favorite-products" className="admin-side-bar-item-link">
          Favorite Products
        </Link>
      </li>
      <li className="admin-side-bar-item">
        <Link
          to="/user/personal-dddresses"
          className="admin-side-bar-item-link"
        >
          Personal Addresses
        </Link>
      </li>
      <li className="admin-side-bar-item">
        <Link to="/user/profile" className="admin-side-bar-item-link">
          Profile
        </Link>
      </li>
    </ul>
  );
};

export default UserSideBar;
