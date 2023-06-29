import {
  ISubmitArtworkForm,
  ILoginForm,
  IRegisterForm,
  IResetPasswordForm,
} from "../interfaces/Forms";

export type SubmitButtonPropTypes = {
  name: string;
};

export type RegisterFormPropTypes = {
  registerForm: IRegisterForm;
};

export type ResetPasswordFormPropTypes = {
  resetPasswordForm: IResetPasswordForm;
};

export type LoginFormPropTypes = {
  loginForm: ILoginForm;
};

export type SubmitArtworkFormPropTypes = {
  artworkFormData: ISubmitArtworkForm;
};
