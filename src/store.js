import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./slices/scrollReducer";

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
  },
});

export default store;
