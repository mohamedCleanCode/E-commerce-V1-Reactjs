import useDeleteData from "../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import {
  ADD_TO_CART,
  DELETE_CART,
  DELETE_ITEM_FROM_CART,
  ERROR,
  GET_CART,
} from "../types";

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

export const getCart = () => async (dispatch) => {
  try {
    const res = await useGetDataWithToken("/api/v1/cart");
    dispatch({
      type: GET_CART,
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

export const deleteCart = () => async (dispatch) => {
  try {
    const res = await useDeleteData("/api/v1/cart");
    dispatch({
      type: DELETE_CART,
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

export const deleteItemFromCart = (itemId) => async (dispatch) => {
  try {
    const res = await useDeleteData(`/api/v1/cart/${itemId}`);
    dispatch({
      type: DELETE_ITEM_FROM_CART,
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
