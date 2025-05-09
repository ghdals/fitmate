import { createSlice } from '@reduxjs/toolkit';

const savedAuth = JSON.parse(localStorage.getItem("auth"));

const initialState = savedAuth || {
  isLoggedIn: false,
  user: null,
};


const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.user = action.payload;
      localStorage.setItem("auth", JSON.stringify(state)); // 저장
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.user = null;
      localStorage.removeItem("auth"); // 제거
    },
  }
  
});

export const { login, logout } = authSlice.actions;
export default authSlice.reducer;
