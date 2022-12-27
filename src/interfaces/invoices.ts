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
  luckyCode: string;
  status: InvoiceStatusEnum;
  userId: string;
  giveawayId?: string;
  giveaway?: {
    reference: string;
    endDate: string;
    startDate: string;
    status: string;
  };
  createdAt: string;
  updatedAt: string;
}
