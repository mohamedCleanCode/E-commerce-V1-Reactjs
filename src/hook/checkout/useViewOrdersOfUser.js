import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/checkoutActions";

const useViewOrdersOfUser = () => {
  const dispatch = useDispatch();
  const checkout = useSelector((state) => state.checkout);

  const fetchData = async () => {
    await dispatch(getOrders());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [checkout];
};

export default useViewOrdersOfUser;
