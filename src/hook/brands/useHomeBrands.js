import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getAllBrands } from "../../redux/actions/brandsActions";

const useHomeBrands = () => {
  const { brands, loading } = useSelector((state) => state.brands);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getAllBrands());
  }, []);
  return [brands, loading];
};

export default useHomeBrands;
