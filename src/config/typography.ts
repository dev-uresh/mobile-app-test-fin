import { TextStyle } from 'react-native';

export const fontWeight = {
  heading: '700',
  body: '400',
  label: '600',
} as const satisfies Record<string, TextStyle['fontWeight']>;

export const fontSize = {
  xs: 12,
  sm: 14,
  base: 16,
  lg: 18,
  xl: 20,
  '2xl': 24,
  '3xl': 30,
  '4xl': 36,
  '5xl': 44,
} as const;

export const lineHeight = {
  xs: 16,
  sm: 20,
  base: 24,
  lg: 28,
  xl: 30,
  '2xl': 34,
  '3xl': 40,
  '4xl': 46,
  '5xl': 54,
} as const;

type ScaleKey = keyof typeof fontSize;
type WeightKey = keyof typeof fontWeight;

export function createTextStyle(size: ScaleKey, weight: WeightKey = 'body'): TextStyle {
  return {
    fontSize: fontSize[size],
    lineHeight: lineHeight[size],
    fontWeight: fontWeight[weight],
  };
}

export const typography = {
  ...fontWeight,
  styles: {
    caption: createTextStyle('xs'),
    bodySmall: createTextStyle('sm'),
    body: createTextStyle('base'),
    bodyStrong: createTextStyle('base', 'label'),
    subtitle: createTextStyle('lg'),
    lead: createTextStyle('xl'),
    title: createTextStyle('2xl', 'heading'),
    pageTitle: createTextStyle('3xl', 'heading'),
    hero: createTextStyle('4xl', 'heading'),
    display: createTextStyle('5xl', 'heading'),
    button: createTextStyle('base', 'label'),
    buttonLarge: createTextStyle('xl', 'label'),
  },
} as const;
