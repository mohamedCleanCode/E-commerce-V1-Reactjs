import useDeleteData from "../../hooks/useDeleteData";
import { useGetData } from "../../hooks/useGetData";
import { usePostDataWithImg } from "../../hooks/usePostData";
import { usePutDataWithImg } from "../../hooks/usePutData";
import {
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_SPECIFIC_PRODUCT,
  GET_SPECIFIC_PRODUCTS_WITH_CATEGORY,
  SET_PRODUCT,
} from "../types";

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
export const getAllProducts = (limit, page) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/v1/products${limit ? `?limit=${limit}&page=${page}` : ""}`
    );
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
export const getSpecificProductsWithCategory = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/products/?category=${id}`);
    dispatch({
      type: GET_SPECIFIC_PRODUCTS_WITH_CATEGORY,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
export const deleteProduct = (id) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/products/${id}`);
    dispatch({
      type: DELETE_PRODUCT,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
export const editProduct = (id, formData) => async (dispatch) => {
  try {
    const res = await usePutDataWithImg(`/api/v1/products/${id}`, formData);
    dispatch({
      type: EDIT_PRODUCT,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
export const searchProductsWithQueryString =
  (queryString) => async (dispatch) => {
    try {
      const res = await useGetData(`/api/v1/products?${queryString}`);
      dispatch({
        type: GET_ALL_PRODUCTS,
        payload: res,
      });
    } catch (error) {
      console.log(error);
    }
  };
