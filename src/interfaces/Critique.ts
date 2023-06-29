import { SpecificArtwork } from "../types/UIPropTypes";
import { IUser } from "./User";

export interface ICritique {
  critiqueID: number;
  rating: number;
  content?: string;
  submissionDate: string;
  critic: IUser;
  artwork: SpecificArtwork;
}
