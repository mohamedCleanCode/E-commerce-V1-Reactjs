import { usePostData } from "../../hooks/usePostData";
import { SET_RATE_POST } from "../types";

export const setRatePost = (productId, formData) => async (dispatch) => {
  try {
    const res = await usePostData(
      `/api/v1/products/${productId}/reviews`,
      formData
    );
    dispatch({
      type: SET_RATE_POST,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: SET_RATE_POST,
      payload: error.response,
    });
  }
};
