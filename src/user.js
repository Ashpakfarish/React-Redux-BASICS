import { createSlice } from "@reduxjs/toolkit";

const initialValue = { name: "", exp: 0 };

export const userSlice = createSlice({
  name: "user",
  initialState: { value: initialValue },
  reducers: {
    login: (state, action) => {
      state.value = action.payload;
    },
    logout: (state, action) => {
      state.value = initialValue;
    }
  }
});

export const { login, logout } = userSlice.actions;
export default userSlice.reducer;
