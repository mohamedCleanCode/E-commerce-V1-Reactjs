import { CREATE_CARD_ORDER, CREATE_CHECK_ORDER, GET_ORDERS } from "../types";

const intialState = {
  orders: {},
  loading: true,
  response: {},
  errors: {},
};

const checkoutReducer = (state = intialState, action) => {
  switch (action.type) {
    case CREATE_CHECK_ORDER: {
      return {
        loading: false,
        response: action.payload,
        errors: action.payload,
      };
    }
    case GET_ORDERS: {
      return {
        orders: action.payload,
        response: action.payload,
        errors: action.payload,
      };
    }
    case CREATE_CARD_ORDER: {
      return {
        response: action.payload,
        errors: action.payload,
      };
    }
    default:
      return state;
  }
};

export default checkoutReducer;
