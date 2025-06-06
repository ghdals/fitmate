import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";
import authReducer from "./slices/authSlice";
import adminReducer from "./slices/adminSlice";
import workoutReducer from "./slices/workoutSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
    auth: authReducer,
    admin: adminReducer,
    workout: workoutReducer
  },
});

export default store;