import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllCategories } from "../../redux/actions/categoriesActions";

const useHomeCategories = () => {
  const colors = ["#FFD3E8", "#F4DBA5", "#55CFDf", "#0034FF", "#FFD3EB"];
  const { categories, loading } = useSelector((state) => state.categories);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getAllCategories());
  }, []);
  return [colors, categories, loading];
};

export default useHomeCategories;
