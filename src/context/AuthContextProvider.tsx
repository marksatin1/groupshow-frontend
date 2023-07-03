import { useEffect, useState } from "react";
import { axInst } from "../config/axiosInstance";
import { IAuthResponse, ISessionDetails } from "../interfaces/Context";
import {
  LoginFormPropTypes,
  RegisterFormPropTypes,
  ResetPasswordFormPropTypes,
} from "../types/FormPropTypes";
import AuthContext from "./AuthContext";
import { useNavigate } from "react-router-dom";

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
  const navigate = useNavigate();

  useEffect(() => {
    const user = JSON.parse(localStorage.getItem("user")!);
    const isSignedIn = localStorage.getItem("isSignedIn") === "true";
    const accessJwt = localStorage.getItem("accessJwt")!;
    const accessJwtExpiresOn = localStorage.getItem("accessJwtExpiresOn")!;
    const refreshJwt = localStorage.getItem("refreshJwt");
    const refreshJwtExpiresOn = localStorage.getItem("refreshJwtExpiresOn")!;

    setSessionDetails({
      user,
      isSignedIn,
      accessJwt,
      accessJwtExpiresOn,
      refreshJwt,
      refreshJwtExpiresOn,
    });
  }, []);

  // Handles refreshing access Token
  useEffect(() => {
    if (sessionDetails.isSignedIn) {
      const accessTokenExpTimer = setTimeout(() => {
        // Get a new access token 1 minute before orig access token expires
        if (
          sessionDetails.refreshJwtExpiresOn !== undefined &&
          Date.parse(sessionDetails.refreshJwtExpiresOn) > Date.now()
        ) {
          refreshAccessToken();
          console.log("Hit refresh block.");
        } else {
          logout();
          console.log("Hit logout block.");
        }
      }, Date.parse(sessionDetails.accessJwtExpiresOn) - 60000);

      return () => {
        clearTimeout(accessTokenExpTimer);
      };
    }
  }, [sessionDetails.accessJwt]);

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

  const activateAccount = async (userID: number, regToken: string) => {
    try {
      const { data: isActivated } = await axInst.get<boolean | void>("/auth/activate-account", {
        params: {
          userID,
          regToken,
        },
      });
      console.log(`User ${userID} has activated their account: ${isActivated}.`);
      return navigate("/auth/reset-password");
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
      return navigate("/home");
    } catch (e) {
      console.error(e);
    }
  };

  const login = async ({ loginFormData }: LoginFormPropTypes) => {
    try {
      const { data, headers }: IAuthResponse = await axInst.post("/auth/login", loginFormData);

      // ! asserts that the authorization header will never be null
      localStorage.setItem("user", JSON.stringify(data.user));
      localStorage.setItem("isSignedIn", "true");
      localStorage.setItem("accessJwt", headers.get("authorization")?.slice(7)!);
      localStorage.setItem("accessJwtExpiresOn", data.accessJwtExpiresOn);
      localStorage.setItem("refreshJwt", headers.get("x-refresh-token")!);
      localStorage.setItem("refreshJwtExpiresOn", data.refreshJwtExpiresOn);

      setSessionDetails({
        user: data.user,
        isSignedIn: true,
        accessJwt: headers.get("authorization")?.slice(7),
        accessJwtExpiresOn: data.accessJwtExpiresOn,
        refreshJwt: headers.get("x-refresh-token"),
        refreshJwtExpiresOn: data.refreshJwtExpiresOn,
      });

      console.log(`User ${data.user?.userID} successfully logged in.`);
      return navigate("/home");
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

      console.log(isLoggedOut);

      if (isLoggedOut === true) {
        setSessionDetails(initSessionDetails);
        localStorage.clear();
        console.log("Successfully logged out.");
        return navigate("/");
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
    activateAccount,
    resetPassword,
    login,
    refreshAccessToken,
    logout,
  };

  return <AuthContext.Provider value={authContext}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
