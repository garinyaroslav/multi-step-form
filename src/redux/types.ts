export interface PersonalInfo {
  fullName: string;
  email: string;
  phoneNumber: string;
}

export interface AppState {
  page: number;
  personalInfo: PersonalInfo;
}
