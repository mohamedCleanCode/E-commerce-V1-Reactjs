import { usePostData } from "../../hooks/usePostData";
import { CREATE_COUPON, ERROR } from "../types";

export const createCoupon = (formData) => async (dispatch) => {
  try {
    const res = await usePostData();
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
