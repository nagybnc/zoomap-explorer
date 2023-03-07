"use client";

import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

export const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};
