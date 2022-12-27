import { type CreateInvoiceFormData } from 'shared/CreateInvoice';

type Field = {
  name: keyof CreateInvoiceFormData;
  label: string;
  type: 'text' | 'number' | 'email' | 'password';
  placeholder?: string;
  withShowPassword?: boolean;
  mask?: string;
  min?: number;
  currency?: boolean;
};

export const NEW_INVOICE_FORM_FIELDS: Record<keyof CreateInvoiceFormData, Field> = {
  date: {
    name: 'date',
    label: 'Data da NF',
    type: 'text',
    mask: '99/99/9999',
  },
  number: {
    name: 'number',
    label: 'COO da NF',
    type: 'number',
  },
  cnpj: {
    name: 'cnpj',
    label: 'CNPJ',
    type: 'text',
    mask: '99.999.999/9999-99',
  },
  totalValue: {
    name: 'totalValue',
    label: 'Valor total',
    type: 'text',
    currency: true,
  },
} as const;
