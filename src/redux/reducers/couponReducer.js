import { CREATE_COUPON, ERROR, GET_ALL_COUPONS, REMOVE_COUPON } from "../types";

const intialState = {
  coupons: {},
  loading: true,
  response: {},
  errors: {},
};

const couponReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_COUPON:
      return {
        response: action.payload,
        loading: false,
      };
    case GET_ALL_COUPONS:
      return {
        coupons: action.payload,
        response: action.payload,
        loading: false,
      };
    case REMOVE_COUPON:
      return {
        response: action.payload,
        loading: false,
      };
    case ERROR:
      return {
        errors: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default couponReducer;
