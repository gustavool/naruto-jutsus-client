import api from '@/services/api';
import { useInfiniteQuery } from 'react-query';
import { AllJutsusProps } from './types';

type FiltersProps = {
  debuts: string[];
  classifications: string[];
  types: string[];
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
  const typesFilter =
    filters.types.length > 0 ? `&types=${filters.types.join(`,`)}` : ``;

  async function getJutsusByFilter(pageNumber: number) {
    return await api
      .get<AllJutsusProps>(
        `/jutsus/filters?limit=${limit}&page=${pageNumber}${debutsFilter}${classificationsFilter}${typesFilter}`,
      )
      .then((response) => response.data);
  }

  return useInfiniteQuery(
    [`jutsus-filtered-${debutsFilter}-${classificationsFilter}-${typesFilter}`],
    ({ pageParam = 0 }) => getJutsusByFilter(pageParam),
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
