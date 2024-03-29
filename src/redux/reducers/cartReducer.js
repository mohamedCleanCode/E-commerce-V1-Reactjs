import {
  ADD_TO_CART,
  APPLY_CUOPON,
  DELETE_CART,
  DELETE_ITEM_FROM_CART,
  ERROR,
  GET_CART,
  UPDATE_ITEM_QUANTITY,
} from "../types";

const intialState = {
  numOfCartItems: 0,
  totalCartPrice: 0,
  coupon: "",
  totalAfterDiscount: 0,
  items: [],
  getCart: {},
  response: {},
  loading: true,
  errors: {},
};

const cartReducer = (state = intialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return {
        response: action.payload,
        loading: false,
      };
    case GET_CART:
      return {
        numOfCartItems: action.payload.numOfCartItems,
        totalCartPrice: action.payload.data.totalCartPrice,
        coupon: action.payload.data.coupon,
        totalAfterDiscount: action.payload.data.totalAfterDiscount,
        items: action.payload.data.products,
        getCart: action.payload,
        response: action.payload,
        loading: false,
      };
    case DELETE_ITEM_FROM_CART:
      return {
        numOfCartItems: action.payload.data.numOfCartItems,
        totalCartPrice: action.payload.data.data.totalCartPrice,
        coupon: action.payload.data.data.coupon,
        totalAfterDiscount: action.payload.data.data.totalAfterDiscount,
        items: action.payload.data.data.products,
        response: action.payload,
        loading: false,
      };
    case DELETE_CART:
      return {
        response: action.payload,
        loading: false,
      };
    case UPDATE_ITEM_QUANTITY:
      return {
        numOfCartItems: action.payload.data.numOfCartItems,
        totalCartPrice: action.payload.data.data.totalCartPrice,
        coupon: action.payload.data.data.coupon,
        totalAfterDiscount: action.payload.data.data.totalAfterDiscount,
        items: action.payload.data.data.products,
        response: action.payload,
        loading: false,
      };
    case APPLY_CUOPON:
      return {
        numOfCartItems: action.payload.data.numOfCartItems,
        totalCartPrice: action.payload.data.data.totalCartPrice,
        coupon: action.payload.data.data.coupon,
        totalAfterDiscount: action.payload.data.data.totalAfterDiscount,
        items: action.payload.data.data.products,
        response: action.payload,
        loading: false,
      };
    case ERROR:
      return {
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
