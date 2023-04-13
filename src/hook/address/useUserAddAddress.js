import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import {
  createNewAddress,
  deleteAddress,
  getAllAddresses,
} from "../../redux/actions/addressActions";

const useUserAddAddress = () => {
  const dispatch = useDispatch();
  const address = useSelector((state) => state.address);
  const [loading, setLoading] = useState(false);
  const [alias, setAlias] = useState("");
  const [details, setDetails] = useState("");
  const [phone, setPhone] = useState("");
  const [city, setCity] = useState("");
  const [postalCode, setPostalCode] = useState("");

  const onChangeAlias = (e) => {
    let value = e.target.value;
    setAlias(value);
  };
  const onChangeDetails = (e) => {
    let value = e.target.value;
    setDetails(value);
  };
  const onChangePhone = (e) => {
    let value = e.target.value;
    setPhone(value);
  };
  const onChangeCity = (e) => {
    let value = e.target.value;
    setCity(value);
  };
  const onChangePostalCode = (e) => {
    let value = e.target.value;
    setPostalCode(value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!alias || !details || !phone || !city) {
      return notify("Please Fill The Fieldes", "warn");
    }
    await dispatch(
      createNewAddress({
        alias,
        details,
        phone,
        city,
        postalCode,
      })
    );
    setLoading(true);
  };

  const removeAddress = async (id) => {
    await dispatch(deleteAddress(id));
    await dispatch(getAllAddresses());
  };

  useEffect(() => {
    if (loading) {
      if (address) {
        if (address.response?.status === 200) {
          notify("Created", "success");
          setAlias("");
          setDetails("");
          setPhone("");
          setCity("");
          setPostalCode("");
          return;
        }
      }
    }
  }, [loading, address]);

  return [
    alias,
    details,
    phone,
    city,
    postalCode,
    onChangeAlias,
    onChangeDetails,
    onChangePhone,
    onChangeCity,
    onChangePostalCode,
    handleSubmit,
    removeAddress,
  ];
};

export default useUserAddAddress;
