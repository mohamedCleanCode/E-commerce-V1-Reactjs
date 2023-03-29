import { CREATE_NEW_USER, ERROR, GET_LOGGED_USER, LOGIN_USER } from "../types";

const intialState = {
  user: {},
  currentUser: {},
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
    case LOGIN_USER:
      return {
        user: action.payload.data,
        response: action.payload,
        loading: false,
      };
    case GET_LOGGED_USER:
      return {
        currentUser: action.payload.data,
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
