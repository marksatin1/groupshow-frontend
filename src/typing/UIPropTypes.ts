import { ChangeEventHandler, FormEventHandler } from "react";

export type ArtworkOptionsProps = {
  fileUrl: string;
  title: string;
  statement?: string;
  artworkType: string;
};

export type ExtendedArtworkOptionsProps = {
  onChange: ChangeEventHandler;
};

export type FormProps = {
  title: string;
  onSubmit: FormEventHandler<HTMLFormElement>;
  children: any;
};

export type InputProps = {
  type: string;
  id: string;
  placeholder?: string;
  value?: string;
  onChange: ChangeEventHandler;
};

export type LoginFormProps = {
  email: string;
  password: string;
};

export type RadioBoxProps = {
  id: string;
  options: string[];
  onChange: ChangeEventHandler;
};

export type RegisterFormProps = {
  userRole: string;
  firstName: string;
  lastName: string;
  email: string;
  gradeLevel: string;
  major: string;
  minor: string;
};

export type SelectMenuProps = {
  id: string;
  defaultOption: string;
  options: string[];
  onChange: ChangeEventHandler;
};

export type SubmitButtonProps = {
  name: string;
};
