import { useEffect, useState } from "react";
import { axInst } from "../config/axiosInstance";
import {
  ISessionDetails,
  IAuthResponseData,
  LoginFormProps,
  RegisterFormProps,
  ResetPasswordFormProps,
} from "../typing/Auth";
import AuthContext from "./AuthContext";

const initSessionDetails = {
  user: undefined,
  accessJwt: undefined,
  accessJwtExpiresOn: "",
  refreshJwt: null,
  refreshJwtExpiresOn: "",
};

const AuthContextProvider = ({ children }: any) => {
  const [sessionDetails, setSessionDetails] = useState<ISessionDetails>(initSessionDetails);

  useEffect(() => {
    const accessTokenExpTimer = setTimeout(() => {
      // Get a new access token 1 minute before orig access token expires
      if (
        sessionDetails.refreshJwtExpiresOn !== "" &&
        Number(sessionDetails.refreshJwtExpiresOn) < Date.now()
      ) {
        refreshAccessToken();
      } else {
        logout();
      }
    }, Number(sessionDetails.accessJwtExpiresOn) - 60000);

    return () => {
      clearTimeout(accessTokenExpTimer);
    };
  }, [sessionDetails.accessJwt]);

  const registerNewUser = async ({ registerForm }: RegisterFormProps) => {
    try {
      const { data: success } = await axInst.post<boolean | void>("/auth/register", registerForm);
      console.log(success);

      // if success is true, redirect
    } catch (e) {
      console.error(e);
    }
  };

  const resetPassword = async ({ resetPasswordForm }: ResetPasswordFormProps) => {
    try {
      const { data: success } = await axInst.post<boolean | void>(
        "/auth/reset-password",
        resetPasswordForm
      );
      console.log(success);

      // if success is true, redirect
    } catch (e) {
      console.error(e);
    }
  };

  const login = async ({ loginForm }: LoginFormProps) => {
    try {
      const { data, headers }: { data: IAuthResponseData; headers: Headers } = await axInst.post(
        "/auth/login",
        loginForm
      );

      setSessionDetails({
        user: data.user,
        accessJwt: headers.get("authorization")?.slice(7),
        accessJwtExpiresOn: data.accessJwtExpiresOn,
        refreshJwt: headers.get("x-refresh-token"),
        refreshJwtExpiresOn: data.refreshJwtExpiresOn,
      });
    } catch (e) {
      console.error(e);
    }
  };

  const refreshAccessToken = async () => {
    if (!sessionDetails.refreshJwt || sessionDetails.refreshJwt === null) {
      throw new Error("Missing Refresh JWT.");
    }

    try {
      const { data: newAccessJwt } = await axInst.get<string>("/auth/refresh-access", {
        headers: {
          Authorization: "Bearer " + sessionDetails.accessJwt,
          "X-Refresh-Token": sessionDetails.refreshJwt,
        },
      });
      setSessionDetails((prev: ISessionDetails) => ({ ...prev, accessJwt: newAccessJwt }));
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    const { data: success } = await axInst.get<boolean>("/auth/logout", {
      headers: {
        Authorization: "Bearer " + sessionDetails.accessJwt,
      },
    });

    if (success) {
      setSessionDetails(initSessionDetails);
      // redirect to homepage
    }
  };

  const authContext = {
    user: sessionDetails.user,
    registerNewUser,
    resetPassword,
    login,
    logout,
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
