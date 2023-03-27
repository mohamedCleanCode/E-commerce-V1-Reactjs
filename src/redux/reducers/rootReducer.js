import { combineReducers } from "redux";
import authReducer from "./authReducer";
import brandsReducer from "./brandsReducer";
import categoriesReducer from "./categoriesReducer";
import productsReducer from "./productsReducer";
import subCategoriesReducer from "./subCategoriesReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  brands: brandsReducer,
  subCategories: subCategoriesReducer,
  products: productsReducer,
  auth: authReducer,
});
export default rootReducer;
