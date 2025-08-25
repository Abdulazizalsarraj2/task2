import { configureStore } from '@reduxjs/toolkit';
import authReducer from "./auth/authSlice"

const dummyReducer = () => ({});
export const store = configureStore({
  reducer: {
    auth: authReducer,
  },
});
