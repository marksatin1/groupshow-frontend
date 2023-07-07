export interface IRegisterForm {
  userRole: string;
  firstName: string;
  lastName: string;
  email: string;
  gradeLevel?: string;
  major?: string;
  minor?: string;
}

export interface IResetPasswordForm {
  email: string;
  currentPassword: string;
  newPassword: string;
  confirmNewPassword: string;
}

export interface ILoginForm {
  email: string;
  password: string;
}

export interface ISubmitArtworkForm {
  artistID: number;
  artworkType: string;
  title: string;
  artistStatement: string;
  isOpenForCritique: boolean;
  bucketUrl: string;
  paintingType?: string;
  performanceType?: string;
  videoType?: string;
  writingType?: string;
  artworkUnits?: string;
  width?: number;
  height?: number;
  durationHours?: number;
  durationMins?: number;
  durationSecs?: number;
  isPrinted?: boolean;
  isFiction?: boolean;
  wordCount?: number;
}

export interface ISubmitCritiqueForm {
  rating: number;
  content: string;
  criticID: number;
  artworkID: number;
}
