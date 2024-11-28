import { createSlice } from "@reduxjs/toolkit";

interface LoginState {
  isLoginOpen: boolean;
}

const initialState: LoginState = {
  isLoginOpen: false,
};

const loginSlice = createSlice({
  name: "login",
  initialState,
  reducers: {
    openLogin: (state) => {
      state.isLoginOpen = true;
    },
    closeLogin: (state) => {
      state.isLoginOpen = false;
    },
    toggleLogin: (state) => {
      state.isLoginOpen = !state.isLoginOpen;
    },
  },
});

export const { openLogin, closeLogin, toggleLogin } = loginSlice.actions;
export default loginSlice.reducer;
