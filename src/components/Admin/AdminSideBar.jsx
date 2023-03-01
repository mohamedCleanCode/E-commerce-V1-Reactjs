import React from "react";
import { Link } from "react-router-dom";

const AdminSideBar = () => {
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
          Products Managment
        </Link>
      </li>
      <li className="admin-side-bar-item">
        <a className="admin-side-bar-item-link">All Products</a>
      </li>
    </ul>
  );
};

export default AdminSideBar;
