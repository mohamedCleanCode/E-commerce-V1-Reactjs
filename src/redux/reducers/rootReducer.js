import { combineReducers } from "redux";
import brandsReducer from "./brandsReducer";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  brands: brandsReducer,
});
export default rootReducer;
