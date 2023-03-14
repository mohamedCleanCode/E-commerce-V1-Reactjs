import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import "react-toastify/dist/ReactToastify.css";
import avater from "../../assets/images/avatar.png";
import notify from "../../hook/useNotification";
import { setBrand } from "../../redux/actions/brandsActions";

const useAddBrand = () => {
  const [img, setImg] = useState(avater);
  const [imgPath, setImgPath] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const res = useSelector((state) => state.brands.response);

  const onImgChange = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
    setImgPath(e.target.files[0]);
  };

  const onNameChange = (e) => {
    setName(e.target.value);
  };
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
  return [img, name, loading, handleSubmit, onImgChange, onNameChange];
};
export default useAddBrand;
