import { configureStore } from "@reduxjs/toolkit";
import bazarSlice from "./features/bazarSlice";
// import { addToCart } from "./features/bazarSlice";
export const store = configureStore({
  reducer: {
    bazar: bazarSlice,
  },
});
