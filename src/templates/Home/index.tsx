import { useCallback, useEffect, useMemo, useState } from 'react';
import BoxJutsus from '@/components/BoxJutsus';
import FilterBar from '@/components/FilterBar';
import JutsuCard from '@/components/JutsuCard';
import BackToTop from '@/components/BackToTop';
import SearchFilter from '@/components/SearchFilter';
import ArrowIcon from '@/public/assets/icons/arrow.svg';
import Base from '../Base';
import Spinner from '@/components/Spinner';
import { JutsuProps } from '@/hooks/ReactQuery/types';
import { useDebounce } from '@/hooks/useDebounce';
import useGetJutsusByFilter from '@/hooks/ReactQuery/useGetJutsusByFilter';
import * as S from './styles';
import Link from 'next/link';

export type FilterCheckProps = {
  type: string;
  option: string;
};

const LIMIT = 20;
const DELAY_DEBOUNCE = 500; //500ms

const Home = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [jutsuList, setJutsuList] = useState<JutsuProps[]>([]);
  const [typedJutsuName, setTypedJutsuName] = useState(``);
  const [filters, setFilters] = useState<FilterCheckProps[]>([]);

  // const dispatch = useAppDispatch();
  // const filtersData = useAppSelector((state) => state.filters);

  const debouncedJutsuName = useDebounce(typedJutsuName, DELAY_DEBOUNCE);

  console.log(`filters`, filters);
  console.log(`debouncedJutsuName`, debouncedJutsuName);

  const debutsSelected = useMemo(() => {
    return filters
      .filter((debut) => debut.type === `Debuts`)
      .map((type) => type.option);
  }, [filters]);

  const classificationsSelected = useMemo(() => {
    return filters
      .filter((classification) => classification.type === `Classifications`)
      .map((type) => type.option);
  }, [filters]);

  const typesSelected = useMemo(() => {
    return filters
      .filter((type) => type.type === `Types`)
      .map((type) => type.option);
  }, [filters]);

  const {
    data: jutsusByFilter,
    hasNextPage: hasNextPageByFilter,
    isLoading: isLoadingByFilter,
    fetchNextPage: fetchNextPageByFilter,
    isFetchingNextPage: isFetchingNextPageByFilter,
  } = useGetJutsusByFilter(debouncedJutsuName, LIMIT, {
    debuts: debutsSelected,
    classifications: classificationsSelected,
    types: typesSelected,
  });

  const handleOpenFilter = useCallback(() => {
    setIsOpenFilter((prev) => !prev);
  }, []);

  function handleTypeJutsuName(e: React.ChangeEvent<HTMLInputElement>) {
    const nameTyped = e.target.value;
    setTypedJutsuName(nameTyped);
  }

  const handleCheckFilters = useCallback(
    (filterChecked: FilterCheckProps) => {
      const prevFilters = filters.filter(
        (filterOption) => filterOption.option !== filterChecked.option,
      );

      const alreadySelected = filters.some(
        (currentFilter) => currentFilter.option === filterChecked.option,
      );

      if (alreadySelected) {
        setFilters(prevFilters);
        return;
      }
      setFilters((prev) => [...prev, filterChecked]);
    },
    [filters],
  );

  useEffect(() => {
    const jutsusByFilterList = jutsusByFilter?.pages.flatMap((page) => {
      return page.jutsus.map((jutsu) => {
        return jutsu;
      });
    });

    const jutsusFetched = !!jutsusByFilterList ? jutsusByFilterList : [];
    setJutsuList(jutsusFetched);
  }, [jutsusByFilter, filters]);

  return (
    <Base>
      <S.Container>
        <FilterBar
          isOpenFilter={isOpenFilter}
          onOpenFilter={handleOpenFilter}
          onCheck={handleCheckFilters}
        />
        <S.Content>
          <SearchFilter
            onOpenFilter={handleOpenFilter}
            onType={handleTypeJutsuName}
          />
          <BoxJutsus>
            {jutsuList.length > 0 &&
              jutsuList.map((jutsu) => (
                <Link key={jutsu._id} href={`jutsu/${jutsu._id}`} passHref>
                  <a>
                    <JutsuCard
                      img={jutsu.images}
                      name={jutsu.names.englishName}
                    />
                  </a>
                </Link>
              ))}
          </BoxJutsus>

          {(!!isLoadingByFilter || !!isFetchingNextPageByFilter) && (
            <S.ShowMoreLoading>
              <Spinner />
            </S.ShowMoreLoading>
          )}
          {!!jutsuList && !!hasNextPageByFilter && !isFetchingNextPageByFilter && (
            <S.ShowMoreButton
              role="button"
              onClick={() => fetchNextPageByFilter()}
            >
              <p>More jutsus</p>
              <ArrowIcon />
            </S.ShowMoreButton>
          )}
        </S.Content>
        <BackToTop />
      </S.Container>
    </Base>
  );
};

export default Home;
