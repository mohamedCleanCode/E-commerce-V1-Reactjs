import useGetData from "../../hooks/useGetData";
import { GET_ALL_CATEGORIES } from "../types";

export const getAllCategories = () => async (dispatch) => {
  try {
    const data = await useGetData("api/v1/categories");
    dispatch({
      type: GET_ALL_CATEGORIES,
      payload: data,
    });
  } catch (error) {
    console.log(error);
  }
};
