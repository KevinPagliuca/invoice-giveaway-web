import { type AxiosError } from 'axios';

export type AxiosErrorType = AxiosError<{
  message: string;
  status: number;
  error: string;
}>;
