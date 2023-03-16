import { usePostDataWithImg } from "../../hooks/usePostData";
import { SET_PRODUCT } from "../types";

export const setProduct = (formData) => async (dispatch) => {
  try {
    const res = await usePostDataWithImg("/api/v1/products", formData);
    dispatch({
      type: SET_PRODUCT,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
