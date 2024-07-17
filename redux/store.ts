import { configureStore } from '@reduxjs/toolkit';
import userReducer from './user/userSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

export const server = "http://localhost:3000";
