import { useGetData } from "../../hooks/useGetData";
import { usePostDataWithImg } from "../../hooks/usePostData";
import { GET_ALL_BRANDS, GET_SPESIFIC_BRAND, SET_BRAND } from "../types";

export const getAllBrands = (limit, page) => async (dispatch) => {
  try {
    const res = await useGetData(
      `/api/v1/brands${limit ? `?limit=${limit}&page=${page}` : ""}`
    );
    dispatch({
      type: GET_ALL_BRANDS,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const setBrand = (formData) => async (dispatch) => {
  try {
    const res = await usePostDataWithImg("/api/v1/brands", formData);
    dispatch({
      type: SET_BRAND,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};

export const getSpesificBrand = (id) => async (dispatch) => {
  try {
    const res = await useGetData(`/api/v1/brands/${id}`);
    dispatch({
      type: GET_SPESIFIC_BRAND,
      payload: res,
    });
  } catch (error) {
    console.log(error);
  }
};
