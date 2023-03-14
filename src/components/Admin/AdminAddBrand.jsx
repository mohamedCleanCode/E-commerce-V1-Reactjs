import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import avater from "../../assets/images/avatar.png";
import notify from "../../hook/useNotification";
import { setBrand } from "../../redux/actions/brandsActions";

const AdminAddBrand = () => {
  const [img, setImg] = useState(avater);
  const [imgPath, setImgPath] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.brands.response);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name && img) {
        const formData = new FormData();
        formData.append("name", name);
        formData.append("image", imgPath);
        await dispatch(setBrand(formData));
        setLoading(true);
      } else {
        notify("Warn", "warn");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (loading) {
      setImg(avater);
      setImgPath("");
      setName("");
      setLoading(false);
      if (res.status === 201) {
        notify("Success", "success");
      } else if (res.status === 400) {
        notify("Error", "error");
        console.log(res);
      } else {
        console.log(res);
        notify("Error", "error");
      }
    }
  }, [loading, res]);

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
            onChange={(e) => {
              setImg(URL.createObjectURL(e.target.files[0]));
              setImgPath(e.target.files[0]);
            }}
          />
        </div>
      </div>
      <Form.Control
        type="text"
        className="admin-add-brand-name"
        placeholder="Brand Name"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <Button variant="dark" type="submit" disabled={loading}>
        Save
      </Button>
      <ToastContainer autoClose={1000} />
    </Form>
  );
};

export default AdminAddBrand;
