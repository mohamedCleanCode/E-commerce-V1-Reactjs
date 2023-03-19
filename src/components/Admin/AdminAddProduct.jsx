import Multiselect from "multiselect-react-dropdown";
import React, { useEffect, useState } from "react";
import { Button, Col, Form } from "react-bootstrap";
import MultiImageInput from "react-multiple-image-input";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import notify from "../../hook/useNotification";
import { getAllBrands } from "../../redux/actions/brandsActions";
import { getAllCategories } from "../../redux/actions/categoriesActions";
import { setProduct } from "../../redux/actions/productsActions";
import { getSubCtegoriesOfCategory } from "../../redux/actions/subCategoriesActions";

const AdminAddProduct = () => {
  const [loading, setLoading] = useState(false);
  const [options, setOptions] = useState([]);
  const [images, setImages] = useState({});
  const [name, setName] = useState("");
  const [desc, setDesc] = useState("");
  const [priceBefore, setPriceBefore] = useState("");
  const [price, setPrice] = useState("");
  const [quantity, setQuantity] = useState("");
  const [catId, setCatId] = useState("");
  const [brandId, setBrandId] = useState("");
  const [selectedSubCats, setSelectedSubCats] = useState("");
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { brands } = useSelector((state) => state.brands);
  const { subCategories } = useSelector((state) => state.subCategories);
  const { response: res } = useSelector((state) => state.products);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (
      images.length <= 0 ||
      name === "" ||
      desc === "" ||
      price === "" ||
      quantity === "" ||
      catId === "" ||
      brandId === ""
    ) {
      notify("Warn", "warn");
      return;
    }
    const imageCover = dataURLtoFile(images[0], Math.random() + ".png");
    const imagesSent = Array.from(Object.values(images)).map((image) =>
      dataURLtoFile(image, Math.random() + ".png")
    );
    const formData = new FormData();
    formData.append("imageCover", imageCover);
    imagesSent.map((image) => formData.append("images", image));
    formData.append("title", name);
    formData.append("description", desc);
    formData.append("price", price);
    formData.append("quantity", quantity);
    formData.append("category", catId);
    selectedSubCats.map((subCat) => formData.append("subcategory", subCat._id));
    formData.append("brand", brandId);
    setLoading(true);
    await dispatch(setProduct(formData));
    setLoading(true);
  };

  const selectedValue = () => {};
  const onSelect = (selectedList) => {
    setSelectedSubCats(selectedList);
  };
  const onRemove = (selectedList) => {
    setSelectedSubCats(selectedList);
  };

  const onChangeCat = async (e) => {
    if (e.target.value !== "0") {
      setCatId(e.target.value);
      await dispatch(getSubCtegoriesOfCategory(e.target.value));
    }
  };

  function dataURLtoFile(dataurl, filename) {
    var arr = dataurl.split(","),
      mime = arr[0].match(/:(.*?);/)[1],
      bstr = atob(arr[1]),
      n = bstr.length,
      u8arr = new Uint8Array(n);

    while (n--) {
      u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  useEffect(() => {
    dispatch(getAllCategories());
    dispatch(getAllBrands());
    if (catId !== "0") {
      if (subCategories?.length) {
        setOptions(subCategories);
      }
    }
    if (loading) {
      setLoading(false);
      setCatId("0");
      setOptions([]);
      setImages({});
      setName("");
      setDesc("");
      setPriceBefore("");
      setPrice("");
      setQuantity("");
      setBrandId("0");
      setSelectedSubCats([]);
      if (res?.status === 201) {
        notify("Success", "success");
      } else if (res?.status === 400) {
        notify("Error", "error");
      }
    }
  }, [catId, subCategories, loading, res]);
  console.log(res);

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
