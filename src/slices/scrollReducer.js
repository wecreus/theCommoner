import { createSlice } from "@reduxjs/toolkit";


const scrollSlice = createSlice({
  name: "scroll",
  initialState: {
    isScrolled: false,
  },
  reducers: {
    updateIsScrolled: (state, action) => {
      state.isScrolled = action.payload.isScrolled;
    },
  },
});

export const { updateIsScrolled } = scrollSlice.actions;

export default scrollSlice.reducer;
