export enum InvoiceStatusEnum {
  WAITING = 'WAITING',
  PENDING = 'PENDING',
  WINNER = 'WINNER',
  LOSER = 'LOSER',
}

export interface IInvoice {
  id: string;
  date: string;
  number: string;
  cnpj: string;
  totalValue: number;
  luckyNumber: string;
  status: InvoiceStatusEnum;
  userId: string;
  givewayId?: string;
  giveway?: {
    reference: string;
    endDate: string;
    startDate: string;
    status: string;
  };
  createdAt: string;
  updatedAt: string;
}
