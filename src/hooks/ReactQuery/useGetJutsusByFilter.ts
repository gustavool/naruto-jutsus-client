import api from '@/services/api';
import { useInfiniteQuery } from 'react-query';
import { AllJutsusProps } from './types';

export default function useGetJutsusByFilter(limit: number, enable: boolean) {
  async function getJutsusByFilter(pageNumber: number) {
    return await api
      .get<AllJutsusProps>(`/jutsus?limit=${limit}&page=${pageNumber}`)
      .then((response) => response.data);
  }

  return useInfiniteQuery(
    [`jutsus-filtered`],
    ({ pageParam = 0 }) => getJutsusByFilter(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const lastPageAvailable = Math.floor(lastPage.total / limit) - 1;
        if (lastPage.page < lastPageAvailable) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      enabled: enable,
    },
  );
}
