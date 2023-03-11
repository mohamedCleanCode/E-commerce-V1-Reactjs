import { GET_ALL_CATEGORIES, SET_CATEGORY } from "../types";

const intialState = {
  categories: [],
  loading: true,
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
        categories: action.payload,
        loading: false,
      };
    default:
      return state;
  }
};

export default categoriesReducer;
