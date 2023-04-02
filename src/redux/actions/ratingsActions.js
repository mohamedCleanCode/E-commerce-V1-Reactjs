import useDeleteData from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { DELETE_REVIEW, ERROR, GET_ALL_REVIEWS, SET_RATE_POST } from "../types";

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

export const getAllReviews = (productId, limit, page) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/v1/products/${productId}/reviews${
        limit ? `?limit=${limit}&page=${page}` : ""
      }`
    );
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

export const deleteReview = (reviewId) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/reviews/${reviewId}`);
    dispatch({
      type: DELETE_REVIEW,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};
