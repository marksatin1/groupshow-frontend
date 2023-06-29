import { createContext } from "react";
import {
  IAuthContext,
  LoginFormProps,
  RegisterFormProps,
  ResetPasswordFormProps,
} from "../typing/Auth";

const AuthContext = createContext<IAuthContext>({
  user: undefined,
  accessJwt: undefined,
  registerNewUser: ({}: RegisterFormProps) => Promise.resolve(),
  resetPassword: ({}: ResetPasswordFormProps) => Promise.resolve(),
  login: ({}: LoginFormProps) => Promise.resolve(),
  refreshAccessToken: () => Promise.resolve(),
  logout: () => Promise.resolve(),
});

export default AuthContext;
