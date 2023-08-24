import { configureStore } from "@reduxjs/toolkit";
// import authReducer from "./auth";
import { MODE } from "../config";
// import adminReducer from "./admin";

export const store = configureStore({
  reducer: {
    // auth: authReducer,
    // admin: adminReducer,
  },
  devTools: MODE === "test",
});
