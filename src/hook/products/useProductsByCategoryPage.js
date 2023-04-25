import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificProductsWithCategory } from "../../redux/actions/productsActions";

const useProductsByCategoryPage = (catID) => {
  const dispatch = useDispatch();
  const {
    products,
    loading,
    response: res,
  } = useSelector((state) => state.products);
  const limit = 8;

  const onPress = async (page) => {
    await dispatch(getSpecificProductsWithCategory(catID, limit, page));
  };

  const getProducts = async () => {
    await dispatch(getSpecificProductsWithCategory(catID, limit, 1));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return [products, loading, res, onPress];
};

export default useProductsByCategoryPage;
