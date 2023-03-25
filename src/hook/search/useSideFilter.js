import { useEffect, useState } from "react";
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

  const [categoriesId, setCategoriesId] = useState([]);
  const clickInputCats = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setCategoriesId([]);
    } else {
      if (e.target.checked) {
        setCategoriesId([...categoriesId, value]);
      } else {
        setCategoriesId([...categoriesId.filter((catId) => catId !== value)]);
      }
    }
  };

  const [brandsId, setBrandsId] = useState([]);
  const clickInputBrands = (e) => {
    let value = e.target.value;
    if (value === "0") {
      setBrandsId([]);
    } else {
      if (e.target.checked) {
        setBrandsId([...brandsId, value]);
      } else {
        setBrandsId([...brandsId.filter((brandId) => brandId !== value)]);
      }
    }
  };
  console.log(brandsId);
  return [categories, brands, clickInputCats, clickInputBrands];
};

export default useSideFilter;
