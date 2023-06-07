import { Painting, Performance, Photograph, Song, Video, Writing } from "./Artwork";

export interface User {
  userID: number;
  role: string;
  email: string;
  password?: string;
  firstName: string;
  lastName: string;
  major?: string;
  minor?: string;
  gradeLevel: string;
  creationDate: string;
  paintings?: Painting[];
  performances?: Performance[];
  photographs?: Photograph[];
  songs?: Song[];
  videos?: Video[];
  writings?: Writing[];
}
