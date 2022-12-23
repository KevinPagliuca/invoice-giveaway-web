export type LogoSizes = 'small' | 'medium' | 'large';

export interface ILogoProps {
  size?: LogoSizes;
  whiteText?: boolean;
}

export const LogoImageSizes = {
  small: 48,
  medium: 64,
  large: 80,
};

export const LogoTitleSizes = {
  small: '1.5rem',
  medium: '2rem',
  large: '2.5rem',
};

export type LogoTextAttributes = {
  size: LogoSizes;
  whiteText?: boolean;
};
