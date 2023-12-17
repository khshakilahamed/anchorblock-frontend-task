import { baseApi } from "./api/baseApi";
import authReducer from "./auth/authSlice";

export const rootReducer = {
  [baseApi.reducerPath]: baseApi.reducer,
  auth: authReducer,
};
