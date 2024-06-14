import { createSlice } from "@reduxjs/toolkit";

const globeSlice = createSlice({
  name: "globe",
  initialState: {
    isInRange: false,
  },
  reducers: {
    updateIsInRange: (state, action) => {
      state.isInRange = action.payload.isInRange;
    },
  },
});

export const { updateIsInRange } = globeSlice.actions;

export default globeSlice.reducer;
