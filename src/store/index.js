import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer, // 여러 개의 slice를 여기에 추가 가능
  },
});

export default store;
