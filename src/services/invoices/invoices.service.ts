import { type AxiosErrorType } from 'interfaces/axios';
import { type IInvoice } from 'interfaces/invoices';
import { api } from 'services/api';
import { type CreateInvoiceFormData } from 'shared/CreateInvoice';

export async function getMine() {
  try {
    const { data } = await api.get<IInvoice[]>('/invoice/mine');
    return data;
  } catch (err) {
    const error = err as AxiosErrorType;
    const errorMessage =
      error.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde.';
    throw new Error(errorMessage);
  }
}

export async function getById(id: string) {
  try {
    const { data } = await api.get<IInvoice>(`/invoice/find/${id}`);
    return data;
  } catch (err) {
    const error = err as AxiosErrorType;
    const errorMessage =
      error.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde.';
    throw new Error(errorMessage);
  }
}

export async function create(data: CreateInvoiceFormData) {
  try {
    const response = await api.post<IInvoice>('/invoice/create', data);
    return response;
  } catch (err) {
    const error = err as AxiosErrorType;
    const errorMessage =
      error.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde.';
    throw new Error(errorMessage);
  }
}

export async function deleteInvoice(id: string) {
  try {
    const response = await api.delete(`/invoice/delete/${id}`);
    return response;
  } catch (err) {
    const error = err as AxiosErrorType;
    const errorMessage =
      error.response?.data?.message || 'Ocorreu um erro inesperado, tente novamente mais tarde.';
    throw new Error(errorMessage);
  }
}

export const invoiceService = {
  getMine,
  getById,
  create,
  delete: deleteInvoice,
};
