import useGetData from "../../hooks/useGetData";
import usePostData from "../../hooks/usePostData";
import { GET_ALL_BRANDS, SET_BRAND } from "../types";

export const getAllBrands = (limit, page) => async (dispatch) => {
  try {
    const res = await useGetData("/api/v1/brands");
    dispatch({
      type: GET_ALL_BRANDS,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setBrand = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/v1/brands", formData);
    dispatch({
      type: SET_BRAND,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
