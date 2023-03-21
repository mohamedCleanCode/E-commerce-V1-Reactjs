import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpesificBrand } from "../../redux/actions/brandsActions";
import { getSpesificCategory } from "../../redux/actions/categoriesActions";
import { getSpecificProduct } from "../../redux/actions/productsActions";

const useProductDetails = (id) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const { category, loading } = useSelector((state) => state.categories);
  const { brand } = useSelector((state) => state.brands);
  let images = product?.images
    ? product.images.map((image) => {
        return {
          original: image,
        };
      })
    : null;
  useEffect(() => {
    dispatch(getSpecificProduct(id));
  }, []);

  useEffect(() => {
    if (product) {
      dispatch(getSpesificCategory(product.category));
      dispatch(getSpesificBrand(product.brand));
    }
  }, [product]);

  return [product, images, category, brand, loading];
};

export default useProductDetails;
