import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../hook/useNotification";
import { getSpecificAddress } from "../../redux/actions/addressActions";
import {
  createCardOrder,
  createCashOrder,
} from "../../redux/actions/checkoutActions";

const usePayCash = () => {
  const [choosenAddress, setChoosenAddress] = useState();
  const dispatch = useDispatch();
  const { address, response } = useSelector((state) => state.address);
  const cart = useSelector((state) => state.cart.getCart);
  const checkout = useSelector((state) => state.checkout);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const [payMethod, setPayMethod] = useState("");

  const onChangePayMethod = (e) => {
    let value = e.target.value;
    setPayMethod(value);
  };

  const onChangeAddress = (e) => {
    let value = e.target.value;
    setChoosenAddress(value);
  };

  const createOrderCash = async () => {
    if (!address) {
      return notify("Please choose adress", "warn");
    }
    await dispatch(
      createCashOrder(cart?.data?._id, {
        shippingAddress: {
          details: address.data.details,
          phone: address.data.phone,
          city: address.data.city,
          postalCode: address.data.postalCode,
        },
      })
    );
    setLoading(true);
  };

  const createOrderCard = async () => {
    if (!address) {
      return notify("Please choose adress", "warn");
    }
    await dispatch(
      createCardOrder(cart?.data?._id, {
        shippingAddress: {
          details: address.data.details,
          phone: address.data.phone,
          city: address.data.city,
          postalCode: address.data.postalCode,
        },
      })
    );
    setLoading(true);
  };

  const onSubmitMethod = () => {
    if (payMethod === "cash") {
      createOrderCash();
    } else if (payMethod === "card") {
      createOrderCard();
    } else {
      notify("Please Choose A Method", "warn");
    }
  };

  useEffect(() => {
    if (choosenAddress) {
      if (choosenAddress !== "0") {
        fetchData(choosenAddress);
      }
    }
  }, [choosenAddress]);

  useEffect(() => {
    if (loading) {
      if (checkout?.response?.status === 201) {
        notify("Success", "success");
        setTimeout(() => {
          navigate("/user/orders-managment");
        }, 1500);
      } else if (checkout?.response?.status === "success") {
        console.log(checkout?.response);
        window.open(checkout?.response?.session?.url);
      } else {
        notify("Something went wrong", "error");
      }
    }
  }, [loading]);

  const fetchData = async (id) => {
    await dispatch(getSpecificAddress(id));
  };

  return [
    choosenAddress,
    onChangeAddress,
    onSubmitMethod,
    payMethod,
    onChangePayMethod,
  ];
};

export default usePayCash;
