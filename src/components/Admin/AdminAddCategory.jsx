import React from "react";
import { Button, Form } from "react-bootstrap";
import avater from "../../assets/images/avatar.png";

const AdminAddCategory = () => {
  return (
    <div className="admin-add">
      <h1>Add A New Category</h1>
      <p className="admin-add-image">
        <p>Image Brand</p>
        <img src={avater} alt="" />
      </p>
      <Form.Control
        type="text"
        className="admin-add-brand-name"
        placeholder="Brand Name"
      />
      <Button variant="dark" type="submit">
        Save
      </Button>
    </div>
  );
};

export default AdminAddCategory;
