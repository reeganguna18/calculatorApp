import { createSlice } from "@reduxjs/toolkit";

export const themeSlice = createSlice({
  name: "theme",
  initialState: { value: "" },
  reducers: {
    colorChange: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { colorChange } = themeSlice.actions;
export default themeSlice.reducer;
