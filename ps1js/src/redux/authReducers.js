import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  email: "aaryan3120@gmail.com",
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setEmail(state, action) {
      state.email = action.payload;
    },
    clearEmail(state) {
      state.email = null;
    },
  },
});

export const {
  clearEmail,
  setEmail,
} = authSlice.actions;

export default authSlice.reducer;