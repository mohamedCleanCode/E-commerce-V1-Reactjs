import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import notify from "../../hook/useNotification";
import {
  createCoupon,
  getAllCoupons,
  removeCoupon,
} from "../../redux/actions/couponActions";

const useAdminAddCoupon = () => {
  const dispatch = useDispatch();
  const coupon = useSelector((state) => state.coupon);
  const [loading, setLoading] = useState(false);
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
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!name || !expire || !discount) {
      return notify("Please fill the fieldes", "warn");
    }
    await dispatch(
      createCoupon({
        name,
        expire,
        discount,
      })
    );
    setLoading(true);
  };

  const deleteCoupon = async (id) => {
    setLoading(true);
    await dispatch(removeCoupon(id));
    await dispatch(getAllCoupons());
    setLoading(true);
  };

  useEffect(() => {
    if (loading) {
      if (coupon) {
        if (coupon.response?.status === 201) {
          notify("Created", "success");
          setName("");
          setExpire("");
          setDiscount("");
          setLoading(false);
          dispatch(getAllCoupons());
          return;
        }
        if (coupon.errors?.data?.status === "fail") {
          setName("");
          setLoading(false);
          return notify(coupon.errors?.data?.message, "warn");
        }
        if (coupon.response?.status === 204) {
          console.log(coupon.response);
        }
      }
    }
  }, [loading, coupon]);

  useEffect(() => {
    const fetchData = async () => await dispatch(getAllCoupons());
    fetchData();
  }, []);

  return [
    name,
    expire,
    discount,
    onChangeName,
    onChangeExpire,
    onChangeDiscount,
    handleSubmit,
    loading,
    coupon,
    deleteCoupon,
  ];
};

export default useAdminAddCoupon;
