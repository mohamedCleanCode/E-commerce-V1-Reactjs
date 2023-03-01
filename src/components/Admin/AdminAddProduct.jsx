import Multiselect from "multiselect-react-dropdown";
import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import avater from "../../assets/images/avatar.png";

const AdminAddProduct = () => {
  const options = [
    { name: "Option 1", id: 1 },
    { name: "Option 2", id: 2 },
  ];
  const selectedValue = () => {};
  const onSelect = () => {};
  const onRemove = () => {};
  return (
    <Col xs="12">
      <h1>Add A New Product</h1>
      <p className="admin-add-image">
        <p>Image Brand</p>
        <img src={avater} alt="" />
      </p>
      <Form.Control
        type="text"
        className="admin-add-brand-name"
        placeholder="Product name"
      />
      <textarea
        rows="3"
        cols="100"
        className="admin-add-brand-name form-control"
        placeholder="Product description"
      />
      <Form.Control
        type="text"
        className="admin-add-brand-name"
        placeholder="Price before discount"
      />
      <Form.Control
        type="text"
        className="admin-add-brand-name"
        placeholder="Product price"
      />
      <Form.Select className="mb-3" aria-label="Default select example">
        <option>Main Category</option>
        <option value="cat-1">cat-1</option>
        <option value="cat-1">cat-1</option>
        <option value="cat-1">cat-1</option>
        <option value="cat-1">cat-1</option>
      </Form.Select>
      <Multiselect
        placeholder="Subcategory"
        options={options} // Options to display in the dropdown
        selectedValues={selectedValue} // Preselected value to persist in dropdown
        onSelect={onSelect} // Function will trigger on select event
        onRemove={onRemove} // Function will trigger on remove event
        displayValue="name" // Property name to display in the dropdown options
      />
      <Form.Select className="my-3" aria-label="Default select example">
        <option>Brand</option>
        <option value="Brand-1">Brand-1</option>
        <option value="Brand-1">Brand-1</option>
        <option value="Brand-1">Brand-1</option>
        <option value="Brand-1">Brand-1</option>
      </Form.Select>
      <Button variant="dark" type="submit">
        Save
      </Button>
    </Col>
  );
};

export default AdminAddProduct;
