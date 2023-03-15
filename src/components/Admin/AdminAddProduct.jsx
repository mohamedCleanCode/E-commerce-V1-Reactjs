import Multiselect from "multiselect-react-dropdown";
import React from "react";
import { Button, Col, Form } from "react-bootstrap";
// import avater from "../../assets/images/avatar.png";
import { useState } from "react";
import MultiImageInput from "react-multiple-image-input";

const AdminAddProduct = () => {
  const [images, setImages] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [priceBefore, setPriceBefore] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [cats, setCats] = useState("");
  const [subCats, setSubCats] = useState("");
  const [selectedSubCats, setSelectedSubCats] = useState("");

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
      <div className="admin-add-image">
        <p>Image Brand</p>
      </div>
      <Form.Group controlId="formBasicImg">
        <Form.Label>
          <MultiImageInput
            images={images}
            setImages={setImages}
            theme="light"
            allowCrop={false}
            max={4}
          />
        </Form.Label>
        <Form.Control
          type="file"
          style={{ opacity: "0", width: "0", height: "0" }}
        />
      </Form.Group>
      <Form.Control
        type="text"
        className="admin-add-brand-name"
        placeholder="Product name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <textarea
        rows="3"
        cols="100"
        className="admin-add-brand-name form-control"
        placeholder="Product description"
        value={desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <Form.Control
        type="number"
        className="admin-add-brand-name"
        placeholder="Price before discount"
        value={priceBefore}
        onChange={(e) => setPriceBefore(e.target.value)}
      />
      <Form.Control
        type="number"
        className="admin-add-brand-name"
        placeholder="Product price"
        value={price}
        onChange={(e) => setPrice(e.target.value)}
      />
      <Form.Control
        type="number"
        className="admin-add-brand-name"
        placeholder="Product Quantity"
        value={quantity}
        onChange={(e) => setQuantity(e.target.value)}
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
