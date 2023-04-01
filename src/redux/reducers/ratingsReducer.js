import { ERROR, SET_RATE_POST } from "../types";

const intialState = {
  response: {},
  loading: true,
  errors: {},
};

const ratingsReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_RATE_POST:
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

export default ratingsReducer;
