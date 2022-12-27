import { type ObjectPathType } from 'helpers';
import { type EditProfileFormData } from 'shared/UpdateProfileForm';

type Field = {
  name: keyof EditProfileFormData['address'];
  complexName: ObjectPathType<EditProfileFormData>;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
  withShowPassword?: boolean;
  mask?: string;
};

export const ADDRESS_FIELDS: Record<keyof EditProfileFormData['address'], Field> = {
  zipCode: {
    name: 'zipCode',
    complexName: 'address.zipCode',
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
