import { useGetDataWithToken } from "../../hooks/useGetData";
import { usePutData } from "../../hooks/usePutData";
import { ERROR, GET_ORDER, GET_ORDERS, UPDATE_PAY_STATUS } from "../types";

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

export const getOrder = (orderId) => async (dispatch) => {
  try {
    const res = await usePutData(`/api/v1/orders/${orderId}`);
    dispatch({
      type: GET_ORDER,
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

export const updatePayStatus = (orderId) => async (dispatch) => {
  try {
    const res = await useGetDataWithToken(`/api/v1/orders/${orderId}`);
    dispatch({
      type: UPDATE_PAY_STATUS,
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
