import { useEffect, useState } from "react";
import { axInst } from "../config/axiosInstance";
import { IAuthResponse, ISessionDetails } from "../interfaces/Context";
import {
  LoginFormPropTypes,
  RegisterFormPropTypes,
  ResetPasswordFormPropTypes,
} from "../types/FormPropTypes";
import AuthContext from "./AuthContext";

const initSessionDetails = {
  user: undefined,
  isSignedIn: false,
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

  const registerNewUser = async ({ registerFormData }: RegisterFormPropTypes) => {
    try {
      const { data: isRegistered } = await axInst.post<boolean | void>(
        "/auth/register",
        registerFormData
      );
      console.log(`User is successfully registered: ${isRegistered}`);
    } catch (e) {
      console.error(e);
    }
  };

  const resetPassword = async ({ resetPasswordFormData }: ResetPasswordFormPropTypes) => {
    try {
      const { data: isPasswordReset } = await axInst.post<boolean | void>(
        "/auth/reset-password",
        resetPasswordFormData
      );
      console.log(`Password is successfully reset: ${isPasswordReset}`);
    } catch (e) {
      console.error(e);
    }
  };

  const login = async ({ loginFormData }: LoginFormPropTypes) => {
    try {
      const { data, headers }: IAuthResponse = await axInst.post("/auth/login", loginFormData);

      setSessionDetails({
        user: data.user,
        isSignedIn: true,
        accessJwt: headers.get("authorization")?.slice(7),
        accessJwtExpiresOn: data.accessJwtExpiresOn,
        refreshJwt: headers.get("x-refresh-token"),
        refreshJwtExpiresOn: data.refreshJwtExpiresOn,
      });

      // ! asserts that the authorization header will never be null
      localStorage.setItem("accessJwt", headers.get("authorization")?.slice(7)!);

      console.log(`User ${data.user?.userID} successfully logged in.`);
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

      console.log(`New access JWT acquired: ${newAccessJwt}`);
    } catch (e) {
      console.error(e);
    }
  };

  const logout = async () => {
    try {
      const { data: isLoggedOut } = await axInst.get<boolean>("/auth/logout", {
        headers: {
          Authorization: "Bearer " + sessionDetails.accessJwt,
        },
      });

      if (isLoggedOut === true) {
        setSessionDetails(initSessionDetails);
        localStorage.clear();
        // redirect to homepage
        console.log("Successfully logged out.");
      }
    } catch (e) {
      console.error(e);
    }
  };

  const authContext = {
    user: sessionDetails.user,
    isSignedIn: sessionDetails.isSignedIn,
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
