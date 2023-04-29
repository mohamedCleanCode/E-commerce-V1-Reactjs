import { useGetDataWithToken } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { CREATE_CHECK_ORDER, ERROR, GET_ORDERS } from "../types";

export const createCashOrder = (cartId, formData) => async (dispatch) => {
  try {
    const res = await usePostData(`/api/v1/orders/${cartId}`, formData);
    dispatch({
      type: CREATE_CHECK_ORDER,
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

export const getOrders = () => async (dispatch) => {
  try {
    const res = await useGetDataWithToken(`/api/v1/orders`);
    dispatch({
      type: GET_ORDERS,
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
