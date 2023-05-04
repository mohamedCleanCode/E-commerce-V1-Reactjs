import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const useChangeOrderStatus = () => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const [pay, setPay] = useState();

  const onChangePay = (e) => {
    let value = e.target.value;
    setPay(value);
  };

  const changeOrderPay = async () => {
    await dispatch();
  };
  return [onChangePay];
};

export default useChangeOrderStatus;
