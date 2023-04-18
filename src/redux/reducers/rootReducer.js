import { combineReducers } from "redux";
import addressReducer from "./addressReducer";
import authReducer from "./authReducer";
import brandsReducer from "./brandsReducer";
import cartReducer from "./cartReducer";
import categoriesReducer from "./categoriesReducer";
import couponReducer from "./couponReducer";
import productsReducer from "./productsReducer";
import profileReducer from "./profileReducer";
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
  address: addressReducer,
  profile: profileReducer,
  cart: cartReducer,
});
export default rootReducer;
