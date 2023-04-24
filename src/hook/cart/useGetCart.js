import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  applyCuopon,
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

  const [couponName, setCouponName] = useState();

  const onChangeCouponName = (e) => {
    let value = e.target.value;
    setCouponName(value);
  };

  const applyCuoponHandle = async () => {
    await dispatch(
      applyCuopon({
        couponName,
      })
    );
  };

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCart());
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (cart) {
      if (cart.coupon) {
        setCouponName(cart.coupon);
      }
    }
  }, [cart]);

  return [
    cart,
    removeItemFromCart,
    clearCart,
    couponName,
    onChangeCouponName,
    applyCuoponHandle,
  ];
};

export default useGetCart;
