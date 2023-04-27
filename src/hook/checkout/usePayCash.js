import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getSpecificAddress } from "../../redux/actions/addressActions";

const usePayCash = () => {
  const [choosenAddress, setChoosenAddress] = useState();
  const dispatch = useDispatch();
  const { address, response } = useSelector((state) => state.address);
  const cart = useSelector((state) => state.cart.getCart);

  const onChangeAddress = (e) => {
    let value = e.target.value;
    if (value !== "0") {
      fetchData(value);
    }
  };

  const handleSubmit = () => {
    console.log(address);
    console.log(cart);
  };

  const fetchData = async (id) => {
    await dispatch(getSpecificAddress(id));
  };

  return [choosenAddress, onChangeAddress, handleSubmit];
};

export default usePayCash;
