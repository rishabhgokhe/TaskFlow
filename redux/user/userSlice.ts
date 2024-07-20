import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { User } from "@/types";
import { server } from "../store";
import axios from "axios";

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

export const loginUser = createAsyncThunk(
  "user/login",
  async (
    { email, password }: { email: string; password: string },
    thunkAPI
  ) => {
    try {
      const response = await axios.post(
        `${server}/api/auth/login`,
        { email, password },
        { withCredentials: true }
      );
      return response.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const logoutUser = createAsyncThunk(
  "user/logout",
  async (_, thunkAPI) => {
    try {
      const response = await axios.post(
        `${server}/api/auth/logout`,
        { withCredentials: true }
      );
      return response.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

export const getCurrentUser = createAsyncThunk(
  "user/getCurrentUser",
  async (_, thunkAPI) => {
    try {
      const response = await axios.get(`${server}/api/profile`, {
        headers: {
          Authorization: "Token :",
        },
        withCredentials: true,
      });
      return response.data.user;
    } catch (error: any) {
      return thunkAPI.rejectWithValue(error.response.data.errors);
    }
  }
);

const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(loginUser.fulfilled, (state, action: PayloadAction<User>) => {
        state.isLoading = false;
        state.isAuthenticated = true;
        state.user = action.payload;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = "Login failed. Please try again.";
      })

      .addCase(logoutUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(logoutUser.fulfilled, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.user = null;
        state.error = null;
      })
      .addCase(logoutUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = "Logout failed. Please try again.";
      })

      .addCase(getCurrentUser.pending, (state) => {
        state.isLoading = true;
      })
      .addCase(
        getCurrentUser.fulfilled,
        (state, action: PayloadAction<User>) => {
          state.isLoading = false;
          state.isAuthenticated = true;
          state.user = action.payload;
          state.error = null;
        }
      )
      .addCase(getCurrentUser.rejected, (state) => {
        state.isLoading = false;
        state.isAuthenticated = false;
        state.error = "User not found. Please try logging in.";
        state.user = null;
      });
  },
});

export const userActions = userSlice.actions;
export default userSlice.reducer;
