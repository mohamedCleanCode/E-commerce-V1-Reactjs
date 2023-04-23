import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCart,
  deleteItemFromCart,
  getCart,
} from "../../redux/actions/cartActions";

const useGetCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const removeItemFromCart = async (itemId) => {
    await dispatch(deleteItemFromCart(itemId));
  };

  const clearCart = async () => {
    await dispatch(deleteCart());
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCart());
    };
    fetchData();
  }, []);

  return [cart, removeItemFromCart, clearCart];
};

export default useGetCart;
