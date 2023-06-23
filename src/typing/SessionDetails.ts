import { IUser } from "./User";

export interface ISessionDetails {
  currentUser: IUser | void;
  access: {
    jwt: string | undefined;
    expMs: number | null;
  };
  refresh: {
    jwt: string | null;
    expMs: number | null;
  };
}
