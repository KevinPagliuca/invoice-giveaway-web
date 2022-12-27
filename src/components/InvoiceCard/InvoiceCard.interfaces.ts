import { type InvoiceStatusEnum, type IInvoice } from 'interfaces/invoices';

export interface IInvoiceCardProps {
  invoice: IInvoice;
}

export type InvoiceCardContainerAttributes = {
  status: InvoiceStatusEnum;
};
