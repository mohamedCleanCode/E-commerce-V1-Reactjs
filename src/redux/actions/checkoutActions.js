import { useGetDataWithToken } from "../../hooks/useGetData";
import { usePostData } from "../../hooks/usePostData";
import { CREATE_CARD_ORDER, CREATE_CHECK_ORDER, ERROR } from "../types";

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

export const createCardOrder = (cartId, formData) => async (dispatch) => {
  try {
    const res = await useGetDataWithToken(
      `/api/v1/orders/checkout-session/${cartId}`,
      formData
    );
    dispatch({
      type: CREATE_CARD_ORDER,
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
