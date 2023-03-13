import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import avatar from "../../assets/images/avatar.png";
import notify from "../../hook/useNotification";
import { setCategory } from "../../redux/actions/categoriesActions";

const useAddCategory = () => {
  const [img, setImg] = useState(avatar);
  const [imgPath, setImgPath] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { response: res } = useSelector((state) => state.categories);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeImg = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
    setImgPath(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      if (name && img) {
        const formDate = new FormData();
        formDate.append("name", name);
        formDate.append("image", imgPath);
        setLoading(true);
        await dispatch(setCategory(formDate));
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
      setName("");
      setLoading(false);
      if (res.status === 201) {
        notify("Success", "success");
      } else if (res.status === 400) {
        notify("Error", "error");
      } else {
        notify("Error", "error");
      }
    }
  }, [loading, res]);
  return [img, name, loading, handleSubmit, onChangeName, onChangeImg];
};

export default useAddCategory;
