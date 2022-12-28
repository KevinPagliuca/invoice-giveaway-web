import { z } from 'zod';

import { CPFRegex } from '../RegExp';

export const FirstSchema = z.object({
  cpf: z
    .string({
      required_error: 'O CPF é obrigatório',
    })
    .regex(CPFRegex, 'CPF inválido'),
});

export const LastSchema = z
  .object({
    password: z
      .string({
        required_error: 'A senha é obrigatória',
      })
      .min(6, 'A senha deve ter no mínimo 6 dígitos'),
    confirmation: z
      .string({
        required_error: 'A confirmação de senha é obrigatória',
      })
      .min(6, 'A senha deve ter no mínimo 6 dígitos'),
    code: z
      .string({
        required_error: 'O código é obrigatório',
      })
      .min(6, 'O código deve ter 6 dígitos'),
  })
  .superRefine((data, ctx) => {
    if (data.password !== data.confirmation) {
      ctx.addIssue({
        code: 'custom',
        message: 'As senhas não conferem',
      });
    }
  });

export const RecoverPassFormSchema = z.object({
  recoverPass: FirstSchema,
  newPassword: LastSchema,
});
export type RecoverPassFormData = z.infer<typeof RecoverPassFormSchema>;
