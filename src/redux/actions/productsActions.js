import useGetData from "../../hooks/useGetData";
import { usePostDataWithImg } from "../../hooks/usePostData";
import { GET_ALL_PRODUCTS, GET_SPECIFIC_PRODUCT, SET_PRODUCT } from "../types";

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
export const getAllProducts = () => async (dispatch) => {
  try {
    const res = await useGetData("/api/v1/products");
    dispatch({
      type: GET_ALL_PRODUCTS,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
export const getSpecificProduct = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products/${id}`);
    dispatch({
      type: GET_SPECIFIC_PRODUCT,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
