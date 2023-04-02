import { DELETE_REVIEW, ERROR, GET_ALL_REVIEWS, SET_RATE_POST } from "../types";

const intialState = {
  reviews: {},
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
    case GET_ALL_REVIEWS:
      return {
        reviews: action.payload,
        response: action.payload,
        loading: false,
      };
    case DELETE_REVIEW:
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
