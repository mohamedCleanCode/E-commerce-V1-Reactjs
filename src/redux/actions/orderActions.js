import useDeleteData from "../../hooks/useDeleteData";
import { useGetDataWithToken } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { usePutData } from "../../hooks/usePutData";
import { ERROR, GET_ORDERS } from "../types";

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
