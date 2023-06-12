import { configureStore } from "@reduxjs/toolkit";
import { authenApi } from "./slice/authen/api";
import { eCommerceApi } from "./slice/eCommerce/api";

export const store = configureStore({
  reducer: {
    [eCommerceApi.reducerPath]: eCommerceApi.reducer,
    [authenApi.reducerPath]: authenApi.reducer,
  },
});
