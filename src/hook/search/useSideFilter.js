import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../redux/actions/brandsActions";
import { getAllCategories } from "../../redux/actions/categoriesActions";
import useShopProductsPage from "../products/useShopProductsPage";

const useSideFilter = () => {
  const { categories } = useSelector((state) => state.categories);
  const { brands } = useSelector((state) => state.brands);
  const dispatch = useDispatch();
  const [products, loading, res, onPress, getProducts] = useShopProductsPage();

  useEffect(() => {
    const run = async () => {
      await dispatch(getAllCategories());
      await dispatch(getAllBrands());
    };
    run();
  }, []);

  let queryCategories = "";
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

  useEffect(() => {
    queryCategories = categoriesId
      .map((catId) => `&category[in][]=${catId}`)
      .join("");
    localStorage.setItem("queryCategories", queryCategories);
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [categoriesId]);

  let queryBrands = "";
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

  useEffect(() => {
    queryBrands = brandsId.map((brandId) => `&brand[in][]=${brandId}`).join("");
    localStorage.setItem("queryBrands", queryBrands);
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [brandsId]);

  const [priceFrom, setPriceFrom] = useState(0);
  const onChangePriceFrom = (e) => {
    let value = e.target.value;
    localStorage.setItem("priceFrom", "price[gte]=" + value);
    setPriceFrom(value);
  };

  const [priceTo, setPriceTo] = useState(0);
  const onChangePriceTo = (e) => {
    let value = e.target.value;
    localStorage.setItem("priceTo", "price[lte]=" + value);
    setPriceTo(value);
  };

  useEffect(() => {
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, [priceFrom, priceTo]);
  return [
    categories,
    brands,
    clickInputCats,
    clickInputBrands,
    onChangePriceFrom,
    onChangePriceTo,
  ];
};

export default useSideFilter;
