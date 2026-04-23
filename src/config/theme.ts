import { colors } from './colors';

export interface SemanticColors {
  appBackground: string;
  screenBackground: string;
  surface: string;
  surfaceRaised: string;
  border: string;
  borderStrong: string;
  textPrimary: string;
  textSecondary: string;
  textMuted: string;
  iconPrimary: string;
  inputBackground: string;
  inputBorder: string;
  amountAccent: string;
  statusSuccess: string;
  statusDanger: string;
  statusWarning: string;
}

export interface ThemeNavigationColors {
  background: string;
  card: string;
  border: string;
  primary: string;
  text: string;
  notification: string;
}

export interface Theme {
  name: 'dark' | 'light';
  colors: SemanticColors;
  raw: typeof colors;
  navigation: ThemeNavigationColors;
  statusBarStyle: 'light' | 'dark';
  statusBarBackground: string;
}

export const darkTheme: Theme = {
  name: 'dark',
  raw: colors,
  colors: {
    appBackground: '#08131f',
    screenBackground: '#071a33',
    surface: '#062345',
    surfaceRaised: '#314966',
    border: '#3A4E67',
    borderStrong: '#0F4F83',
    textPrimary: '#EEF4FF',
    textSecondary: '#DCE8F7',
    textMuted: '#A7BDD6',
    iconPrimary: '#E7EEF7',
    inputBackground: '#062345',
    inputBorder: '#0F4F83',
    amountAccent: colors.brand.primary,
    statusSuccess: colors.status.success,
    statusDanger: colors.status.danger,
    statusWarning: colors.status.warning,
  },
  navigation: {
    background: '#08131f',
    card: '#0f2233',
    border: '#284661',
    primary: colors.brand.primary,
    text: '#e8f1fb',
    notification: '#de6464',
  },
  statusBarStyle: 'light',
  statusBarBackground: '#08131f',
};

export const lightTheme: Theme = {
  name: 'light',
  raw: colors,
  colors: {
    appBackground: '#F4F8FC',
    screenBackground: '#F0F6FC',
    surface: '#FFFFFF',
    surfaceRaised: '#EAF2FB',
    border: '#CDDEEE',
    borderStrong: '#AFC9E0',
    textPrimary: '#0E2238',
    textSecondary: '#254562',
    textMuted: '#5F7893',
    iconPrimary: '#183A57',
    inputBackground: '#FFFFFF',
    inputBorder: '#AFC9E0',
    amountAccent: colors.brand.primaryStrong,
    statusSuccess: colors.status.success,
    statusDanger: colors.status.danger,
    statusWarning: colors.status.warning,
  },
  navigation: {
    background: '#F4F8FC',
    card: '#FFFFFF',
    border: '#CDDEEE',
    primary: colors.brand.primaryStrong,
    text: '#0E2238',
    notification: '#C13E3D',
  },
  statusBarStyle: 'dark',
  statusBarBackground: '#F4F8FC',
};
