import { createSlice } from "@reduxjs/toolkit";

const globeSlice = createSlice({
  name: "globe",
  initialState: {
    isFocused: false,
  },
  reducers: {
    updateIsFocused: (state, action) => {
      state.isFocused = action.payload.isFocused;
    },
  },
});

export const { updateIsFocused } = globeSlice.actions;

export default globeSlice.reducer;
