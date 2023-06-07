export interface Artwork {
  artworkID: number;
  title: string;
  statement?: string;
  submissionDate: string;
  url: string;
  averageScore: number;
  isOpenForCritique: boolean;
}

export interface Painting extends Artwork {
  type: string;
  widthInches: number;
  heightInches: number;
}

export interface Performance extends Artwork {
  type: string;
  durationHour: number;
  durationMin: number;
  durationSec: number;
}

export interface Photograph extends Artwork {
  isPrint: boolean;
  widthInches: number;
  heightInches: number;
}

export interface Song extends Artwork {
  durationMin: number;
  durationSec: number;
}

export interface Video extends Artwork {
  type: string;
  durationHour: number;
  durationMin: number;
  durationSec: number;
}

export interface Writing extends Artwork {
  type: string;
  isFiction: boolean;
  wordCount: number;
}
