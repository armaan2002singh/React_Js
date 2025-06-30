import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  status: false,
  userData: null,
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      //action-1
      state.status = true;
      state.userData = action.payload;
    },
    logout: (state) => {
      //action-2
      state.status = false;
      state.userData = null;
    },
  },
});

export const { login, logout } = authSlice.actions; // two actions are exported from the authSlice.
export default authSlice.reducer;
