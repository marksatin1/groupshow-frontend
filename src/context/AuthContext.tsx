import { createContext } from "react";
import { IAuthContext } from "../interfaces/Context";

const AuthContext = createContext<IAuthContext>({
  user: undefined,
  accessJwt: undefined,
  registerNewUser: () => Promise.resolve(),
  resetPassword: () => Promise.resolve(),
  login: () => Promise.resolve(),
  refreshAccessToken: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export default AuthContext;
