import { IArtwork } from "./Artwork";
import { MixedArtworks } from "../types/ArtworkPropTypes";
import {
  LoginFormPropTypes,
  RegisterFormPropTypes,
  ResetPasswordFormPropTypes,
  SubmitArtworkFormPropTypes,
} from "../types/FormPropTypes";
import { IUser } from "./User";

export interface IAuthContext {
  user: IUser | void;
  accessJwt: string | undefined;
  registerNewUser: ({ registerFormData }: RegisterFormPropTypes) => Promise<boolean | void>;
  resetPassword: ({ resetPasswordFormData }: ResetPasswordFormPropTypes) => Promise<boolean | void>;
  login: ({ loginFormData }: LoginFormPropTypes) => Promise<IAuthContext | void>;
  refreshAccessToken: () => Promise<string | void>;
  logout: () => Promise<boolean | void>;
}

export interface IArtworkContext {
  getTwentyMostRecentArtworks: () => Promise<MixedArtworks[] | void>;
  getSingleArtwork: (artworkID: number) => Promise<IArtwork | void>;
  getAllArtworksByUserID: (userID: number) => Promise<MixedArtworks[] | void>;
  setCritiqueStatus: (artworkID: number, critiqueStatus: string) => Promise<boolean | void>;
  submitArtwork: (artworkFormData: SubmitArtworkFormPropTypes) => Promise<boolean | void>;
}

export interface ISessionDetails {
  user: IUser | undefined;
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
