import { applyMiddleware, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import thunk from "redux-thunk";
import rootReducer from "./reducers/rootReducer";

const intialState = {};
const middleWare = [thunk];

export const store = createStore(
  rootReducer,
  intialState,
  composeWithDevTools(applyMiddleware(...middleWare))
);
