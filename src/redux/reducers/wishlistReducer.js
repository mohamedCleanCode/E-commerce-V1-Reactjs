import {
  ERROR,
  GET_ALL_WISHLIST,
  REMOVE_PRODUCT_TO_WISHLIST,
  SET_PRODUCT_TO_WISHLIST,
} from "../types";

const intialState = {
  wishlist: {},
  response: {},
  loading: true,
  errors: {},
};

const wishlistReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_PRODUCT_TO_WISHLIST:
      return {
        response: action.payload,
        loading: false,
      };
    case REMOVE_PRODUCT_TO_WISHLIST:
      return {
        response: action.payload,
        loading: false,
      };
    case GET_ALL_WISHLIST:
      return {
        wishlist: action.payload,
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

export default wishlistReducer;
