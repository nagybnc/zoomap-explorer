"use client";

import { SessionProvider } from "next-auth/react";
import { FC } from "react";
import { Provider } from "react-redux";
import { store } from "../store";

export const Providers: FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <SessionProvider>
      <Provider store={store}>{children}</Provider>
    </SessionProvider>
  );
};
