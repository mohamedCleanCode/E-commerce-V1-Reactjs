import { REMOVE_PRODUCT_TO_WISHLIST, SET_PRODUCT_TO_WISHLIST } from "../types";

const intialState = {
  response: {},
  loading: true,
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
    default:
      return state;
  }
};

export default wishlistReducer;
