import { User } from "@/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type UserState = {
  error: string | null;
  message: string | null;
  isLoading: boolean;
  isAuthenticated: boolean;
  user: User | null;
};

const initialState: UserState = {
  error: null,
  message: null,
  isAuthenticated: false,
  isLoading: false,
  user: null,
};

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    loginRequest: (state) => {
      state.isLoading = true;
    },
    loginSuccess: (
      state,
      action: PayloadAction<{ user: User; message: string }>
    ) => {
      state.isLoading = false;
      state.isAuthenticated = true;
      state.user = action.payload.user;
      state.message = action.payload.message;
    },
    loginFail: (state, action: PayloadAction<string>) => {
      state.isLoading = false;
      state.isAuthenticated = false;
      state.error = action.payload;
    },
    clearError: (state) => {
      state.error = "";
    },
    clearMessage: (state) => {
      state.message = "";
    },
    setUser: (state, action: PayloadAction<User>) => {
      state.user = action.payload;
    },
    clearUser: (state) => {
      state.user = null;
    },
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
