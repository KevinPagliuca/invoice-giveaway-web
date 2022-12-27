export interface IUser {
  id: string;
  cpf: string;
  name: string;
  email: string;
  birthDate: string;
  rg?: string | null;
  cellphone: string;
  cellphone_secondary?: string | null;
  zipCode: string;
  street: string;
  district: string;
  number: string;
  complement?: string | null;
  city: string;
  state: string;
  createdAt: string;
  updatedAt: string;
}

export interface IUserLoginCredentials {
  cpf: string;
  password: string;
}

export interface IAuthResponse {
  user: IUser;
  token: string;
}
