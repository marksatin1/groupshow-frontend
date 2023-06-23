import { IUser } from "./User";

export interface IAuthContext {
  user: IUser | void;
  registerNewUser: ({ registerForm }: RegisterFormProps) => Promise<boolean | void>;
  resetPassword: ({ resetPasswordForm }: ResetPasswordFormProps) => Promise<boolean | void>;
  login: ({ loginForm }: LoginFormProps) => Promise<IAuthContext | void>;
  logout: () => Promise<boolean | void>;
}

export interface IRegisterForm {
  userRole: string;
  firstName: string;
  lastName: string;
  email: string;
  gradeLevel: string;
  major?: string;
  minor?: string;
}

export type RegisterFormProps = {
  registerForm: IRegisterForm;
};

export interface IResetPasswordForm {
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export type ResetPasswordFormProps = {
  resetPasswordForm: IResetPasswordForm;
};

export interface ILoginForm {
  email: string;
  password: string;
}

export type LoginFormProps = {
  loginForm: ILoginForm;
};

export interface ISessionDetails {
  user: IUser | undefined;
  accessJwt: string | undefined;
  accessJwtExpiresOn: string;
  refreshJwt: string | null;
  refreshJwtExpiresOn: string;
}

export interface IAuthResponseData {
  user: IUser | undefined;
  accessJwtExpiresOn: string;
  refreshJwtExpiresOn: string;
}
