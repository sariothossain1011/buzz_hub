"use client"
import { AppStore, makeStore } from "@/redux/store/Store";
import React, { ReactNode, useRef } from "react";
import { Provider } from "react-redux";

const StoreProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const storeRef = useRef<AppStore | undefined>(undefined);

  if (!storeRef.current) {
    storeRef.current = makeStore();
  }
  return <Provider store={storeRef.current}>{children}</Provider>;
};

export default StoreProvider;
