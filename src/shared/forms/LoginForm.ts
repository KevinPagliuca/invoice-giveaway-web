import { CPFRegex } from 'shared/RegExp';
import { z } from 'zod';

export type LoginFormData = z.infer<typeof LoginFormSchema>;
export const LoginFormSchema = z.object({
  cpf: z
    .string({
      required_error: 'O CPF é obrigatório',
      description: 'CPF',
    })
    .regex(CPFRegex, 'CPF inválido'),
  password: z
    .string({
      required_error: 'A senha é obrigatória',
    })
    .min(6, 'Senha deve ter no mínimo 6 caracteres'),
});
