import { type ObjectPathType } from 'helpers';
import { type RegisterFormData } from 'shared/RegisterForm';

type Field = {
  name: keyof RegisterFormData['password'];
  complexName: ObjectPathType<RegisterFormData>;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
  withShowPassword?: boolean;
  mask?: string;
};

export const PASSWORD_DATA_FIELDS: Record<keyof RegisterFormData['password'], Field> = {
  password: {
    name: 'password',
    complexName: 'password.password',
    label: 'Senha',
    type: 'password',
    withShowPassword: true,
    required: true,
  },
  confirmation: {
    name: 'confirmation',
    complexName: 'password.confirmation',
    label: 'Confirmar senha',
    type: 'password',
    withShowPassword: true,
    required: true,
  },
};
