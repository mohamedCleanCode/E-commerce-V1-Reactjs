import React from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import useAddSubCategory from "../../hook/subCategories/useAddSubCategory";

const AdminAddSubCategory = () => {
  const [
    name,
    loading,
    categories,
    onChangeName,
    onChangeCatName,
    handleSubmit,
  ] = useAddSubCategory();

  return (
    <>
      <h1>Add A New Subcategory Category</h1>
      <Form onSubmit={handleSubmit}>
        <Form.Control
          className="mb-3"
          type="text"
          value={name}
          placeholder="Name of subcategory"
          onChange={onChangeName}
        />
        <Form.Select
          name="category"
          className="mb-3"
          aria-label="Default select example"
          onChange={onChangeCatName}
        >
          <option value="0">Choose Category</option>
          {categories?.data
            ? categories.data.map((cat) => {
                return (
                  <option key={cat._id} value={cat._id}>
                    {cat.name}
                  </option>
                );
              })
            : null}
        </Form.Select>
        <Button variant="dark" type="submit" disabled={loading}>
          Save
        </Button>
      </Form>
      <ToastContainer autoClose={1000} />
    </>
  );
};

export default AdminAddSubCategory;
