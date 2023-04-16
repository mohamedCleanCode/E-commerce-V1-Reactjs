import { CHANGE_USER_PASSWORD } from "../types";

const intialState = {
  profile: {},
  response: {},
  loading: true,
  errors: {},
};

const profileReducer = (state = intialState, action) => {
  switch (action.type) {
    case CHANGE_USER_PASSWORD:
      return {
        profile: action.payload.data,
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default profileReducer;
