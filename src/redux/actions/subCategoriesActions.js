import { useGetData } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { GET_SUB_CATEGORIES_OF_CATEGORY, SET_SUB_CATEGORY } from "../types";

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

export const getSubCtegoriesOfCategory = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories/${id}/subcategories`);
    dispatch({
      type: GET_SUB_CATEGORIES_OF_CATEGORY,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
