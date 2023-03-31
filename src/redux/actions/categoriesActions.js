import { useGetData } from "../../hooks/useGetData";
import { usePostDataWithImg } from "../../hooks/usePostData";
import {
  ERROR,
  GET_ALL_CATEGORIES,
  GET_SPESIFIC_CATEGORY,
  SET_CATEGORY,
} from "../types";

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
    dispatch({
      type: ERROR,
      payload: error.response,
    });
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
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};
export const getSpesificCategory = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/categories/${id}`);
    dispatch({
      type: GET_SPESIFIC_CATEGORY,
      payload: res,
    });
  } catch (error) {
    dispatch({
      type: ERROR,
      payload: error.response,
    });
  }
};
