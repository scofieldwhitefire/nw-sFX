import { configureStore } from "@reduxjs/toolkit";
import requestsReducer from "./requests";
import { MODE } from "../config";

export const store = configureStore({
  reducer: {
    requests: requestsReducer,
  },
  devTools: MODE === "test",
});
