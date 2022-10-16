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
import * as S from './styles';
import { useDebounce } from '@/hooks/useDebounce';

export type HomeTemplateProps = {
  children: React.ReactNode;
};

type TypeSearch = 'byAll' | 'byName';

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

const LIMIT = 20;
const DELAY_DEBOUNCE = 500; //500ms

const Home = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [jutsuList, setJutsuList] = useState<JutsuProps[]>([]);
  const [typedJutsuName, setTypedJutsuName] = useState(``);
  const [typeSearch, setTypeSearch] = useState<TypeSearch>(`byAll`);

  console.log(`typeSearch`, typeSearch);
  console.log(`jutsuList`, jutsuList);
  const debouncedJutsuName = useDebounce(typedJutsuName, DELAY_DEBOUNCE);

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

  const handleOpenFilter = useCallback(() => {
    setIsOpenFilter((prev) => !prev);
  }, []);

  const handleTypeJutsuName = (e: React.ChangeEvent<HTMLInputElement>) => {
    const nameTyped = e.target.value;

    console.log(`nameTyped`, nameTyped);

    if (!nameTyped) {
      setTypeSearch(`byAll`);
      return;
    }
    setTypeSearch(`byName`);
    setTypedJutsuName(nameTyped);
  };

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
  };

  return (
    <Base>
      <S.Container>
        <FilterBar
          isOpenFilter={isOpenFilter}
          onOpenFilter={handleOpenFilter}
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
