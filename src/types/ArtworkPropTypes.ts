import {
  IArtwork,
  IPainting,
  IPerformance,
  IPhotograph,
  ISong,
  IVideo,
  IWriting,
} from "../interfaces/Artwork";

export type SpecificArtwork =
  | IArtwork
  | IPainting
  | IPerformance
  | IPhotograph
  | ISong
  | IVideo
  | IWriting;

export type PaintingPropTypes = {
  painting: IPainting;
};

export type PerformancePropTypes = {
  performance: IPerformance;
};

export type PhotographPropTypes = {
  photograph: IPhotograph;
};

export type SongPropTypes = {
  song: ISong;
};

export type VideoPropTypes = {
  video: IVideo;
};

export type WritingPropTypes = {
  writing: IWriting;
};
