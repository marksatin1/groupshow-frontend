import { IPainting, IPerformance, IPhotograph, ISong, IVideo, IWriting } from "./Artwork";
import { IToken } from "./Token";

export interface IUser {
  userID: number;
  userRole: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  gradeLevel?: string;
  major?: string;
  minor?: string;
  createdOn: string;
  registrationToken: string;
  isAccountActivated: boolean;
  tokens: IToken[];
  paintings?: IPainting[];
  performances?: IPerformance[];
  photographs?: IPhotograph[];
  songs?: ISong[];
  videos?: IVideo[];
  writings?: IWriting[];
}
