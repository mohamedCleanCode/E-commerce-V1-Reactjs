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
    let word = localStorage.getItem("searchWord");
    sortProducts();
    dispatch(
      searchProductsWithQueryString(
        `sort=${sort}&page=${page}&keyword=${word ? word : ""}&limit=${limit}`
      )
    );
  };

  const getProducts = async () => {
    let word = localStorage.getItem("searchWord");
    sortProducts();
    await dispatch(
      searchProductsWithQueryString(
        `sort=${sort}&keyword=${word ? word : ""}&limit=${limit}`
      )
    );
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
        case "rice from highest to lowest":
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
