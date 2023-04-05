import { CREATE_COUPON, ERROR } from "../types";

const intialState = {
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
