import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  deleteCart,
  deleteItemFromCart,
  getCart,
  updateItemQuantity,
} from "../../redux/actions/cartActions";

const useCartPage = (item) => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);

  const [loading, setLoading] = useState(false);

  const clearCart = async () => {
    await dispatch(deleteCart());
    setLoading(true);
  };

  const removeItem = async (itemId) => {
    await dispatch(deleteItemFromCart(itemId));
  };

  const [itemCount, setItemCount] = useState(item?.count);

  const onChangeCount = (e) => {
    let value = e.target.value;
    setItemCount(+value);
  };

  const updateItemCount = async (itemId, itemCount) => {
    await dispatch(
      updateItemQuantity(itemId, {
        count: itemCount,
      })
    );
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

  useEffect(() => {
    if (itemCount !== item?.count) {
      updateItemCount(item?._id, itemCount);
      dispatch(getCart());
    }
  }, [itemCount]);
  return [cart, clearCart, removeItem, itemCount, onChangeCount];
};

export default useCartPage;
