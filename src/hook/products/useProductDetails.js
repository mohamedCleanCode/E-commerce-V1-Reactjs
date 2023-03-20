import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpesificBrand } from "../../redux/actions/brandsActions";
import { getSpesificCategory } from "../../redux/actions/categoriesActions";
import { getSpecificProduct } from "../../redux/actions/productsActions";

const useProductDetails = (id) => {
  const dispatch = useDispatch();
  const { product } = useSelector((state) => state.products);
  const { category } = useSelector((state) => state.categories);
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
    dispatch(
      getSpesificCategory(product?.category?.length && product.category)
    );
    dispatch(getSpesificBrand(product?.brand?.length && product.brand));
  }, []);
  console.log(product?.category);
  console.log(product?.brand);
  return [product, images, category, brand];
};

export default useProductDetails;
