import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import workoutReducer from "./slices/workoutSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    workout: workoutReducer
  },
});

export default store;