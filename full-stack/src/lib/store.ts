import { configureStore } from "@reduxjs/toolkit";
import { machineReducer } from "./store/features/machine/machineSlice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      machines: machineReducer,
    },
  });
};

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
