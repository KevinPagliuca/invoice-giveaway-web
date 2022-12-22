import { type ObjectPathType } from 'helpers';
import { type RegisterFormData } from 'shared/RegisterForm';

type Field = {
  name: keyof RegisterFormData['contact'];
  complexName: ObjectPathType<RegisterFormData>;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
  withShowPassword?: boolean;
  mask?: string;
};

export const CONTACT_FIELDS: Record<keyof RegisterFormData['contact'], Field> = {
  email: {
    name: 'email',
    complexName: 'contact.email',
    label: 'E-mail',
    type: 'email',
    required: true,
  },
  mainPhone: {
    name: 'mainPhone',
    complexName: 'contact.mainPhone',
    label: 'Telefone principal',
    type: 'text',
    mask: '(99) 99999-9999',
    required: true,
  },
  secondaryPhone: {
    name: 'secondaryPhone',
    complexName: 'contact.secondaryPhone',
    label: 'Telefone (Recado)',
    type: 'text',
    mask: '(99) 99999-9999',
    required: false,
  },
};
