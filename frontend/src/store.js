import thunk from "redux-thunk";
import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { productListReducer } from "./reducers/productReducers";
const initialState = {};
const reducer = combineReducers({
  productList: productListReducer,
});
const composEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__;

const store = createStore(
  reducer,
  initialState,
  composEnhancer(applyMiddleware(thunk))
);
export default store;
