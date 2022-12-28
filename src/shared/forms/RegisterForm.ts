import { formatFormDate } from 'helpers/formatters';
import { z } from 'zod';

import { CPFRegex, CEPRegex, PhoneRegex, DateRegex } from '../RegExp';

const getStringValidation = (message: string) => {
  return z
    .string({
      required_error: message,
    })
    .refine((value) => value.length > 0, {
      message: 'O campo é obrigatório',
    });
};

const RegisterPersonalSchema = z.object({
  cpf: z
    .string({
      required_error: 'O CPF é obrigatório',
      description: 'CPF',
    })
    .regex(CPFRegex, 'CPF inválido'),
  name: getStringValidation('O nome é obrigatório'),
  birthDate: z
    .string({
      required_error: 'A data de nascimento é obrigatória',
    })
    .regex(DateRegex, 'Data inválida')
    .refine((value) => value.length > 0, {
      message: 'O campo é obrigatório',
    })
    .transform(formatFormDate),
  rg: z.string({}).optional(),
});

const RegisterContactSchema = z.object({
  email: z.string({ required_error: 'O e-mail é obrigatório' }).email('E-mail inválido'),
  mainPhone: z
    .string({ required_error: 'O telefone é obrigatório' })
    .regex(PhoneRegex, 'Formato inválido'),
  secondaryPhone: z.string().optional(),
});

const RegisterAddressSchema = z.object({
  zipCode: z
    .string({
      required_error: 'O CEP é obrigatório',
    })
    .regex(CEPRegex, 'CEP inválido'),
  street: getStringValidation('O logradouro é obrigatório'),
  number: getStringValidation('O número é obrigatório'),
  district: getStringValidation('O bairro é obrigatório'),
  city: getStringValidation('A cidade é obrigatória'),
  state: getStringValidation('O estado é obrigatório'),
  complement: z.string().optional(),
});

const RegisterPasswordDataSchema = z
  .object({
    password: z
      .string({ required_error: 'A senha é obrigatória' })
      .min(6, 'Senha deve ter no mínimo 6 caracteres'),
    confirmation: z
      .string({ required_error: 'A confirmação de senha é obrigatória' })
      .min(6, 'Senha deve ter no mínimo 6 caracteres'),
  })
  .refine((data) => data.password === data.confirmation, {
    message: 'As senhas não conferem',
    path: ['confirmation'],
  });

export const RegisterFormSchema = z.object({
  personal: RegisterPersonalSchema,
  contact: RegisterContactSchema,
  address: RegisterAddressSchema,
  password: RegisterPasswordDataSchema,
});

export type RegisterFormData = z.infer<typeof RegisterFormSchema>;
