import { combineReducers } from "redux";
import brandsReducer from "./brandsReducer";
import categoriesReducer from "./categoriesReducer";
import subCategoriesReducer from "./subCategoriesReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  brands: brandsReducer,
  subCategories: subCategoriesReducer,
});
export default rootReducer;
