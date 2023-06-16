import { createContext } from "react";
import {
  IAuthContext,
  LoginFormProps,
  RegisterFormProps,
  ResetPasswordFormProps,
} from "../typing/Auth";

const AuthContext = createContext<IAuthContext>({
  currentUser: undefined,
  registerNewUser: ({}: RegisterFormProps) => Promise.resolve(),
  resetPassword: ({}: ResetPasswordFormProps) => Promise.resolve(),
  login: ({}: LoginFormProps) => Promise.resolve(),
  logout: () => {},
});

export default AuthContext;
