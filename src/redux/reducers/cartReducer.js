import { ADD_TO_CART, DELETE_CART, ERROR, GET_CART } from "../types";

const intialState = {
  totalCartPrice: 0,
  items: [],
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
        totalCartPrice: action.payload.data.totalCartPrice,
        items: action.payload.data,
        numsOfCartItems: action.payload.numOfCartItems,
        response: action.payload,
        loading: false,
      };
    case DELETE_CART:
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
