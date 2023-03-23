import {
  DELETE_PRODUCT,
  EDIT_PRODUCT,
  GET_ALL_PRODUCTS,
  GET_SPECIFIC_PRODUCT,
  GET_SPECIFIC_PRODUCTS_WITH_CATEGORY,
  SET_PRODUCT,
} from "../types";

const intialState = {
  products: [],
  loading: true,
  response: {},
  product: {},
};

const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case GET_ALL_PRODUCTS:
      return {
        products: action.payload.data,
        response: action.payload,
        loading: false,
      };
    case GET_SPECIFIC_PRODUCT:
      return {
        ...state,
        product: action.payload.data,
        response: action.payload,
        loading: false,
      };
    case GET_SPECIFIC_PRODUCTS_WITH_CATEGORY:
      return {
        ...state,
        products: action.payload.data,
        response: action.payload,
        loading: false,
      };
    case DELETE_PRODUCT:
      return {
        response: action.payload,
        loading: false,
      };
    case EDIT_PRODUCT:
      return {
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
