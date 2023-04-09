import { usePostData } from "../../hooks/usePostData";
import { CREATE_NEW_ADDRESS, ERROR } from "../types";

export const createNewUser = (formData) => async (dispatch) => {
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
