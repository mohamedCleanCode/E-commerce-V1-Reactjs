import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../redux/actions/brandsActions";

const useBrandsPage = () => {
  const dispatch = useDispatch();
  const {
    brands,
    loading,
    response: res,
  } = useSelector((state) => state.brands);

  const onPress = (page) => {
    dispatch(getAllBrands(8, page));
  };

  useEffect(() => {
    dispatch(getAllBrands(8));
  }, []);

  return [brands, loading, res, onPress];
};

export default useBrandsPage;
