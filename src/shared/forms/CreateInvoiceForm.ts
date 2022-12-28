import { formatFormDate } from 'helpers/formatters';
import { z } from 'zod';

import { CNPJRegex, DateRegex } from '../RegExp';

export type CreateInvoiceFormData = z.infer<typeof CreateInvoiceFormSchema>;
export const CreateInvoiceFormSchema = z.object({
  date: z
    .string({
      required_error: 'A data da NF é obrigatória',
    })
    .regex(DateRegex, 'Data inválida')
    .transform(formatFormDate),
  number: z.string({
    required_error: 'O número do COO é obrigatório',
  }),
  cnpj: z
    .string({
      required_error: 'O CNPJ é obrigatório',
    })
    .regex(CNPJRegex, 'CNPJ inválido'),
  totalValue: z
    .string({
      required_error: 'O valor total é obrigatório',
    })
    .transform((value) => {
      return value.replace(',', '.');
    }),
});
