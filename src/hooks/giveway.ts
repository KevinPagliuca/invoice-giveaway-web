import { useQuery } from '@tanstack/react-query';
import { REACT_QUERY_KEYS } from 'constants/react-query';
import { giveawayService } from 'services/giveaway';

export const useActiveGiveaway = () => {
  return useQuery({
    queryKey: [REACT_QUERY_KEYS.ACTIVE_GIVEAWAY],
    queryFn: giveawayService.getActive,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });
};
