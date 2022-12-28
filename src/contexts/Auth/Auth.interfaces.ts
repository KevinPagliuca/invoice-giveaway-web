import { type ReactNode } from 'react';

import { type IUserLoginCredentials, type IUser } from 'interfaces/users';
import { type RegisterFormData } from 'shared/forms/RegisterForm';
import { type EditProfileFormData } from 'shared/forms/UpdateProfileForm';

export interface IAuthContextData {
  user?: IUser;
  isAuthenticated: boolean;
  handleRegister: (data: RegisterFormData) => void;
  handleLogin: (credentials: IUserLoginCredentials) => Promise<void>;
  handleLogout: () => void;
  handleUpdate: (data: EditProfileFormData) => Promise<void>;
}

export interface IAuthProviderProps {
  children: ReactNode;
}
