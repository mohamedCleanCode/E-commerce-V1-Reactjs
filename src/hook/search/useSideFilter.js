import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../redux/actions/brandsActions";
import { getAllCategories } from "../../redux/actions/categoriesActions";

const useSideFilter = () => {
  const { categories } = useSelector((state) => state.categories);
  const { brands } = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllBrands());
      await dispatch(getAllCategories());
    };
    run();
  }, []);
  return [categories, brands];
};

export default useSideFilter;
