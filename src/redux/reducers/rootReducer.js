import { combineReducers } from "redux";
import authReducer from "./authReducer";
import brandsReducer from "./brandsReducer";
import categoriesReducer from "./categoriesReducer";
import couponReducer from "./couponReducer";
import productsReducer from "./productsReducer";
import ratingsReducer from "./ratingsReducer";
import subCategoriesReducer from "./subCategoriesReducer";
import wishlistReducer from "./wishlistReducer";

const rootReducer = combineReducers({
  categories: categoriesReducer,
  brands: brandsReducer,
  subCategories: subCategoriesReducer,
  products: productsReducer,
  auth: authReducer,
  ratings: ratingsReducer,
  wishlist: wishlistReducer,
  coupon: couponReducer,
});
export default rootReducer;
