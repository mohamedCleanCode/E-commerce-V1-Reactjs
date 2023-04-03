import { usePostData } from "../../hooks/usePostData";
import { ERROR, SET_PRODUCT_TO_WISHLIST } from "../types";

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
