import { usePutData } from "../../hooks/usePutData";
import { CHANGE_USER_PASSWORD, ERROR, UPDATE_USER_PROFILE } from "../types";

export const changeUserPassword = (formData) => async (dispatch) => {
  try {
    const res = await usePutData(`/api/v1/users/changeMyPassword`, formData);
    dispatch({
      type: CHANGE_USER_PASSWORD,
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

export const updateUserProfile = (formData) => async (dispatch) => {
  try {
    const res = await usePutData(`/api/v1/users/updateMe`, formData);
    dispatch({
      type: UPDATE_USER_PROFILE,
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
