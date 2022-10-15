import api from '@/services/api';
import { useInfiniteQuery } from 'react-query';
import { AllJutsusProps } from './types';

export default function useGetAllJutsus(limit: number, enable: boolean) {
  async function getAllJutsuWithPage(pageNumber: number) {
    return await api
      .get<AllJutsusProps>(`/jutsus?limit=${limit}&page=${pageNumber}`)
      .then((response) => response.data);
  }

  return useInfiniteQuery(
    [`jutsus`],
    ({ pageParam = 0 }) => getAllJutsuWithPage(pageParam),
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
