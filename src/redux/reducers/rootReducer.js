import { combineReducers } from "redux";
import categoriesReducer from "./categoriesReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
});
export default rootReducer;
