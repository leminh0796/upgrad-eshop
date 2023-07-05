import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import orderReducer from "./orderReducer";
import productReducer from "./productReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  order: orderReducer,
  product: productReducer,
});

export default rootReducer;
