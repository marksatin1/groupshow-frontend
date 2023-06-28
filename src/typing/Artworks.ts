import { MixedArtworks } from "./ArtworksPropTypes";
import { IUser } from "./User";

export interface IArtwork {
  artworkID: number;
  artist: IUser;
  artworkType: string;
  title: string;
  statement?: string;
  submissionDate: string;
  url: string;
  averageScore: number;
  isOpenForCritique: boolean;
}

export interface IPainting extends IArtwork {
  genre: string;
  widthInches: number;
  heightInches: number;
}

export interface IPerformance extends IArtwork {
  genre: string;
  durationHour: number;
  durationMin: number;
  durationSec: number;
}

export interface IPhotograph extends IArtwork {
  isPrint: boolean;
  widthInches: number;
  heightInches: number;
}

export interface ISong extends IArtwork {
  durationMin: number;
  durationSec: number;
}

export interface IVideo extends IArtwork {
  genre: string;
  durationHour: number;
  durationMin: number;
  durationSec: number;
}

export interface IWriting extends IArtwork {
  genre: string;
  isFiction: boolean;
  wordCount: number;
}

export interface IUploadArtwork extends IArtwork {
  genre?: string;
  units: string;
  widthInches?: number;
  heightInches?: number;
  durationHour?: number;
  durationMin?: number;
  durationSec?: number;
  isPrint?: boolean;
  isFiction?: boolean;
  wordCount?: number;
}

export type UploadArtworkProps = {
  artworkFormData: IUploadArtwork;
};

export interface IArtworkContext {
  getTwentyMostRecentArtworks: () => Promise<MixedArtworks[] | void>;
  getSingleArtwork: (artworkID: number) => Promise<IArtwork | void>;
  getAllArtworkByUserID: (userID: number) => Promise<MixedArtworks[] | void>;
  setCritiqueStatus: (artworkID: number, critiqueStatus: string) => Promise<boolean | void>;
  uploadArtwork: (artworkFormData: UploadArtworkProps) => Promise<boolean | void>;
}
