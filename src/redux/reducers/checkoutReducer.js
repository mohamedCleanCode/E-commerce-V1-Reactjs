import { CREATE_CHECK_ORDER } from "../types";

const intialState = {
  loading: true,
  response: {},
  errors: {},
};

const checkoutReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CHECK_ORDER: {
      return {
        loading: false,
        response: action.payload,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
};

export default checkoutReducer;
