import { ADD_TO_CART, ERROR, GET_CART } from "../types";

const intialState = {
  numsOfCartItems: 0,
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
    case GET_CART:
      return {
        numsOfCartItems: action.payload.numOfCartItems,
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
