import { type AxiosErrorType } from 'interfaces/axios';
import { type IGiveway } from 'interfaces/giveway';
import { api } from 'services/api';

export async function getActive() {
  try {
    const response = await api.get<IGiveway>('/giveaway/active');
    return response.data;
  } catch (err) {
    const error = err as AxiosErrorType;
    const errorMessage =
      error.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde.';
    throw new Error(errorMessage);
  }
}

export const giveawayService = {
  getActive,
};
