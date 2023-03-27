import { usePostData } from "../../hooks/usePostData";
import { SEND_SIGNUP_DATA } from "../types";

export const sendSignupData = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/v1/auth/signup", formData);
    dispatch({
      type: SEND_SIGNUP_DATA,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
