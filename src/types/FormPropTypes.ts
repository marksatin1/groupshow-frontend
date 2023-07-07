import { FormEventHandler } from "react";
import {
  ISubmitArtworkForm,
  ILoginForm,
  IRegisterForm,
  IResetPasswordForm,
  ISubmitCritiqueForm,
} from "../interfaces/Forms";

export type FormPropTypes = {
  title: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: any;
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
  submitCritiqueFormData: ISubmitCritiqueForm;
};
