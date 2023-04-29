import {
  CREATE_NEW_ADDRESS,
  DELETE_ADDRESS,
  GET_ALL_ADDRESSES,
  GET_SPECIFIC_ADDRESS,
  UPDATE_ADDRESS,
} from "../types";

const intialState = {
  addresses: {},
  address: {},
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
    case UPDATE_ADDRESS:
      return {
        response: action.payload,
        loading: false,
      };
    case GET_SPECIFIC_ADDRESS:
      return {
        ...state,
        address: action.payload,
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default addressReducer;
