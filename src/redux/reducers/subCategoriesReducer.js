import { SET_SUB_CATEGORY } from "../types";

const intialState = {
  subCategories: [],
  loading: true,
  response: {},
};

const subCategoriesReducer = (state = intialState, action) => {
  switch (action.type) {
    case SET_SUB_CATEGORY:
      return {
        ...state,
        response: action.payload,
      };
    default:
      return state;
  }
};

export default subCategoriesReducer;
