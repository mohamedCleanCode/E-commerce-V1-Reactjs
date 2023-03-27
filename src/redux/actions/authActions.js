import { usePostData } from "../../hooks/usePostData";
import { CREATE_NEW_USER } from "../types";

export const createNewUser = (formData) => async (dispatch) => {
  try {
    const res = await usePostData("/api/v1/auth/signup", formData);
    dispatch({
      type: CREATE_NEW_USER,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
