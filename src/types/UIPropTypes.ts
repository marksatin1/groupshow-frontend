import { ChangeEventHandler} from "react";

export type InputPropTypes = {
  type: string;
  id: string;
  placeholder?: string;
  autocomplete?: string;
  value?: string;
  onChange: ChangeEventHandler;
};

export type RadioBoxPropTypes = {
  id: string;
  options: string[];
  onChange: ChangeEventHandler;
};

export type SelectMenuPropTypes = {
  id: string;
  defaultOption: string;
  options: string[];
  onChange: ChangeEventHandler;
};

export type SubmitButtonPropTypes = {
  name: string;
};

export type ArtworkCardPropTypes = {
  title: string;
  bucketUrl: string;
  isOpenForCritique: boolean;
};

