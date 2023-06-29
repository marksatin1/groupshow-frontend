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

  // Handles refreshing access Token
  // useEffect(() => {
  //   const accessTokenExpTimer = setTimeout(() => {
  //     // Get a new access token 1 minute before orig access token expires
  //     if (
  //       sessionDetails.refreshJwtExpiresOn !== "" &&
  //       Number(sessionDetails.refreshJwtExpiresOn) < Date.now() // make sure this compares Epoch ms and not datetime
  //     ) {
  //       refreshAccessToken();
  //     } else {
  //       logout();
  //     }
  //   }, Number(sessionDetails.accessJwtExpiresOn) - 60000);

  //   return () => {
  //     clearTimeout(accessTokenExpTimer);
  //   };
  // }, [sessionDetails.accessJwt]);

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

      console.log(data);
      console.log(headers);

      setSessionDetails({
        user: data.user,
        accessJwt: headers.get("authorization")?.slice(7),
        accessJwtExpiresOn: data.accessJwtExpiresOn,
        refreshJwt: headers.get("x-refresh-token"),
        refreshJwtExpiresOn: data.refreshJwtExpiresOn,
      });

      // ! asserts that the authorization header will never be null
      localStorage.setItem("accessJwt", headers.get("authorization")?.slice(7)!);
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
          "X-Refresh-Token": sessionDetails.refreshJwt,
        },
      });
      setSessionDetails((prev: ISessionDetails) => ({ ...prev, accessJwt: newAccessJwt }));
      localStorage.setItem("accessJwt", newAccessJwt);
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
      localStorage.clear();
      // redirect to homepage
    }
  };

  const authContext = {
    user: sessionDetails.user,
    accessJwt: sessionDetails.accessJwt,
    registerNewUser,
    resetPassword,
    login,
    refreshAccessToken,
    logout,
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
