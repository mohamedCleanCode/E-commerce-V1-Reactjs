import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getCart } from "../../redux/actions/cartActions";

const useGetCart = () => {
  const dispatch = useDispatch();
  const cart = useSelector((state) => state.cart);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getCart());
    };
    fetchData();
  }, []);

  return [cart];
};

export default useGetCart;
