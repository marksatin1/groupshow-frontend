import { ICritique } from "./Critique";
import { IUser } from "./User";

export interface IArtwork {
  artworkID: number;
  artworkType: string;
  title: string;
  artistStatement?: string;
  artist: IUser;
  submissionDate: string;
  bucketUrl: string;
  averageScore: number;
  isOpenForCritique: boolean;
  critiques?: ICritique[];
}

export interface IPainting extends IArtwork {
  paintingType: string;
  artworkUnits: string;
  width: number;
  height: number;
}

export interface IPerformance extends IArtwork {
  performanceType: string;
  durationHours: number;
  durationMins: number;
  durationSecs: number;
}

export interface IPhotograph extends IArtwork {
  isPrinted: boolean;
  artworkUnits: string;
  width: number;
  height: number;
}

export interface ISong extends IArtwork {
  durationMins: number;
  durationSecs: number;
}

export interface IVideo extends IArtwork {
  videoType: string;
  durationHours: number;
  durationMins: number;
  durationSecs: number;
}

export interface IWriting extends IArtwork {
  writingType: string;
  isFiction: boolean;
  wordCount: number;
}
