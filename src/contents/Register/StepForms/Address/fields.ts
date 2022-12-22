import { type ObjectPathType } from 'helpers';
import { type RegisterFormData } from 'shared/RegisterForm';

type Field = {
  name: keyof RegisterFormData['address'];
  complexName: ObjectPathType<RegisterFormData>;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
  withShowPassword?: boolean;
  mask?: string;
};

export const ADDRESS_FIELDS: Record<keyof RegisterFormData['address'], Field> = {
  cep: {
    name: 'cep',
    complexName: 'address.cep',
    label: 'CEP',
    type: 'text',
    mask: '99999-999',
    required: true,
  },
  street: {
    name: 'street',
    complexName: 'address.street',
    label: 'Logradouro',
    type: 'text',
    required: true,
  },
  number: {
    name: 'number',
    complexName: 'address.number',
    label: 'Número',
    type: 'text',
    required: true,
  },
  complement: {
    name: 'complement',
    complexName: 'address.complement',
    label: 'Complemento',
    type: 'text',
    required: false,
  },
  district: {
    name: 'district',
    complexName: 'address.district',
    label: 'Bairro',
    type: 'text',
    required: true,
  },
  city: {
    name: 'city',
    complexName: 'address.city',
    label: 'Cidade',
    type: 'text',
    required: true,
  },
  state: {
    name: 'state',
    complexName: 'address.state',
    label: 'Estado',
    type: 'text',
    required: true,
  },
};
