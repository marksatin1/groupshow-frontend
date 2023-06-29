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
  artworkType: string;
  title: string;
  artistStatement: string;
  isOpenForCritique: string;
  fileUrl: string;
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
