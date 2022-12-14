import api from '@/services/api';
import { useInfiniteQuery } from '@tanstack/react-query';
import { AllJutsusProps } from './types';

type FiltersProps = {
  debuts: string[];
  classifications: string[];
  types: string[];
};

export default function useGetJutsusByFilter(
  name: string,
  limit: number,
  filters: FiltersProps,
  enabled: boolean,
) {
  const nameFilter = !!name ? `&name=${name}` : ``;
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
        `/jutsus/filters?limit=${limit}&page=${pageNumber}${nameFilter}${debutsFilter}${classificationsFilter}${typesFilter}`,
      )
      .then((response) => response.data);
  }

  return useInfiniteQuery(
    [
      `jutsus-filtered`,
      nameFilter,
      debutsFilter,
      classificationsFilter,
      typesFilter,
    ],
    ({ pageParam = 0 }) => getJutsusByFilter(pageParam),
    {
      getNextPageParam: (lastPage) => {
        const lastPageAvailable =
          lastPage.total % limit === 0
            ? lastPage.total / limit - 1
            : Math.floor(lastPage.total / limit);

        if (lastPage.page < lastPageAvailable) {
          return lastPage.page + 1;
        }
        return undefined;
      },
      staleTime: 1000 * 60 * 10, //10 minutes
      enabled: enabled,
      retry: false,
    },
  );
}
