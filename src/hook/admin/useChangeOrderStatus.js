import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import {
  updateDeliverStatus,
  updatePayStatus,
} from "../../redux/actions/orderActions";

const useChangeOrderStatus = (orderId) => {
  const dispatch = useDispatch();
  const order = useSelector((state) => state.order);
  const [loading, setLoading] = useState(false);
  const [pay, setPay] = useState("0");
  const [deliver, setDeliver] = useState("0");

  const onChangePay = (e) => {
    let value = e.target.value;
    setPay(value);
  };

  const onChangeDeliver = (e) => {
    let value = e.target.value;
    setDeliver(value);
  };

  const changeOrderPay = async () => {
    console.log(pay);
    if (pay === "true") {
      await dispatch(updatePayStatus(orderId));
      setLoading(true);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      notify("Warn", "warn");
    }
  };

  const changeOrderDeliver = async () => {
    if (deliver === "true") {
      await dispatch(updateDeliverStatus(orderId));
      setLoading(true);
      setTimeout(() => {
        window.location.reload();
      }, 1500);
    } else {
      notify("Warn", "warn");
    }
  };

  useEffect(() => {
    if (loading) {
      if (order) {
        if (order?.response?.status === 200) {
          notify("Success", "success");
        } else {
          notify("Error", "error");
        }
      }
      console.log(order);
    }
  }, [loading]);
  return [onChangePay, changeOrderPay, onChangeDeliver, changeOrderDeliver];
};

export default useChangeOrderStatus;
