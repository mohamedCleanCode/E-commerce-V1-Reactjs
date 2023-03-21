import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllProducts } from "../../redux/actions/productsActions";

const useProductsManagment = () => {
  const dispatch = useDispatch();
  const {
    products,
    loading,
    response: res,
  } = useSelector((state) => state.products);
  const onPress = (page) => {
    dispatch(getAllProducts(10, page));
  };
  useEffect(() => {
    dispatch(getAllProducts(10));
  }, []);
  return [products, loading, res, onPress];
};

export default useProductsManagment;
