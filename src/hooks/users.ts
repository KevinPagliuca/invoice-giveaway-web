import { useQuery } from '@tanstack/react-query';
import { REACT_QUERY_KEYS } from 'constants/react-query';
import { getActiveToken } from 'services/api';
import { usersService } from 'services/users';

export const useMe = () => {
  const token = getActiveToken();
  return useQuery({
    queryKey: [REACT_QUERY_KEYS.GET_ME],
    queryFn: () => usersService.getMe(),
    staleTime: 1000 * 60 * 10, // 10 minutes
    enabled: !!token,
  });
};
