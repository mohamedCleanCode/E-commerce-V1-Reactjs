import { GET_ALL_CATEGORIES, SET_CATEGORY, SET_SUB_CATEGORY } from "../types";

const intialState = {
  categories: [],
  loading: true,
  response: {},
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
      };
    case SET_SUB_CATEGORY:
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
