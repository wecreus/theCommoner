import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./slices/scrollReducer";
import themeReducer from "./slices/themeReducer";

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    theme: themeReducer,
  },
});

export default store;
