import { IArtwork } from "./Artwork";
import { SpecificArtwork } from "../types/ArtworkPropTypes";
import {
  LoginFormPropTypes,
  RegisterFormPropTypes,
  ResetPasswordFormPropTypes,
  SubmitArtworkFormPropTypes,
  SubmitCritiqueFormPropTypes,
} from "../types/FormPropTypes";
import { IUser } from "./User";

export interface IAuthContext {
  user: IUser | undefined;
  isSignedIn: boolean;
  accessJwt: string | undefined;
  registerNewUser: ({ registerFormData }: RegisterFormPropTypes) => Promise<boolean | void>;
  activateAccount: (userID: number, regToken: string) => Promise<boolean | void>;
  resetPassword: ({ resetPasswordFormData }: ResetPasswordFormPropTypes) => Promise<boolean | void>;
  login: ({ loginFormData }: LoginFormPropTypes) => Promise<IAuthContext | void>;
  refreshAccessToken: () => Promise<string | void>;
  logout: () => Promise<boolean | void>;
}

export interface IArtworkContext {
  getTwentyMostRecentArtworks: () => Promise<SpecificArtwork[] | void>;
  getSingleArtwork: (artworkID: number) => Promise<IArtwork | void>;
  getAllArtworksByUserID: (userID: number) => Promise<SpecificArtwork[] | void>;
  setCritiqueStatus: (artworkID: number, critiqueStatus: string) => Promise<boolean | void>;
  submitArtwork: (submitArtworkFormData: SubmitArtworkFormPropTypes) => Promise<boolean | void>;
  submitCritique: (submitCritiqueFormData: SubmitCritiqueFormPropTypes) => Promise<boolean | void>;
  getCritiquesByArtworkID: (artworkID: number) => Promise<IArtwork[] | void>;
}

export interface ISessionDetails {
  user: IUser | undefined;
  isSignedIn: boolean;

  accessJwt: string | undefined;
  accessJwtExpiresOn: string;
  refreshJwt: string | null;
  refreshJwtExpiresOn: string;
}

export interface IAuthResponse {
  data: {
    user: IUser | undefined;
    accessJwtExpiresOn: string;
    refreshJwtExpiresOn: string;
  };
  headers: Headers;
}
