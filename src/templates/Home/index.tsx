import { Fragment, useCallback, useState } from 'react';
import useGetAllJutsus from '@/hooks/ReactQuery/useGetAllJutsus';
import BoxJutsus from '@/components/BoxJutsus';
import FilterBar from '@/components/FilterBar';
import JutsuCard from '@/components/JutsuCard';
import BackToTop from '@/components/BackToTop';
import SearchFilter from '@/components/SearchFilter';
import ArrowIcon from '@/public/assets/icons/arrow.svg';
import Base from '../Base';
import * as S from './styles';
import Spinner from '@/components/Spinner';

export type HomeTemplateProps = {
  children: React.ReactNode;
};

const LIMIT = 20;

const Home = () => {
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const {
    data,
    isSuccess,
    hasNextPage,
    isFetching,
    isLoading,
    fetchNextPage,
    isFetchingNextPage,
  } = useGetAllJutsus(LIMIT);

  const handleOpenFilter = useCallback(() => {
    setIsOpenFilter((prev) => !prev);
  }, []);

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
            {!!data &&
              data.pages.map((page, index) => {
                return (
                  <Fragment key={index}>
                    {page.jutsus.map((jutsu) => (
                      <JutsuCard
                        key={jutsu._id}
                        img={jutsu.images}
                        name={jutsu.names.englishName}
                      />
                    ))}
                  </Fragment>
                );
              })}
          </BoxJutsus>

          {(!!isLoading || !!isFetchingNextPage) && (
            <S.ShowMoreLoading>
              <Spinner />
            </S.ShowMoreLoading>
          )}
          {!!data && !!hasNextPage && !isFetchingNextPage && (
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
