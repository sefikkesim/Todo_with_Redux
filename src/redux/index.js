import { createStore, combineReducers } from "redux";

import todoReducer from "./reducer/todoReducer";

const reducers = combineReducers({
  todoReducer,
});

export const combineStore = () => {
  const store = createStore(reducers);
  return store;
};
