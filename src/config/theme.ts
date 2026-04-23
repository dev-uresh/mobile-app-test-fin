import { colors } from './colors';

export interface Theme {
  name: 'dark' | 'light';
  colors: typeof colors;
}

export const darkTheme: Theme = {
  name: 'dark',
  colors,
};

export const lightTheme: Theme = {
  name: 'light',
  colors,
};
