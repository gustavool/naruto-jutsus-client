import api from '@/services/api';
import { useInfiniteQuery } from 'react-query';
import { AllJutsusProps } from './types';

export default function useGetJutsusByName(
  limit: number,
  name: string,
  enable: boolean,
) {
  async function getJutsusByName(pageNumber: number) {
    return await api
      .get<AllJutsusProps>(
        `/jutsu/name/${name}?limit=${limit}&page=${pageNumber}`,
      )
      .then((response) => response.data);
  }

  return useInfiniteQuery(
    [`jutsu-${name}`],
    ({ pageParam = 0 }) => getJutsusByName(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const lastPageAvailable = Math.floor(lastPage.total / limit);
        if (lastPage.page < lastPageAvailable) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      enabled: enable,
    },
  );
}
