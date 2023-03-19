import { SET_PRODUCT } from "../types";

const intialState = {
  products: [],
  loading: true,
  response: {},
};

const productsReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_PRODUCT:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default productsReducer;
