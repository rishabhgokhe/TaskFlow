import axios from "axios";
import { server } from "../store";
import { userActions } from "./userSlice";
import { AppDispatch, RootState } from "../store";
import { ThunkAction } from "@reduxjs/toolkit";

export const login = ({email, password} : {email: string; password: string}): ThunkAction<void, RootState, undefined, any> => {
  return async (dispatch: AppDispatch) => {
    try {
      dispatch(userActions.loginRequest());
      const { data } = await axios.post(
        `${server}/api/auth/login`,
        {email, password},
        {
          withCredentials: true,
        }
      );
      dispatch(
        userActions.loginSuccess({ user: data.user, message: data.message })
      );
    } catch (err: any) {
      dispatch(userActions.loginFail(err.response.data.message));
    }
  };
};

export default login;
