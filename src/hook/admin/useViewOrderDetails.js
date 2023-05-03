import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrder } from "../../redux/actions/orderActions";
const useViewOrderDetails = (orderId) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);

  const fetchData = async () => {
    await dispatch(getOrder(orderId));
  };

  useEffect(() => {
    fetchData();
  }, []);
  console.log(order);
  return [order];
};

export default useViewOrderDetails;
