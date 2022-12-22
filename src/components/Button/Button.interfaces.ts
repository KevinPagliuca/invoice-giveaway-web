import { type ReactNode, type ButtonHTMLAttributes } from 'react';

export interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  fullWidth?: boolean;
}

export type ButtonAttributes = {
  fullWidth?: boolean;
};
