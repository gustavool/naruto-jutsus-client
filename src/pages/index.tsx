import type { NextPage } from 'next';
import { useEffect, useMemo, useState } from 'react';
import useGetJutsusByFilter from '@/hooks/ReactQuery/useGetJutsusByFilter';
import { useAppSelector } from '@/hooks/Redux';
import Home from '@/templates/Home';

const LIMIT = 20;
const Index: NextPage = () => {
  const { name, options } = useAppSelector((state) => state.filters);
  const [enableFetch, setEnableFetch] = useState(false);

  const debutsSelected = useMemo(() => {
    return options
      .filter((debut) => debut.type === `Debuts`)
      .map((type) => type.name);
  }, [options]);

  const classificationsSelected = useMemo(() => {
    return options
      .filter((classification) => classification.type === `Classifications`)
      .map((type) => type.name);
  }, [options]);

  const typesSelected = useMemo(() => {
    return options
      .filter((type) => type.type === `Types`)
      .map((type) => type.name);
  }, [options]);

  const {
    data,
    hasNextPage,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
    isError,
  } = useGetJutsusByFilter(
    name,
    LIMIT,
    {
      debuts: debutsSelected,
      classifications: classificationsSelected,
      types: typesSelected,
    },
    enableFetch,
  );

  useEffect(() => {
    if (!enableFetch && !isError) {
      setEnableFetch(true);
    }
  }, [name]);

  return (
    <Home
      data={data}
      hasNextPage={hasNextPage}
      isLoading={isLoading}
      fetchNextPage={fetchNextPage}
      isFetchingNextPage={isFetchingNextPage}
    />
  );
};

export default Index;
