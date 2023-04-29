import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import notify from "../../hook/useNotification";
import { getSpecificAddress } from "../../redux/actions/addressActions";
import { createCashOrder } from "../../redux/actions/checkoutActions";

const usePayCash = () => {
  const [choosenAddress, setChoosenAddress] = useState();
  const dispatch = useDispatch();
  const { address, response } = useSelector((state) => state.address);
  const cart = useSelector((state) => state.cart.getCart);
  const checkout = useSelector((state) => state.checkout);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

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
      } else {
        notify("Something went wrong", "error");
      }
    }
  }, [loading]);

  const fetchData = async (id) => {
    await dispatch(getSpecificAddress(id));
  };

  return [choosenAddress, onChangeAddress, createOrderCash];
};

export default usePayCash;
