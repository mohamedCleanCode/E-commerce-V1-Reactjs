import {
  GET_ALL_CATEGORIES,
  GET_SPESIFIC_CATEGORY,
  SET_CATEGORY,
  SET_SUB_CATEGORY,
} from "../types";

const intialState = {
  categories: [],
  loading: true,
  response: {},
  category: {},
};

const categoriesReducer = (state = intialState, action) => {
  switch (action.type) {
    case GET_ALL_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
        loading: false,
      };
    case SET_CATEGORY:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case SET_SUB_CATEGORY:
      return {
        ...state,
        response: action.payload,
        loading: false,
      };
    case GET_SPESIFIC_CATEGORY:
      return {
        ...state,
        category: action.payload.data,
        response: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
