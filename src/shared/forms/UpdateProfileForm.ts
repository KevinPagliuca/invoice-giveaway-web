import { formatFormDate } from 'helpers/formatters';
import { z } from 'zod';

import { CEPRegex, PhoneRegex, DateRegex } from '../RegExp';

const getStringValidation = (message: string) => {
  return z
    .string({
      required_error: message,
    })
    .refine((value) => value.length > 0, {
      message: 'O campo é obrigatório',
    });
};

const UpdateProfilePersonalSchema = z.object({
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

const UpdateProfileContactSchema = z.object({
  email: z.string({ required_error: 'O e-mail é obrigatório' }).email('E-mail inválido'),
  mainPhone: z
    .string({ required_error: 'O telefone é obrigatório' })
    .regex(PhoneRegex, 'Formato inválido'),
  secondaryPhone: z.string().optional(),
});

const UpdateProfileAddressSchema = z.object({
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

export const UpdateProfileFormSchema = z.object({
  personal: UpdateProfilePersonalSchema,
  contact: UpdateProfileContactSchema,
  address: UpdateProfileAddressSchema,
});

export type EditProfileFormData = z.infer<typeof UpdateProfileFormSchema>;
