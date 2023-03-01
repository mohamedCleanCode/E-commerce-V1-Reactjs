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
        <Link to="/admin/add-brnad" className="admin-side-bar-item-link">
          Add Brand
        </Link>
      </li>
    </ul>
  );
};

export default AdminSideBar;
