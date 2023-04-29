import { usePostData } from "../../hooks/usePostData";
import { CREATE_CHECK_ORDER, ERROR } from "../types";

const createCashOrder = (cartId, formData) => async (dispatch) => {
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

export default createCashOrder;
