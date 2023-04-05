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
      <li className="admin-side-bar-item">
        <Link to="/admin/add-category" className="admin-side-bar-item-link">
          Add Category
        </Link>
      </li>
      <li className="admin-side-bar-item">
        <Link to="/admin/add-subcategory" className="admin-side-bar-item-link">
          Add Subcategory
        </Link>
      </li>
      <li className="admin-side-bar-item">
        <Link to="/admin/add-product" className="admin-side-bar-item-link">
          Add Product
        </Link>
      </li>
      <li className="admin-side-bar-item">
        <Link to="/admin/add-coupon" className="admin-side-bar-item-link">
          Add Coupon
        </Link>
      </li>
    </ul>
  );
};

export default AdminSideBar;
