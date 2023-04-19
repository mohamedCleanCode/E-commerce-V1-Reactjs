import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteCart, getCart } from "../../redux/actions/cartActions";

const useCartPage = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(false);

  const clearCart = async () => {
    await dispatch(deleteCart());
    setLoading(true);
  };

  useEffect(() => {
    dispatch(getCart());
  }, []);

  useEffect(() => {
    if (loading) {
      if (cart?.response?.status === 204) {
      }
    }
  }, [loading]);
  return [cart, clearCart];
};

export default useCartPage;
