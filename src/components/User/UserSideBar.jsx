import React from "react";
import { Link } from "react-router-dom";

const UserSideBar = () => {
  return (
    <ul className="admin-side-bar">
      <li className="admin-side-bar-item">
        <Link to="/admin/orders-managment" className="admin-side-bar-item-link">
          Oreders Managment
        </Link>
      </li>
      <li className="admin-side-bar-item">
        <Link
          to="/admin/products-managment"
          className="admin-side-bar-item-link"
        >
          Favorite Products
        </Link>
      </li>
      <li className="admin-side-bar-item">
        <Link to="/admin/add-brnad" className="admin-side-bar-item-link">
          Personal Addresses
        </Link>
      </li>
      <li className="admin-side-bar-item">
        <Link to="/admin/add-category" className="admin-side-bar-item-link">
          Profile
        </Link>
      </li>
    </ul>
  );
};

export default UserSideBar;
