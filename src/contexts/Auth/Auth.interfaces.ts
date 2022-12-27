import { type ReactNode } from 'react';

import { type IUserLoginCredentials, type IUser } from 'interfaces/users';
import { type RegisterFormData } from 'shared/RegisterForm';

export interface IAuthContextData {
  user?: IUser;
  isAuthenticated: boolean;
  handleRegister: (data: RegisterFormData) => void;
  handleLogin: (credentials: IUserLoginCredentials) => Promise<void>;
  handleLogout: () => void;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
