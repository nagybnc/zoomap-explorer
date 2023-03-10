import { configureStore } from "@reduxjs/toolkit";
import zoosReducer from "./zoosSlice";
import { useDispatch } from "react-redux";

export const store = configureStore({
  reducer: {
    zoos: zoosReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;
export const useAppDispatch: () => AppDispatch = useDispatch;
