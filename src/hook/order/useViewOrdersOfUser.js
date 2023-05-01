import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../redux/actions/orderActions";

const useViewOrdersOfUser = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  const fetchData = async () => {
    await dispatch(getOrders());
  };

  useEffect(() => {
    fetchData();
  }, []);

  return [order];
};

export default useViewOrdersOfUser;
