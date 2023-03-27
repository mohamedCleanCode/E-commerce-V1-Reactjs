import { CREATE_NEW_USER } from "../types";

const intialState = {
  user: {},
  response: {},
  loading: true,
};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_NEW_USER:
      return {
        user: action.payload,
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default authReducer;
