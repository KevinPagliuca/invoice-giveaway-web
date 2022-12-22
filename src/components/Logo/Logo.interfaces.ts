export type LogoSizes = 'small' | 'medium' | 'large';

export interface ILogoProps {
  size?: LogoSizes;
  white?: boolean;
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

export type LogoContainerAttributes = {
  white?: boolean;
  size: LogoSizes;
};
