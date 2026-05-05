export type AuthStackParamList = {
  Login: undefined;
  OTP: undefined;
  Biometric: undefined;
};

export type MainStackParamList = {
  Tabs: undefined;
  CardDetail: { id?: string } | undefined;
};

export type BottomTabParamList = {
  Dashboard: undefined;
  AllFiles: undefined;
  Profile: undefined;
};
