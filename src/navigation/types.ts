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
  Cards: undefined;
  Transfer: undefined;
  Payments: undefined;
  Statements: undefined;
  Profile: undefined;
  Notifications: undefined;
};
