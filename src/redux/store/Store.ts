"use client";
import { configureStore } from "@reduxjs/toolkit";
import  cartReducer  from "../state-slice/CartSlice";
import  productReducer  from "../state-slice/ProductSlice";
export const makeStore = () => {
  return configureStore({
    reducer: {
      cart: cartReducer,
      product: productReducer,
    },
  });
};

export type AppStore = ReturnType<typeof makeStore>;

export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
