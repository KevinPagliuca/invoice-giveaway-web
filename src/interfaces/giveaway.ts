export enum GiveawayStatusEnum {
  IN_PROGRESS = 'IN_PROGRESS',
  FINISHED = 'FINISHED',
}

export interface IGiveaway {
  id: string;
  startDate: string;
  endDate: string;
  reference: string;
  status: GiveawayStatusEnum;
  winnerId?: string;
  createdAt: string;
  updatedAt: string;
}
