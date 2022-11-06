import Link from 'next/link';
import { useCallback, useEffect, useState } from 'react';
import {
  FetchNextPageOptions,
  InfiniteData,
  InfiniteQueryObserverResult,
} from '@tanstack/react-query';
import BoxJutsus from '@/components/BoxJutsus';
import FilterBar from '@/components/FilterBar';
import JutsuCard from '@/components/JutsuCard';
import BackToTop from '@/components/BackToTop';
import SearchFilter from '@/components/SearchFilter';
import ArrowIcon from '@/public/assets/icons/arrow.svg';
import Base from '../Base';
import Spinner from '@/components/Spinner';
import { AllJutsusProps, JutsuProps } from '@/hooks/ReactQuery/types';
import EmptyList from '@/components/EmptyList';
import * as S from './styles';

export type HomeTemplateProps = {
  data: InfiniteData<AllJutsusProps> | undefined;
  hasNextPage: boolean | undefined;
  isLoading: boolean;
  fetchNextPage: (
    options?: FetchNextPageOptions | undefined,
  ) => Promise<InfiniteQueryObserverResult<AllJutsusProps, unknown>>;
  isFetchingNextPage: boolean;
};

const Home = ({
  data,
  hasNextPage,
  isLoading,
  fetchNextPage,
  isFetchingNextPage,
}: HomeTemplateProps) => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);
  const [jutsuList, setJutsuList] = useState<JutsuProps[]>([]);

  const handleOpenFilter = useCallback(() => {
    setIsOpenFilter((prev) => !prev);
  }, []);

  useEffect(() => {
    const jutsusByFilterList = data?.pages.flatMap((page) => {
      return page.jutsus.map((jutsu) => {
        return jutsu;
      });
    });

    const jutsusFetched = !!jutsusByFilterList ? jutsusByFilterList : [];
    setJutsuList(jutsusFetched);
  }, [data]);

  return (
    <Base>
      <S.Container>
        <FilterBar
          isOpenFilter={isOpenFilter}
          onOpenFilter={handleOpenFilter}
        />
        <S.Content>
          <SearchFilter onOpenFilter={handleOpenFilter} />
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
          {!isLoading && jutsuList.length === 0 && <EmptyList />}

          {(!!isLoading || !!isFetchingNextPage) && jutsuList.length === 0 && (
            <S.ShowMoreLoading>
              <Spinner />
            </S.ShowMoreLoading>
          )}
          {!!jutsuList && !!hasNextPage && !isFetchingNextPage && (
            <S.ShowMoreButton role="button" onClick={() => fetchNextPage()}>
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
