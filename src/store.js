import { configureStore } from "@reduxjs/toolkit";
import scrollReducer from "./slices/scrollReducer";
import themeReducer from "./slices/themeReducer";
import globeReducer from "./slices/globeReducer";

const store = configureStore({
  reducer: {
    scroll: scrollReducer,
    theme: themeReducer,
    globe: globeReducer,
  },
});

export default store;
