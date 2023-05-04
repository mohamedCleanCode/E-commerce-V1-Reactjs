import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { updatePayStatus } from "../../redux/actions/orderActions";

const useChangeOrderStatus = (orderId) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const [loading, setLoading] = useState(false);
  const [pay, setPay] = useState("0");

  const onChangePay = (e) => {
    let value = e.target.value;
    setPay(value);
  };

  const changeOrderPay = async () => {
    console.log(pay);
    await dispatch(updatePayStatus(orderId));
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      console.log(order);
    }
  }, [loading]);
  return [onChangePay, changeOrderPay];
};

export default useChangeOrderStatus;
