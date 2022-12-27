export enum GivewayStatusEnum {
  IN_PROGRESS = 'IN_PROGRESS',
  FINISHED = 'FINISHED',
}

export interface IGiveway {
  id: string;
  startDate: string;
  endDate: string;
  reference: string;
  status: GivewayStatusEnum;
  winnerId?: string;
  createdAt: string;
  updatedAt: string;
}
