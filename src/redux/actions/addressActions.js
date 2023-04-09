import { useGetDataWithToken } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { CREATE_NEW_ADDRESS, ERROR, GET_ALL_ADDRESSES } from "../types";

export const createNewAddress = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/v1/addresses", formData);
    dispatch({
      type: CREATE_NEW_ADDRESS,
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

export const getAllAddresses = () => async (dispatch) => {
  try {
    const res = await useGetDataWithToken("/api/v1/addresses");
    dispatch({
      type: GET_ALL_ADDRESSES,
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
