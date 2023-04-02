import { useGetData } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { ERROR, GET_ALL_REVIEWS, SET_RATE_POST } from "../types";

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

export const getAllReviews = (productId) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products/${productId}/reviews`);
    dispatch({
      type: GET_ALL_REVIEWS,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};
