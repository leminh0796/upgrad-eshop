import { combineReducers } from "redux";
import filterReducer from "./filterReducer";
import orderReducer from "./orderReducer";

const rootReducer = combineReducers({
  filter: filterReducer,
  order: orderReducer,
});

export default rootReducer;
