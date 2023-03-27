import { SEND_SIGNUP_DATA } from "../types";

const intialState = {};

const authReducer = (state = intialState, action) => {
  switch (action.type) {
    case SEND_SIGNUP_DATA:
      return state;
    default:
      return state;
  }
};

export default authReducer;
