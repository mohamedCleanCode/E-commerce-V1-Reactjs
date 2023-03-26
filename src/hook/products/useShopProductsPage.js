import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { searchProductsWithQueryString } from "../../redux/actions/productsActions";

const useShopProductsPage = () => {
  const limit = 8;
  const dispatch = useDispatch();
  const {
    products,
    loading,
    response: res,
  } = useSelector((state) => state.products);

  useEffect(() => {
    getProducts();
  }, []);

  const onPress = (page) => {
    getStorage();
    sortProducts();
    dispatch(
      searchProductsWithQueryString(
        `${priceFrom}&${priceTo}&page=${page}&keyword=${word}&sort=${sort}&limit=${limit}${queryBrands}${queryCategories}`
      )
    );
  };

  const getProducts = async () => {
    getStorage();
    sortProducts();
    await dispatch(
      searchProductsWithQueryString(
        `${priceFrom}&${priceTo}&keyword=${word}&sort=${sort}&limit=${limit}${queryBrands}${queryCategories}`
      )
    );
  };

  let word = "",
    queryCategories = "",
    queryBrands = "",
    priceFrom = "",
    priceTo = "";
  const getStorage = () => {
    if (localStorage.getItem("searchWord")) {
      word = localStorage.getItem("searchWord");
    }
    if (localStorage.getItem("queryCategories")) {
      queryCategories = localStorage.getItem("queryCategories");
    }
    if (localStorage.getItem("queryBrands")) {
      queryBrands = localStorage.getItem("queryBrands");
    }
    if (localStorage.getItem("priceFrom")) {
      priceFrom = localStorage.getItem("priceFrom");
    }
    if (localStorage.getItem("priceTo")) {
      priceTo = localStorage.getItem("priceTo");
    }
  };

  let sortType = "";
  let sort = "";
  const sortProducts = () => {
    if (localStorage.getItem("sortType")) {
      sortType = localStorage.getItem("sortType");
      switch (sortType) {
        case "best saller":
          sort = "-sold";
          break;
        case "best rated":
          sort = "-ratingsQuantity";
          break;
        case "Price from lowest to highest":
          sort = "+price";
          break;
        case "Price from highest to lowest":
          sort = "-price";
          break;
        default:
          sort = "";
      }
    }
  };
  return [products, loading, res, onPress, getProducts];
};

export default useShopProductsPage;
