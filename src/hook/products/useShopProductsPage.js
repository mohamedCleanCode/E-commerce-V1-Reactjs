import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsActions";

const useShopProductsPage = () => {
  const dispatch = useDispatch();
  const {
    products,
    loading,
    response: res,
  } = useSelector((state) => state.products);
  const onPress = (page) => {
    dispatch(getAllProducts(8, page));
  };
  useEffect(() => {
    dispatch(getAllProducts(8));
  }, []);
  return [products, loading, res, onPress];
};

export default useShopProductsPage;
