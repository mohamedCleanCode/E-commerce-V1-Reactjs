import { usePostData } from "../../hooks/usePostData";
import { ADD_TO_CART, ERROR } from "../types";

export const addToCart = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/v1/cart", formData);
    dispatch({
      type: ADD_TO_CART,
      payload: res,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};
