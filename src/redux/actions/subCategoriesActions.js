import { usePostData } from "../../hooks/usePostData";
import { SET_SUB_CATEGORY } from "../types";

export const setSubCategory = (formData) => async (dispatch) => {
  try {
    const res = await usePostData(`/api/v1/subcategories`, formData);
    dispatch({
      type: SET_SUB_CATEGORY,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
