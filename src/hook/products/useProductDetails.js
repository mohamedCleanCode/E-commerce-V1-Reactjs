import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificProduct } from "../../redux/actions/productsActions";

const useProductDetails = (id) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  let images = product?.images.map((image) => {
    return {
      original: image,
    };
  });
  useEffect(() => {
    dispatch(getSpecificProduct(id));
  }, []);
  return [product, images];
};

export default useProductDetails;
