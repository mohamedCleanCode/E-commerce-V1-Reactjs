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

  const onPress = (page) => {
    let word = localStorage.getItem("searchWord");
    dispatch(
      searchProductsWithQueryString(
        `limit=${limit}&page=${page}&keyword=${word ? word : ""}`
      )
    );
  };

  const getProducts = async () => {
    let word = localStorage.getItem("searchWord");
    await dispatch(
      searchProductsWithQueryString(
        `limit=${limit}&keyword=${word ? word : ""}`
      )
    );
  };

  useEffect(() => {
    getProducts();
  }, []);
  return [products, loading, res, onPress, getProducts];
};

export default useShopProductsPage;
