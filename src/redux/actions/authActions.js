import { useGetDataWithToken } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import {
  CREATE_NEW_USER,
  ERROR,
  FORGOT_PASSWORD,
  GET_LOGGED_USER,
  LOGIN_USER,
  VERIFY_PASSWORD,
} from "../types";

export const createNewUser = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/v1/auth/signup", formData);
    dispatch({
      type: CREATE_NEW_USER,
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
export const loginUser = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/v1/auth/login", formData);
    dispatch({
      type: LOGIN_USER,
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
export const getLoggedUser = () => async (dispatch) => {
  try {
    const res = await useGetDataWithToken("/api/v1/users/getMe");
    dispatch({
      type: GET_LOGGED_USER,
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
export const forgotPassword = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/v1/auth/forgotPasswords", formData);
    dispatch({
      type: FORGOT_PASSWORD,
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
export const verifyPassword = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/v1/auth/verifyResetCode", formData);
    dispatch({
      type: VERIFY_PASSWORD,
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
