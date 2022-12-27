import { type InputHTMLAttributes } from 'react';
import { type FieldError } from 'react-hook-form';

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
  name: string;
  label?: string;
  error?: FieldError;
  mask?: string | Array<string | RegExp>;
  currency?: boolean;
  withShowPassword?: boolean;
  onValueChange?: (
    value: string | undefined,
    name?: string,
    values?: {
      float: number | null;
      formatted: string;
      value: string;
    }
  ) => void;
}

export type InputContainerAttributes = {
  hasError?: boolean;
};

export type InputFieldAttributes = {
  hasPlaceholder?: boolean;
};

export type InputLabelAttributes = {
  hasPlaceholder?: boolean;
};
