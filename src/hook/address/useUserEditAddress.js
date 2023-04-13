import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import {
  getSpecificAddress,
  updateAddress,
} from "../../redux/actions/addressActions";

const useUserEditAddress = (id) => {
  const dispatch = useDispatch();
  const { address, response } = useSelector((state) => state.address);
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
      updateAddress(id, {
        alias,
        details,
        phone,
        city,
        postalCode,
      })
    );
    setLoading(true);
  };

  useEffect(() => {
    if (address?.data) {
      setAlias(address.data.alias);
      setDetails(address.data.details);
      setPhone(address.data.phone);
      setCity(address.data.city);
      setPostalCode(address.data.postalCode);
    }
  }, [address]);

  useEffect(() => {
    if (loading) {
      if (response) {
        if (response?.status === 200) {
          notify("Updated", "success");
          return;
        }
      }
    }
  }, [loading, response]);

  useEffect(() => {
    const fetchData = async () => {
      await dispatch(getSpecificAddress(id));
    };
    fetchData();
  }, []);

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
  ];
};

export default useUserEditAddress;
