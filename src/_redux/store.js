import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../pages/features/AuthSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
  },
});
