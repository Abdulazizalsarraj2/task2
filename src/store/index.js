import { configureStore } from '@reduxjs/toolkit';

const dummyReducer = () => ({});
export const store = configureStore({
  reducer: {
    dummy: dummyReducer,
  },
});
