import { CREATE_NEW_USER, ERROR } from "../types";

const intialState = {
  user: {},
  response: {},
  loading: true,
  errors: {},
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        user: action.payload.data,
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

export default authReducer;
