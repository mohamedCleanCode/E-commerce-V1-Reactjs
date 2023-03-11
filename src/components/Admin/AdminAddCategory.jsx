import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import avatar from "../../assets/images/avatar.png";
import notify from "../../hook/useNotification";
import { setCategory } from "../../redux/actions/categoriesActions";

const AdminAddCategory = () => {
  const [img, setImg] = useState(avatar);
  const [imgPath, setImgPath] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.categories.categories);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (text && img) {
        const formDate = new FormData();
        formDate.append("name", text);
        formDate.append("image", imgPath);
        setLoading(true);
        await dispatch(setCategory(formDate));
        setLoading(false);
      } else {
        notify("Warn", "warn");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (loading) {
      setImg(avatar);
      setImgPath(null);
      setText("");
      setLoading(false);
      if (res.status === 201) {
        notify("Success", "success");
      } else if (res.status === 400) {
        notify("Error", "error");
      } else {
        notify("Error", "error");
      }
    }
  }, [loading]);

  return (
    <Form className="admin-add" onSubmit={handleSubmit}>
      <h1>Add A New Category</h1>
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
        placeholder="Category Name"
        value={text}
        onChange={(e) => {
          setText(e.target.value);
        }}
      />
      <Button disabled={loading} variant="dark" type="submit">
        Save
      </Button>
      <ToastContainer autoClose={1000} />
    </Form>
  );
};

export default AdminAddCategory;
