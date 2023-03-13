import { Button, Form } from "react-bootstrap";
import { ToastContainer } from "react-toastify";
import useAddCategory from "../../hook/categories/useAddCategory";

const AdminAddCategory = () => {
  const [img, name, loading, handleSubmit, onChangeName, onChangeImg] =
    useAddCategory();
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
            onChange={onChangeImg}
          />
        </div>
      </div>
      <Form.Control
        type="text"
        className="admin-add-brand-name"
        placeholder="Category Name"
        value={name}
        onChange={onChangeName}
      />
      <Button disabled={loading} variant="dark" type="submit">
        Save
      </Button>
      <ToastContainer autoClose={1000} />
    </Form>
  );
};

export default AdminAddCategory;
