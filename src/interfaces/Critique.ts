import { SpecificArtwork } from "../types/ArtworkPropTypes";
import { IUser } from "./User";

export interface ICritique {
  critiqueID: number;
  rating: number;
  content?: string;
  submissionDate: string;
  critic: IUser;
  artwork: SpecificArtwork;
}
