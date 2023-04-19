import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import { addToCart, getCart } from "../../redux/actions/cartActions";

const useProductInfo = (proId) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);
  const [numsOfCart, setNumsOfCart] = useState(0);

  const addProductToCart = async (proId) => {
    await dispatch(
      addToCart({
        productId: proId,
      })
    );
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      if (cart) {
        if (cart.response.status === 200) {
          dispatch(getCart());
          return notify("Success", "success");
        } else {
          return notify("Something went wrong", "warn");
        }
      }
    }
  }, [loading]);

  return [addProductToCart, numsOfCart];
};

export default useProductInfo;
