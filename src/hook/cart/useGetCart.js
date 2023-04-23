import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteItemFromCart, getCart } from "../../redux/actions/cartActions";

const useGetCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const removeItemFromCart = async (itemId) => {
    await dispatch(deleteItemFromCart(itemId));
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCart());
    };
    fetchData();
  }, []);

  return [cart, removeItemFromCart];
};

export default useGetCart;
