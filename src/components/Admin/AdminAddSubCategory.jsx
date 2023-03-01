import React from "react";
import { Button, Form } from "react-bootstrap";

const AdminAddSubCategory = () => {
  return (
    <>
      <h1>Add A New Subcategory Category</h1>
      <Form.Control
        className="mb-3"
        type="text"
        placeholder="Name of subcategory"
      />
      <Form.Select className="mb-3" aria-label="Default select example">
        <option>Add Category</option>
        <option value="Cat-1">Cat-1</option>
        <option value="Cat-1">Cat-1</option>
        <option value="Cat-1">Cat-1</option>
      </Form.Select>
      <Button variant="dark" type="submit">
        Save
      </Button>
    </>
  );
};

export default AdminAddSubCategory;
