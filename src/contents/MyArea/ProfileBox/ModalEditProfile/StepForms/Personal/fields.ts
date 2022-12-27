import { type ObjectPathType } from 'helpers';
import { type EditProfileFormData } from 'shared/UpdateProfileForm';

type Field = {
  name: keyof EditProfileFormData['personal'];
  complexName: ObjectPathType<EditProfileFormData>;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
  withShowPassword?: boolean;
  mask?: string;
};

export const PERSONAL_DATA_FIELDS: Record<keyof EditProfileFormData['personal'], Field> = {
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
