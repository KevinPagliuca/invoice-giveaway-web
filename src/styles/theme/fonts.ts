import { Ubuntu, Roboto } from '@next/font/google';

const RobotoFont = Roboto({
  weight: ['400', '500', '700', '900'],
  subsets: ['latin'],
  style: 'normal',
  preload: true,
  display: 'swap',
});

const UbuntuFont = Ubuntu({
  weight: ['400', '500', '700'],
  style: ['normal'],
  subsets: ['latin'],
  preload: true,
  display: 'swap',
});

export const fonts = {
  primary: RobotoFont.style.fontFamily,
  secondary: UbuntuFont.style.fontFamily,
} as const;
