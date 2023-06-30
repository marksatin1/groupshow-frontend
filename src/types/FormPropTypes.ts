import {
  ISubmitArtworkForm,
  ILoginForm,
  IRegisterForm,
  IResetPasswordForm,
  ISubmitCritiqueForm,
} from "../interfaces/Forms";

export type SubmitButtonPropTypes = {
  name: string;
};

export type RegisterFormPropTypes = {
  registerFormData: IRegisterForm;
};

export type ResetPasswordFormPropTypes = {
  resetPasswordFormData: IResetPasswordForm;
};

export type LoginFormPropTypes = {
  loginFormData: ILoginForm;
};

export type SubmitArtworkFormPropTypes = {
  submitArtworkFormData: ISubmitArtworkForm;
};

export type SubmitCritiqueFormPropTypes = {
  critiqueFormData: ISubmitCritiqueForm;
}
