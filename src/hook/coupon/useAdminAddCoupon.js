import { useState } from "react";

const useAdminAddCoupon = () => {
  const [name, setName] = useState("");
  const [expire, setExpire] = useState("");
  const [discount, setDiscount] = useState("");

  const onChangeName = (e) => {
    let value = e.target.value;
    setName(value);
  };
  const onChangeExpire = (e) => {
    let value = e.target.value;
    setExpire(value);
  };
  const onChangeDiscount = (e) => {
    let value = e.target.value;
    setDiscount(value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, expire, discount);
  };

  return [
    name,
    expire,
    discount,
    onChangeName,
    onChangeExpire,
    onChangeDiscount,
    handleSubmit,
  ];
};

export default useAdminAddCoupon;
