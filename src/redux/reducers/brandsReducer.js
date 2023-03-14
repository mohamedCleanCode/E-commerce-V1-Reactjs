import { GET_ALL_BRANDS, SET_BRAND } from "../types";

const intialState = {
  brands: [],
  loading: true,
  response: {},
};

const brandsReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_BRANDS:
      return {
        ...state,
        loading: false,
        brands: action.payload.data,
        response: action.payload,
      };
    case SET_BRAND:
      return {
        ...state,
        loading: false,
        response: action.payload,
      };
    default:
      return state;
  }
};

export default brandsReducer;
