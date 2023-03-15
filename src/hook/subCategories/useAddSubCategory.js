import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import { getAllCategories } from "../../redux/actions/categoriesActions";
import { setSubCategory } from "../../redux/actions/subCategoriesActions";

const useAddSubCategory = () => {
  const [name, setName] = useState("");
  const [catName, setCatName] = useState("");
  const [loading, setLoading] = useState(false);
  const dispatch = useDispatch();
  const { categories } = useSelector((state) => state.categories);
  const { response: res } = useSelector((state) => state.subCategories);

  const onChangeName = (e) => {
    setName(e.target.value);
  };

  const onChangeCatName = (e) => {
    setCatName(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && catName !== "0") {
      const formData = {
        name,
        category: catName,
      };
      await dispatch(setSubCategory(formData));
      setLoading(true);
    } else {
      notify("Warn", "warn");
    }
  };

  useEffect(() => {
    dispatch(getAllCategories());
    if (loading) {
      setName("");
      setCatName("");
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
  return [
    name,
    loading,
    categories,
    onChangeName,
    onChangeCatName,
    handleSubmit,
  ];
};

export default useAddSubCategory;
