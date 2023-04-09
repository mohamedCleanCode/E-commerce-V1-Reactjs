import { CREATE_NEW_ADDRESS } from "../types";

const intialState = {
  response: {},
  loading: true,
  errors: {},
};

const addressReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_NEW_ADDRESS:
      return {
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default addressReducer;
