import useDeleteData from "../../hooks/useDeleteData";
import { usePostData } from "../../hooks/usePostData";
import {
  ERROR,
  REMOVE_PRODUCT_TO_WISHLIST,
  SET_PRODUCT_TO_WISHLIST,
} from "../types";

export const setProductToWishList = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/v1/wishlist", formData);
    dispatch({
      type: SET_PRODUCT_TO_WISHLIST,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};

export const removeProductToWishList = (productId) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/wishlist/${productId}`);
    dispatch({
      type: REMOVE_PRODUCT_TO_WISHLIST,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};
