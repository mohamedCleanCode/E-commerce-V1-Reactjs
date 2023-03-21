import { GET_ALL_BRANDS, GET_SPESIFIC_BRAND, SET_BRAND } from "../types";

const intialState = {
  brands: [],
  loading: true,
  response: {},
  brand: {},
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
    case GET_SPESIFIC_BRAND:
      return {
        brand: action.payload.data,
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default brandsReducer;
