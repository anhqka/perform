import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import { authenApi } from "./slice/authen/api";
import { authenSlice } from "./slice/authen/slice";
import { eCommerceApi } from "./slice/eCommerce/api";

export const store = configureStore({
  reducer: {
    authenSlice: authenSlice.reducer,
    [eCommerceApi.reducerPath]: eCommerceApi.reducer,
    [authenApi.reducerPath]: authenApi.reducer,
  },

  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(eCommerceApi.middleware, authenApi.middleware),
});
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;