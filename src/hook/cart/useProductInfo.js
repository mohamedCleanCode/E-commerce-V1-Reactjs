import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import { addToCart } from "../../redux/actions/cartActions";

const useProductInfo = (proId) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);

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
          return notify("Success", "success");
        } else {
          return notify("Something went wrong", "warn");
        }
      }
    }
  }, [loading]);

  return [addProductToCart];
};

export default useProductInfo;
