import React, { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import avater from "../../assets/images/avatar.png";
import { setCategory } from "../../redux/actions/categoriesActions";

const AdminAddCategory = () => {
  const [img, setImg] = useState(avater);
  const [imgPath, setImgPath] = useState("");
  const [text, setText] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (text && img) {
      const formDate = new FormData();
      console.log(formDate);
      formDate.append("name", text);
      formDate.append("image", imgPath);
      dispatch(setCategory(formDate));
    } else {
      alert("please fell inputs");
    }
  };
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
        placeholder="Brand Name"
        value={text}
        onChange={(e) => {
          setText(e.target.value.trim());
        }}
      />
      <Button variant="dark" type="submit">
        Save
      </Button>
    </Form>
  );
};

export default AdminAddCategory;
