import { IUser } from "./User";

export interface IToken {
  tokenID: number;
  jwt: string;
  tokenType: string;
  createdOn: string;
  expiresOn: string;
  isExpired: boolean;
  isRevoked: boolean;
  user: IUser;
}
