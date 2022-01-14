import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../pages/features/AuthSlice";
import { JoblistApi } from "../pages/features/JoblistApi";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,

    [JoblistApi.reducerPath]: JoblistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([JoblistApi.middleware]),
});
