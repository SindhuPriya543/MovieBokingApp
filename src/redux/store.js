import { configureStore } from "@reduxjs/toolkit";
import { thunk } from "redux-thunk"; // Make sure the import is correct
import rootReducer from "./reducers/rootReducer";

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
});

export default store;
