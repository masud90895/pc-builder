import { configureStore } from "@reduxjs/toolkit";
import productReducer from "./feature/pcBuildSlice";

export const store = configureStore({
  reducer: {
    products: productReducer,
  },
});
