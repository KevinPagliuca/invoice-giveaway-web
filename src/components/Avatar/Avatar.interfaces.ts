import { type ImgHTMLAttributes } from 'react';

type AvatarProps = {
  size?: 'small' | 'medium' | 'large';
  round?: boolean;
  maxInitials?: number;
};

type AvatarConditionalProps =
  | ({
      src: string;
    } & ImgHTMLAttributes<HTMLImageElement>)
  | ({
      name: string;
    } & React.HTMLAttributes<HTMLSpanElement>);

export type IAvatarProps = AvatarConditionalProps & AvatarProps;

export type AvatarAttributes = {
  size?: string;
  round?: boolean;
  name?: string;
};
