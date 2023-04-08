import { createSlice } from "@reduxjs/toolkit";

const initialStateProfile = { name: "", age: 0, email: "" };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialStateProfile },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state) => {
      state.value = initialStateProfile;
    },
  },
});

export const { login, logout } = userSlice.actions;

export default userSlice.reducer;
