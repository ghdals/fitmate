import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  isLoggedIn: false,
  token: null,
  user: null,
  isAdmin: false
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.isLoggedIn = true;
      state.token = action.payload.token;
      state.user = action.payload.user;
      state.isAdmin = action.payload.isAdmin;
      // 토큰을 로컬 스토리지에 저장
      localStorage.setItem("authToken", action.payload.token);
    },
    logout: (state) => {
      state.isLoggedIn = false;
      state.token = null;
      state.user = null;
      state.isAdmin = false;
      // 로컬 스토리지에서 토큰 제거
      localStorage.removeItem("authToken");
    },
    setUser: (state, action) => {
      state.user = action.payload;
    },
    setIsAdmin: (state, action) => {
      state.isAdmin = action.payload;
    }
  },
});

export const { login, logout, setUser, setIsAdmin } = authSlice.actions;

// 셀렉터
export const selectIsLoggedIn = (state) => state.auth.isLoggedIn;
export const selectCurrentUser = (state) => state.auth.user;
export const selectAuthToken = (state) => state.auth.token;
export const selectIsAdmin = (state) => state.auth.isAdmin;

export default authSlice.reducer;