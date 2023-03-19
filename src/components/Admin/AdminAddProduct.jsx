import Multiselect from "multiselect-react-dropdown";
import React from "react";
import { Button, Col, Form } from "react-bootstrap";
import MultiImageInput from "react-multiple-image-input";
import { ToastContainer } from "react-toastify";
import useAddProduct from "../../hook/products/useAddProduct";

const AdminAddProduct = () => {
  const [
    handleSubmit,
    images,
    setImages,
    name,
    setName,
    desc,
    setDesc,
    priceBefore,
    setPriceBefore,
    price,
    setPrice,
    quantity,
    setQuantity,
    catId,
    onChangeCat,
    categories,
    options,
    selectedValue,
    onSelect,
    onRemove,
    brandId,
    setBrandId,
    brands,
    loading,
  ] = useAddProduct();

  return (
    <Col xs="12">
      <h1>Add A New Product</h1>
      <div className="admin-add-image">
        <p>Image Brand</p>
      </div>
      <Form onSubmit={handleSubmit}>
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
        <Form.Select
          name="main-category"
          className="mb-3"
          aria-label="Default select example"
          onChange={onChangeCat}
          value={catId}
        >
          <option value="0">Main Category</option>
          {categories?.data?.length >= 1 &&
            categories.data.map((cat) => {
              return (
                <option key={cat._id} value={cat._id}>
                  {cat.name}
                </option>
              );
            })}
        </Form.Select>
        <Multiselect
          placeholder="Subcategory"
          options={options} // Options to display in the dropdown
          selectedValues={selectedValue} // Preselected value to persist in dropdown
          onSelect={onSelect} // Function will trigger on select event
          onRemove={onRemove} // Function will trigger on remove event
          displayValue="name" // Property name to display in the dropdown options
        />
        <Form.Select
          name="main-brand"
          className="my-3"
          aria-label="Default select example"
          onChange={(e) => setBrandId(e.target.value)}
          value={brandId}
        >
          <option value="0">Brand</option>
          {brands.length >= 1
            ? brands.map((brand) => {
                return (
                  <option key={brand._id} value={brand._id}>
                    {brand.name}
                  </option>
                );
              })
            : null}
        </Form.Select>
        <Button variant="dark" type="submit" disabled={loading}>
          Save
        </Button>
      </Form>
      <ToastContainer />
    </Col>
  );
};

export default AdminAddProduct;
