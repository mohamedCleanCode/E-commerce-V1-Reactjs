import { GET_ORDERS } from "../types";

const intialState = {
  orders: {},
  loading: true,
  response: {},
  errors: {},
};

const orderReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ORDERS: {
      return {
        orders: action.payload,
        response: action.payload,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
};

export default orderReducer;
