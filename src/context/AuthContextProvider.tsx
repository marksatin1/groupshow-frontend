import { useEffect, useState } from "react";
import { axInst } from "../config/axiosInstance";
import {
  IAuthResponse,
  LoginFormProps,
  RegisterFormProps,
  ResetPasswordFormProps,
} from "../typing/Auth";
import AuthContext from "./AuthContext";
import { IUserDetails } from "../typing/User";

const JWT_ACCESS_TOKEN_DURATION_MS = 1000 * 60 * 60;
const JWT_REFRESH_TOKEN_DURATION_MS = 1000 * 60 * 60 * 24;

const AuthContextProvider = ({ children }: any) => {
  const [userDetails, setUserDetails] = useState<IUserDetails>({
    currentUser: undefined,
    jwtAccessToken: undefined,
    jwtRefreshToken: undefined,
    jwtRefreshExpDateMs: undefined,
  });

  let accessTokenExpTimer: number;

  useEffect(() => {
    accessTokenExpTimer = setTimeout(() => {
      // Get a new access token 1 minute before orig access token expires
      if (
        userDetails.jwtRefreshExpDateMs !== undefined &&
        userDetails.jwtRefreshExpDateMs < Date.now()
      ) {
        refreshAccessToken();
      } else {
        logout();
      }
    }, JWT_ACCESS_TOKEN_DURATION_MS - 60000);
  }, [userDetails.jwtAccessToken]);

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
          Authorization: "Bearer " + userDetails.jwtAccessToken,
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

      setUserDetails({
        currentUser: authResponse.user,
        jwtAccessToken: authResponse.jwtAccessToken,
        jwtRefreshToken: authResponse.jwtRefreshToken,
        jwtRefreshExpDateMs: Date.now() + JWT_REFRESH_TOKEN_DURATION_MS,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const refreshAccessToken = async () => {
    try {
      const { data: newJwtAccessToken } = await axInst.get<string | void>("/auth/refresh-access", {
        headers: {
          Authorization: "Bearer " + userDetails.jwtAccessToken + " " + userDetails.jwtRefreshToken,
        },
      });
      setUserDetails((prev: IUserDetails) => ({ ...prev, jwtAccessToken: newJwtAccessToken }));
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    const { data: success } = await axInst.get<boolean | void>("/auth/logout", {
      headers: {
        Authorization: "Bearer " + userDetails.jwtAccessToken,
      },
    });

    if (success) {
      setUserDetails({
        currentUser: undefined,
        jwtAccessToken: undefined,
        jwtRefreshToken: undefined,
        jwtRefreshExpDateMs: undefined,
      });

      clearTimeout(accessTokenExpTimer);

      // redirect to homepage
    }
  };

  const authContext = {
    currentUser: userDetails.currentUser,
    registerNewUser,
    resetPassword,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
