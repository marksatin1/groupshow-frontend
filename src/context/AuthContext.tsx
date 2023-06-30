import { createContext } from "react";
import { IAuthContext } from "../interfaces/Context";

const AuthContext = createContext<IAuthContext>({
  user: undefined,
  isSignedIn: false,
  accessJwt: undefined,
  registerNewUser: () => Promise.resolve(),
  activateAccount: () => Promise.resolve(),
  resetPassword: () => Promise.resolve(),
  login: () => Promise.resolve(),
  refreshAccessToken: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export default AuthContext;
