import { type ThemeColorsOptions } from 'styles/theme';

export interface IWrapperProps {
  children: React.ReactNode;
  bg?: ThemeColorsOptions;
}

/**
 * Styled Components 💅
 * -----------------
 */
export type WrapperContainerAttributes = {
  bg?: ThemeColorsOptions;
};
