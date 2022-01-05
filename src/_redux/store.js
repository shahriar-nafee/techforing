import { configureStore } from "@reduxjs/toolkit";
import AuthReducer from "../pages/features/AuthSlice";
import { JoblistApi } from "../pages/features/JoblistApi";
import JobReducer from "../pages/features/JobSlice";

export const store = configureStore({
  reducer: {
    auth: AuthReducer,
    job: JobReducer,

    [JoblistApi.reducerPath]: JoblistApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat([JoblistApi.middleware]),
});
