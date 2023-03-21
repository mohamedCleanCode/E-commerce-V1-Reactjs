import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpesificBrand } from "../../redux/actions/brandsActions";
import { getSpesificCategory } from "../../redux/actions/categoriesActions";
import {
  getSpecificProduct,
  getSpecificProductsWithCategory,
} from "../../redux/actions/productsActions";

const useProductDetails = (id) => {
  const dispatch = useDispatch();
  const { product, products } = useSelector((state) => state.products);
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
      dispatch(getSpecificProductsWithCategory(product.category));
    }
  }, [product]);

  return [product, images, category, brand, loading, products];
};

export default useProductDetails;
