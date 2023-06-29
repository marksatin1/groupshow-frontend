import { IArtwork } from "./Artwork";
import { MixedArtworks } from "../types/UIPropTypes";
import {
  LoginFormPropTypes,
  RegisterFormPropTypes,
  ResetPasswordFormPropTypes,
} from "../types/UIPropTypes";
import { SubmitArtworkFormPropTypes } from "../types/UIPropTypes";
import { IUser } from "./User";

export interface IAuthContext {
  user: IUser | void;
  accessJwt: string | undefined;
  registerNewUser: ({ registerForm }: RegisterFormPropTypes) => Promise<boolean | void>;
  resetPassword: ({ resetPasswordForm }: ResetPasswordFormPropTypes) => Promise<boolean | void>;
  login: ({ loginForm }: LoginFormPropTypes) => Promise<IAuthContext | void>;
  refreshAccessToken: () => Promise<string | void>;
  logout: () => Promise<boolean | void>;
}

export interface IArtworkContext {
  getTwentyMostRecentArtworks: () => Promise<MixedArtworks[] | void>;
  getSingleArtwork: (artworkID: number) => Promise<IArtwork | void>;
  getAllArtworkByUserID: (userID: number) => Promise<MixedArtworks[] | void>;
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

export interface IAuthResponseData {
  user: IUser | undefined;
  accessJwtExpiresOn: string;
  refreshJwtExpiresOn: string;
}
