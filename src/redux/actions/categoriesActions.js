import baseUrl from "../../Api/baseURL";
import { GET_ALL_CATEGORIES } from "../types";

const getAllCategories = (data) => {
  return {
    type: GET_ALL_CATEGORIES,
    payload: data,
  };
};

export const fetchData = () => {
  return async (dispatch) => {
    const res = await baseUrl.get("/api/v1/categories");
    const data = await res.data;
    dispatch(getAllCategories(data));
  };
};
