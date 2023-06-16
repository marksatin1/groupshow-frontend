import { IPainting, IPerformance, IPhotograph, ISong, IVideo, IWriting } from "./Artworks";

export interface IUser {
  userID: number;
  userRole: string;
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  major?: string;
  minor?: string;
  gradeLevel: string;
  creationDate: string;
  paintings?: IPainting[];
  performances?: IPerformance[];
  photographs?: IPhotograph[];
  songs?: ISong[];
  videos?: IVideo[];
  writings?: IWriting[];
}
