import CounterReducer from "./reducers/CounterReducer";
import { configureStore } from "@reduxjs/toolkit";

export default configureStore({
  reducer: {
    CounterReducer: CounterReducer,
  },
});
