import { type ObjectPathType } from 'helpers';
import { type EditProfileFormData } from 'shared/forms/UpdateProfileForm';

type Field<T extends keyof EditProfileFormData> = {
  name: keyof EditProfileFormData[T];
  complexName: ObjectPathType<EditProfileFormData>;
  label: string;
  type: 'text' | 'email' | 'password';
  placeholder?: string;
  required?: boolean;
  withShowPassword?: boolean;
  mask?: string;
};

export const ADDRESS_FIELDS: Record<keyof EditProfileFormData['address'], Field<'address'>> = {
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

export const PERSONAL_DATA_FIELDS: Record<
  keyof EditProfileFormData['personal'],
  Field<'personal'>
> = {
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

export const CONTACT_FIELDS: Record<keyof EditProfileFormData['contact'], Field<'contact'>> = {
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
