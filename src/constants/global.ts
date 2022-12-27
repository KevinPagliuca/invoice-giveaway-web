import { type StepsType } from 'components/Stepper';

export type RegisterStepsKeys = 'personal' | 'contact' | 'address' | 'password';
export const REGISTER_STEPS: StepsType<number, RegisterStepsKeys>[] = [
  { number: 1, label: 'Dados Pessoais', key: 'personal' },
  { number: 2, label: 'Contato', key: 'contact' },
  { number: 3, label: 'Endereço', key: 'address' },
  { number: 4, label: 'Senha', key: 'password' },
];

export type EditProfileStepsKeys = 'personal' | 'contact' | 'address';
export const UPDATE_USER_PROFILE_STEPS: StepsType<number, EditProfileStepsKeys>[] = [
  { number: 1, label: 'Dados Pessoais', key: 'personal' },
  { number: 2, label: 'Contato', key: 'contact' },
  { number: 3, label: 'Endereço', key: 'address' },
];
