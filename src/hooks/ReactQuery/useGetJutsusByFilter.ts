import api from '@/services/api';
import { useInfiniteQuery } from 'react-query';
import { AllJutsusProps } from './types';

type FiltersProps = {
  debuts: string[];
  classifications: string[];
};

export default function useGetJutsusByFilter(
  limit: number,
  enable: boolean,
  filters: FiltersProps,
) {
  const debutsFilter =
    filters.debuts.length > 0 ? `&debuts=${filters.debuts.join(`,`)}` : ``;
  const classificationsFilter =
    filters.classifications.length > 0
      ? `&classifications=${filters.classifications.join(`,`)}`
      : ``;

  async function getJutsusByFilter(pageNumber: number) {
    return await api
      .get<AllJutsusProps>(
        `/jutsus/filters?limit=${limit}&page=${pageNumber}${debutsFilter}${classificationsFilter}`,
      )
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
