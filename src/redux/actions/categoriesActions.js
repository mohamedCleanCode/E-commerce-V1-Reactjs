import useGetData from "../../hooks/useGetData";
import { usePostDataWithImg } from "../../hooks/usePostData";
import { GET_ALL_CATEGORIES, SET_CATEGORY } from "../types";

export const getAllCategories = (limit, page) => async (dispatch) => {
  try {
    const data = await useGetData(
      `/api/v1/categories${limit ? `?limit=${limit}&page=${page}` : ""}`
    );
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
export const setCategory = (formData) => async (dispatch) => {
  try {
    const res = await usePostDataWithImg(`/api/v1/categories`, formData);
    dispatch({
      type: SET_CATEGORY,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
