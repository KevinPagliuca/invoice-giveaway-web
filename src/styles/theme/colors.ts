import { type ObjectPathType } from 'helpers';

export const colors = {
  // background: '#f5f5f5',
  background: '#EAE8ED',
  primary: '#6B3CB1',
  secondary: '#e53170',
  headline: '#2a2a2a',
  paragraph: '#4a4a4a',
  border: '#6a6a6a',
  white: '#FFFFFF',
  black: '#000000',
  gray: '#A9A9A9',
  error: '#E4113F',
  success: '#7FB550',
  warning: '#FFC107',
} as const;

export type ThemeColorsOptions = ObjectPathType<typeof colors>;
