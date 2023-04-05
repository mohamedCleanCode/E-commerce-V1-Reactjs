import useDeleteData from "../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { CREATE_COUPON, ERROR, GET_ALL_COUPONS, REMOVE_COUPON } from "../types";

export const createCoupon = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/v1/coupons", formData);
    dispatch({
      type: CREATE_COUPON,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};

export const getAllCoupons = () => async (dispatch) => {
  try {
    const res = await useGetDataWithToken("/api/v1/coupons");
    dispatch({
      type: GET_ALL_COUPONS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};

export const removeCoupon = (couponId) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/coupons/${couponId}`);
    dispatch({
      type: REMOVE_COUPON,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};
