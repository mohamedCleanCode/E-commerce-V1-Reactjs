import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoriesActions";

const useCategoriesPage = () => {
  const { categories, loading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories(8));
  }, []);
  const onPress = (page) => {
    dispatch(getAllCategories(8, page));
  };
  return [categories, loading, onPress];
};

export default useCategoriesPage;
