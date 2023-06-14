import {
  IArtwork,
  IPainting,
  IPerformance,
  IPhotograph,
  ISong,
  IVideo,
  IWriting,
} from "./Artworks";

export type MixedArtworks = Array<
  IArtwork | IPainting | IPerformance | IPhotograph | ISong | IVideo | IWriting
>;

export type PaintingProps = {
  painting: IPainting;
};

export type PerformanceProps = {
  performance: IPerformance;
};

export type PhotographProps = {
  photograph: IPhotograph;
};

export type SongProps = {
  song: ISong;
};

export type VideoProps = {
  video: IVideo;
};

export type WritingProps = {
  writing: IWriting;
};
