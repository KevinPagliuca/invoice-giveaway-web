import { toast } from 'react-toastify';

import { useMutation, useQuery } from '@tanstack/react-query';
import { REACT_QUERY_KEYS } from 'constants/react-query';
import { invoiceService } from 'services/invoices';
import { queryClient } from 'services/react-query';

export const useInvoices = () => {
  return useQuery({
    queryKey: [REACT_QUERY_KEYS.MY_INVOICES],
    queryFn: invoiceService.getMine,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};

export const useCreateInvoice = () => {
  return useMutation({
    mutationFn: invoiceService.create,
    onSuccess: () => {
      queryClient.invalidateQueries([REACT_QUERY_KEYS.MY_INVOICES]);
      toast.success('Nota fiscal criada com sucesso!');
    },
    onError: (err) => {
      const error = err as Error;
      toast.error(
        error.message ||
          'Ocorreu um erro inesperado ao criar nota fiscal, tente novamente mais tarde!'
      );
    },
  });
};
