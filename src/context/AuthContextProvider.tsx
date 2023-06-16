import { useState } from "react";
import { axInst } from "../config/axiosInstance";
import {
  IAuthResponse,
  LoginFormProps,
  RegisterFormProps,
  ResetPasswordFormProps,
} from "../typing/Auth";
import AuthContext from "./AuthContext";
import { IUser } from "../typing/User";

const AuthContextProvider = ({ children }: any) => {
  const [currentUser, setCurrentUser] = useState<IUser | undefined>(undefined);
  const [jwtToken, setJwtToken] = useState<string | undefined>(undefined);

  const registerNewUser = async ({ registerForm }: RegisterFormProps) => {
    try {
      const { data: success } = await axInst.post<boolean | void>("/auth/register", registerForm);
      console.log(success);
    } catch (e) {
      console.error(e);
    }
  };

  const resetPassword = async ({ resetPasswordForm }: ResetPasswordFormProps) => {
    try {
      const { data: success } = await axInst.post<boolean | void>("/auth/reset-password", {
        headers: {
          Authorization: "Bearer " + jwtToken,
        },
        data: {
          resetPasswordForm,
        },
      });
      console.log(success);
    } catch (e) {
      console.error(e);
    }
  };

  const login = async ({ loginForm }: LoginFormProps) => {
    try {
      const { data: authResponse } = await axInst.post<IAuthResponse>("/auth/login", loginForm);
      console.log(authResponse);

      setCurrentUser(authResponse.user);
      setJwtToken(authResponse.jwtToken);
    } catch (e) {
      console.error(e);
    }
  };

  const logout = () => {
    // clear user session on frontend
    // do any necessary backend cleanup

    setCurrentUser(undefined);
    setJwtToken(undefined);

    // redirect to homepage
  };

  const authContext = {
    currentUser,
    registerNewUser,
    resetPassword,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
