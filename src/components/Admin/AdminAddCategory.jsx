import React, { useEffect, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";
import avatar from "../../assets/images/avatar.png";
import { setCategory } from "../../redux/actions/categoriesActions";

const AdminAddCategory = () => {
  const [img, setImg] = useState(avatar);
  const [imgPath, setImgPath] = useState("");
  const [text, setText] = useState("");
  const [loading, setLoading] = useState(true);
  const [isPress, setiIsPress] = useState(false);
  const dispatch = useDispatch();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (text && img) {
        const formDate = new FormData();
        formDate.append("name", text);
        formDate.append("image", imgPath);
        setiIsPress(true);
        setLoading(true);
        await dispatch(setCategory(formDate));
        setLoading(false);
      } else {
        alert("please fell inputs");
      }
    } catch (error) {
      console.log(error);
    }
  };
  useEffect(() => {
    if (!loading) {
      setImg(avatar);
      setImgPath(null);
      setText("");
      setLoading(true);
      setiIsPress(false);
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
          setText(e.target.value.trim());
        }}
      />
      <Button variant="dark" type="submit">
        Save
      </Button>
      {isPress ? loading ? <h1>Loading.....</h1> : <h1>Done</h1> : null}
    </Form>
  );
};

export default AdminAddCategory;
