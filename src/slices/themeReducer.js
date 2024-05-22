import { createSlice } from "@reduxjs/toolkit";


const themeSlice = createSlice({
  name: "theme",
  initialState: {
    storedTheme: 0,
  },
  reducers: {
    updateTheme: (state, action) => {
      state.storedTheme = action.payload.theme;
    },
  },
});

export const { updateTheme } = themeSlice.actions;

export default themeSlice.reducer;
