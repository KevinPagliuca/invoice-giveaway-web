import { type ObjectPathType } from 'helpers';
import { type RegisterFormData } from 'shared/forms/RegisterForm';

type Field = {
  name: keyof RegisterFormData['personal'];
  complexName: ObjectPathType<RegisterFormData>;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
  withShowPassword?: boolean;
  mask?: string;
};

export const PERSONAL_DATA_FIELDS: Record<keyof RegisterFormData['personal'], Field> = {
  cpf: {
    name: 'cpf',
    complexName: 'personal.cpf',
    label: 'CPF',
    type: 'text',
    mask: '999.999.999-99',
    required: true,
  },
  name: {
    name: 'name',
    complexName: 'personal.name',
    label: 'Nome completo',
    type: 'text',
    required: true,
  },
  birthDate: {
    name: 'birthDate',
    complexName: 'personal.birthDate',
    label: 'Data de nascimento',
    type: 'text',
    mask: '99/99/9999',
    required: true,
  },
  rg: {
    name: 'rg',
    complexName: 'personal.rg',
    label: 'RG',
    type: 'text',
    required: false,
  },
};
