import { type ImgHTMLAttributes } from 'react';

type AvatarPropsWithName = {
  src?: string;
  name: string;
  maxInitials?: number;
} & React.HTMLAttributes<HTMLSpanElement>;

type MyAvatarWithSrc = {
  src: string;
  name?: string;
  maxInitials?: number;
} & ImgHTMLAttributes<HTMLImageElement>;

type AvatarAllProps = AvatarPropsWithName | MyAvatarWithSrc;

export type IAvatarProps = {
  size?: 'small' | 'medium' | 'large';
  round?: boolean;
  name?: string;
  src?: string;
  maxInitials?: number;
} & AvatarAllProps;

export type AvatarAttributes = {
  size?: string;
  round?: boolean;
  name?: string;
};
