import {
  CREATE_NEW_ADDRESS,
  DELETE_ADDRESS,
  GET_ALL_ADDRESSES,
} from "../types";

const intialState = {
  addresses: {},
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
    case GET_ALL_ADDRESSES:
      return {
        addresses: action.payload,
        response: action.payload,
        loading: false,
      };
    case DELETE_ADDRESS:
      return {
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default addressReducer;
