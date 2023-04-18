import { ADD_TO_CART, ERROR } from "../types";

const intialState = {
  response: {},
  loading: true,
  errors: {},
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        response: action.payload,
        loading: false,
      };
    case ERROR:
      return {
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
