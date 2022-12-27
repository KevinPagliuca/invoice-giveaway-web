/* eslint-disable @typescript-eslint/naming-convention */

declare namespace NodeJS {
  export interface ProcessEnv {
    NODE_ENV: 'development' | 'production' | 'test';
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_TOKEN_KEY_NAME: string;
  }
}
