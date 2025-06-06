import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  name: "",
  isAuthenticated: false,
  profile: {
    name: "",
    email: "",
    height: "",
    weight: "",
    gender: "",
    exerciseLevel: "",
    goal: "",
    frequency: "",
    duration: ""
  }
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    login: (state, action) => {
      state.name = action.payload.name;
      state.isAuthenticated = true;
    },
    logout: (state) => {
      state.name = "";
      state.isAuthenticated = false;
    },
    setProfile: (state, action) => {
      state.profile = action.payload;
    },
    updateProfile: (state, action) => {
      state.profile = { ...state.profile, ...action.payload };
    }
  },
});

export const { login, logout, setProfile, updateProfile } = userSlice.actions;

export const selectIsAuthenticated = (state) => state.user.isAuthenticated;
export const selectUserName = (state) => state.user.name;
export const selectUserProfile = (state) => state.user.profile;

export default userSlice.reducer;
