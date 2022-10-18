import { useCallback, useEffect, useState } from 'react';
import useGetAllJutsus from '@/hooks/ReactQuery/useGetAllJutsus';
import BoxJutsus from '@/components/BoxJutsus';
import FilterBar from '@/components/FilterBar';
import JutsuCard from '@/components/JutsuCard';
import BackToTop from '@/components/BackToTop';
import SearchFilter from '@/components/SearchFilter';
import ArrowIcon from '@/public/assets/icons/arrow.svg';
import Base from '../Base';
import Spinner from '@/components/Spinner';
import { AllJutsusProps, JutsuProps } from '@/hooks/ReactQuery/types';
import useGetJutsusByName from '@/hooks/ReactQuery/useGetJutsusByName';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from 'react-query';
import { useDebounce } from '@/hooks/useDebounce';
import useGetJutsusByFilter from '@/hooks/ReactQuery/useGetJutsusByFilter';
import * as S from './styles';

export type HomeTemplateProps = {
  children: React.ReactNode;
};

type TypeSearch = 'byAll' | 'byName' | 'byFilter';

type SearchOptions = {
  data: InfiniteData<AllJutsusProps> | undefined;
  hasNextPage: boolean | undefined;
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<AllJutsusProps, unknown>>;
  isFetchingNextPage: boolean;
};

type SearchOptionsObjLiterals = {
  [key in TypeSearch]: SearchOptions;
};

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
  const [typeSearch, setTypeSearch] = useState<TypeSearch>(`byAll`);
  const [filters, setFilters] = useState<FilterCheckProps[]>([]);

  const debouncedJutsuName = useDebounce(typedJutsuName, DELAY_DEBOUNCE);

  // console.log(`filterOptions`, filterOptions);

  // const filtersSeparated = filters.map((filter) => {
  //   console.log(new Set(Object.keys(filter)));
  // });

  const {
    data: allJutsus,
    hasNextPage: hasNextPageAllJutsus,
    isLoading: isLoadingAllJutsus,
    fetchNextPage: fetchNextPageAllJutsus,
    isFetchingNextPage: isFetchingNextPageAllJutsus,
  } = useGetAllJutsus(LIMIT, typeSearch === `byAll`);

  const {
    data: jutsusByName,
    hasNextPage: hasNextPageJutsusByName,
    isLoading: isLoadingJutsusByName,
    fetchNextPage: fetchNextPageJutsusByName,
    isFetchingNextPage: isFetchingNextPageJutsusByName,
  } = useGetJutsusByName(LIMIT, debouncedJutsuName, typeSearch === `byName`);

  const {
    data: jutsusByFilter,
    hasNextPage: hasNextPageByFilter,
    isLoading: isLoadingByFilter,
    fetchNextPage: fetchNextPageByFilter,
    isFetchingNextPage: isFetchingNextPageByFilter,
  } = useGetJutsusByFilter(LIMIT, typeSearch === `byFilter`, {
    debuts: [`Anime`, `Game`],
    classifications: [],
  });

  const handleOpenFilter = useCallback(() => {
    setIsOpenFilter((prev) => !prev);
  }, []);

  function handleTypeJutsuName(e: React.ChangeEvent<HTMLInputElement>) {
    const nameTyped = e.target.value;

    if (!nameTyped) {
      setTypeSearch(`byAll`);
      return;
    }
    setTypeSearch(`byName`);
    setTypedJutsuName(nameTyped);
  }

  function handleCheckFilters(filterChecked: FilterCheckProps) {
    // const listFilters = Array.from(
    //   new Set(filters.map((filterObj) => filterObj.type)),
    // ).map((type) => {
    //   return {
    //     type: type,
    //     option: filters
    //       .filter((filterObj) => filterObj.type === type)
    //       .map((filterSameType) => filterSameType.option),
    //   };
    // });

    const listTest = filters.filter((filterOption) => {
      console.log(`filterOption`, filterOption);
      console.log(`filterChecked`, filterChecked);
      return filterOption.option !== filterChecked.option;
    });

    const alreadySelected = filters.some(
      (currentFilter) => currentFilter.option === filterChecked.option,
    );

    if (alreadySelected) {
      setFilters(listTest);
    } else {
      setFilters((prev) => [...prev, filterChecked]);
    }

    console.log(`listTest`, listTest);
  }
  console.log(`filters`, filters);
  useEffect(() => {
    if (typeSearch === `byAll`) {
      const allJutsusList = allJutsus?.pages.flatMap((page) => {
        return page.jutsus.map((jutsu) => {
          return jutsu;
        });
      });

      const jutsusFetched = !!allJutsusList ? allJutsusList : [];
      setJutsuList(jutsusFetched);
    }

    if (typeSearch === `byName`) {
      const jutsusByNameList = jutsusByName?.pages.flatMap((page) => {
        return page.jutsus.map((jutsu) => {
          return jutsu;
        });
      });

      const jutsusFetched = !!jutsusByNameList ? jutsusByNameList : [];

      setJutsuList(jutsusFetched);
    }
  }, [typeSearch, allJutsus, jutsusByName]);

  const searchOptions: SearchOptionsObjLiterals = {
    byName: {
      data: jutsusByName,
      hasNextPage: hasNextPageJutsusByName,
      isLoading: isLoadingJutsusByName,
      fetchNextPage: fetchNextPageJutsusByName,
      isFetchingNextPage: isFetchingNextPageJutsusByName,
    },
    byAll: {
      data: allJutsus,
      hasNextPage: hasNextPageAllJutsus,
      isLoading: isLoadingAllJutsus,
      fetchNextPage: fetchNextPageAllJutsus,
      isFetchingNextPage: isFetchingNextPageAllJutsus,
    },
    byFilter: {
      data: jutsusByFilter,
      hasNextPage: hasNextPageByFilter,
      isLoading: isLoadingByFilter,
      fetchNextPage: fetchNextPageByFilter,
      isFetchingNextPage: isFetchingNextPageByFilter,
    },
  };

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
                <JutsuCard
                  key={jutsu._id}
                  img={jutsu.images}
                  name={jutsu.names.englishName}
                />
              ))}
          </BoxJutsus>

          {(!!searchOptions[typeSearch].isLoading ||
            !!searchOptions[typeSearch].isFetchingNextPage) && (
            <S.ShowMoreLoading>
              <Spinner />
            </S.ShowMoreLoading>
          )}
          {!!jutsuList &&
            !!searchOptions[typeSearch].hasNextPage &&
            !searchOptions[typeSearch].isFetchingNextPage && (
              <S.ShowMoreButton
                role="button"
                onClick={() => searchOptions[typeSearch].fetchNextPage()}
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
