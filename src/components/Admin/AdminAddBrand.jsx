import React from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import useAddBrand from "../../hook/brands/useAddBrand";

const AdminAddBrand = () => {
  const [img, name, loading, handleSubmit, onImgChange, onNameChange] =
    useAddBrand();

  return (
    <Form className="admin-add" onSubmit={handleSubmit}>
      <h1>Add A New Brand</h1>
      <div className="admin-add-image">
        <p>Image Brand</p>
        <div>
          <label htmlFor="upload-image">
            <img src={img} alt="" style={{ cursor: "pointer" }} />
          </label>
          <input
            type="file"
            id="upload-image"
            style={{ opacity: "0", width: "100%" }}
            onChange={onImgChange}
          />
        </div>
      </div>
      <Form.Control
        type="text"
        className="admin-add-brand-name"
        placeholder="Brand Name"
        value={name}
        onChange={onNameChange}
      />
      <Button variant="dark" type="submit" disabled={loading}>
        Save
      </Button>
      <ToastContainer autoClose={1000} />
    </Form>
  );
};

export default AdminAddBrand;
